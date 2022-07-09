import publicRoutes from './routes/publicRoute.js'
import privateRoutes from './routes/privateRoute.js'
import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
dotenv.config();
const PORT = process.env.PORT || 5000;
const server = express();

server.use([cors(), express.json(), publicRoutes, privateRoutes]);

server.listen(PORT, () => console.log(`listening on port ${PORT}`));