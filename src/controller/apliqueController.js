import aplique from '../models/Aplique.js';

class ApliqueController {
  static async listarApliques(req, res) {
    try {
      const listaApliques = await aplique.find({});
      res.status(200).json(listaApliques);
    } catch (erro) {
      res
        .staus(500)
        .json({ message: ` ${erro.message} - falha na requisição` });
    }
  }

  static async listarApliquePorId(req, res) {
    try {
      const id = req.params.id;
      const apliqueEncontrado = await aplique.findById(id);
      res.status(200).json(apliqueEncontrado);
    } catch (erro) {
      res
        .status(500)
        .json({ message: `${erro.message} - falha na requisição do aplique` });
    }
  }

  static async cadastrarAplique(req, res) {
    const novoAplique = req.body;
    try {
      const apliqueCriado = await aplique.create(novoAplique);
      res.status(201).json({
        message: 'Aplique criado com sucesso',
        aplique: apliqueCriado,
      });
    } catch (erro) {
      res
        .status(500)
        .json({ message: `${erro.message} - falha ao cadastrar aplique` });
    }
  }

  static async atualizarAplique(req, res) {
    const id = req.params.id;
    await aplique.findByIdAndUpdate(id, req.body);
    res.status(200).json({message})
  }
}

export default ApliqueController;
