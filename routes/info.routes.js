import Router from 'express';
import { getinfouserid, addinfo, updateinfo, addsaldo } from '../controllers/info.controllers.js';

const infoRoutes = Router();

// Adjust the route definition to include the userId parameter
infoRoutes.get('/getinfouserid/:userId', getinfouserid);
infoRoutes.post('/addinfo', addinfo);
infoRoutes.put('/updateinfo/:userId', updateinfo);
infoRoutes.post('/addsaldo', addsaldo);

export { infoRoutes };
