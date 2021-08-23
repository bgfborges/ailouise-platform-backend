import express from 'express';
import './database';

const app = express();

app.get('/api-status', (_, res) => {
    return res.status(200).json({message: 'Priviet Mira'});
});

app.listen(3000, () => console.log('🚀 Server Listening to port 3000'));