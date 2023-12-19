import Router from 'express';
import { usersRoutes } from './user.routes.js';
import { infoRoutes } from './info.routes.js';
import { rotas } from './rotas.routes.js';
import { compras } from './compras.routes.js';
const api = Router();
api.use('/users', usersRoutes);
api.use('/info', infoRoutes);
api.use('/rotas',rotas);
api.use('/compras',compras);






export { api };
