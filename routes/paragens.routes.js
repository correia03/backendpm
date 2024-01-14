import Router from 'express';
import { getparagens, addparagem  } from '../controllers/paragens.controllers.js';

const paragens = Router();

paragens.post('/getparagens', getparagens);
paragens.post('/addparagem', addparagem);

export { paragens };
