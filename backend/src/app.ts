import express  from 'express';
import logger   from 'morgan';
import path     from 'path';


const app = express();


app.use(express.static(path.join(__dirname, '../public')));
app.use(logger('dev'));

app.get('/', (req, res) => {
    res.send('The sedulous hyena ate the antelope!');
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
    return console.log(`server is listening on ${port}`);
});
