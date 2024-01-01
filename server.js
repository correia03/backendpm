import express from 'express';
import cors from 'cors';
import morgan from 'morgan';
import 'dotenv/config';

// SERVER ROUTES
import { api } from './routes/index.js';
import { database } from './config/context/database.js';

//--REST SERVER--//
const server = express()

server.use(cors());

// output dados de pedido HTTP - logger
server.use(morgan('short'));

// parse dados dos pedidos no content-type - application/json
server.use(express.json());

// http://localhost:4242/api ......
server.use('/api', api);

try {
  database.sync({ force: false, alter: true });
} catch (error) {
  console.info(error);
}

// correr server no url host:port definido em .env
server.listen(process.env.SERVER_PORT, "0.0.0.0", () => {
  console.log(
    'Server up and running at http://%s:%s',
    process.env.SERVER_HOST,
    process.env.SERVER_PORT
  );
});