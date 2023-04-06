const cidades = require("../models/cidades");

async function create(req, res) {
  try {
    const { name, state } = req.body;
    // Verifica se o corpo da requisição está vazio e se foram enviados valores numéricos
    if (!isNaN(name) || !isNaN(state)) {
      return res
        .status(400)
        .json({
          error:
            "Os parâmetros são inválidos ou não foram preenchidos corretamente!",
        });
    }
    // retorna erro se a cidade já estiver cadastrada
    const existingCity = await cidades.findOne({
      where: { name },
    });

    if (existingCity) {
      return res.status(409).json({ error: "A cidade já está cadastrada! " });
    }
    const newCity = await cidades.create({
      name: name,
      state: state,
    });

    res.status(201).json({ newCity });
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
}

async function getCidade(req, res) {
  try {
    const { name, state } = req.query;

    let cidade;

    if (name) {
      cidade = await cidades.findOne({
        where: { name: name },
      });
      if (!cidade) {
        return res.status(404).json({ error: "A cidade não está cadastrada!" });
      }
    } else if (state) {
      cidade = await cidades.findOne({
        where: { state: state },
      });
      if (!cidade) {
        return res.status(404).json({ error: "O estado não está cadastrado!" });
      }
    } else {
      return res.status(400).json({
        error: "Especifique um nome ou estado para realizar a busca!",
      });
    }

    res.json(cidade);
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
}

module.exports = { create, getCidade };
