import express from 'express';
import apliques from './apliques.routes.js';

const routes = (app) => {
  app.route('/').get((req, res) => res.status(200).send('Inphantil Moveis'));

  app.use(express.json(), apliques);
};

export default routes;
