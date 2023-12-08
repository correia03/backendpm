import Router from 'express';
import { getinfouserid } from '../controllers/info.controllers.js';

const infoRoutes = Router();

// Adjust the route definition to include the userId parameter
infoRoutes.get('/getinfouserid/:userId', getinfouserid);

export { infoRoutes };
