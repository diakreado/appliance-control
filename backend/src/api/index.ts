import { Request,
         Response } from 'express';

const lol = {
    index : (req : Request, res : Response) => {
        res.send({ status : 'OK' });
    },
};

const api = {
    '/' : {
        get : lol.index,
    },
};
export default api;