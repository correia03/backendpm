import {Router} from 'express';
import {addcompra,getcompras} from '../controllers/compras.controllers.js';

const compras = Router();

compras.post('/novacompras/:userId/:rotasId',addcompra);
compras.get('/getcompras',getcompras);

export {compras};

