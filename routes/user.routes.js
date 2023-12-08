// user.routes.js
import Router from 'express';
import { login, register } from '../controllers/user.controllers.js';

const usersRoutes = Router();

usersRoutes.post('/register', register);
usersRoutes.post('/login', login);

export { usersRoutes };
