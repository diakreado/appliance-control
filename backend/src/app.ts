import express  from 'express';
import config   from './config';
import loader   from './loaders';


const app = express();

loader(app);

app.listen(config.port, () => {
    return console.log(`Server is listening on ${ config.port }`);
});
