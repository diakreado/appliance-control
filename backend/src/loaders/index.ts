import { Application } from 'express';

import expressLoader   from './express';

export default function defaultLoader(app : Application) {

    expressLoader(app);

}