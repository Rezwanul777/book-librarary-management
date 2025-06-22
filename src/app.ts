import express, { Application } from 'express';
import cors from 'cors';

import errorHandler from './middleware/errorHandeller';
import router from './routes';



const app:Application = express();

//middleware
app.use(express.json());

app.use(cors())
// app.use(express.urlencoded({ extended: true }));

// router connect
app.use('/api', router);

app.get('/', (req, res) => {
    res.send('Hello World!');
});

// error middleware
app.use(errorHandler);

export default app;