import Router from 'express';
import {  addrotas,getrotas } from '../controllers/rotas.controllers.js';

const rotas = Router();

rotas.post('/addrotas', addrotas);
rotas.get('/getrotas',getrotas)

export { rotas };
