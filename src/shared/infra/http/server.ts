import 'reflect-metadata';
import express from 'express';
import { routes } from './routes';
import '@shared/infra/typeorm/index';


const app = express();

app.use(routes);

app.get('/api-status', (_, res) => {
    return res.status(200).json({message: 'Priviet Mira'});
});

app.listen(3000, () => console.log('🚀 Server Listening to port 3000'));