import Router from 'express';
import {  addrotas } from '../controllers/rotas.controllers.js';

const rotas = Router();

rotas.post('/addrotas', addrotas);

export { rotas };
