import express, { Application,
                  Request,
                  Response,
                  NextFunction } from 'express';

import logger   from 'morgan';
import helmet   from 'helmet';
import path     from 'path';

import api      from '../api';

export default function expressLoader(app : Application) {

    app.use(express.static(path.join(__dirname, '../public')));
    app.use(logger('dev'));
    app.use(helmet());

    app.map = (a : object, route : any) => {
        route = route || '';
        for (let key in a) {
            switch (typeof a[key]) {

                case 'object':
                    app.map(a[key], route + key);
                    break;

                case 'function':
                    switch (key) {
                        case 'get'   : app.get(   route, a[key]); break;
                        case 'post'  : app.post(  route, a[key]); break;
                        case 'put'   : app.put(   route, a[key]); break;
                        case 'delet' : app.delete(route, a[key]); break;
                    }
                    break;
          }
        }
    };

    app.map({ '/api' : api });

    app.use(( err  : { status : number, message : string },
              req  : Request,
              res  : Response,
              next : NextFunction 
    ) => {
        res.status(err.status || 500);
        res.send({ error : err.message });
    });

    app.use((req : Request, res : Response) => {
        res.status(404);
        res.send({ error: "404 : not found" });
    });

}