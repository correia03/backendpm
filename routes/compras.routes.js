import {Router} from 'express';
import {addcompra} from '../controllers/compras.controllers.js';

const compras = Router();

compras.post('/novacompras/:userId/:rotasId',addcompra);

export {compras};

