import express from 'express';
import ApliqueController from '../controller/apliqueController.js';

const routes = express.Router();

routes.get('/apliques', ApliqueController.listarApliques);
routes.get('/apliques/:id', ApliqueController.listarApliquePorId);
routes.post('/apliques/', ApliqueController.cadastrarAplique);

export default routes;
