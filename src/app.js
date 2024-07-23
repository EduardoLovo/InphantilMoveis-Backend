import express from 'express';
import conectaNaDatabase from './config/dbConnect.js';
import routes from './routes/index.routes.js';

const conexao = await conectaNaDatabase();

conexao.on('error', (erro) => {
  console.error('Erro de conexao:', erro);
});

conexao.once('open', () => {
  console.log('Conexao com o banco feita com sucesso');
});

const app = express();
routes(app);
// app.get('/', (req, res) => {
//   res.status(200).send('Api Inphantil Moveis');
// });

export default app;
