const clientes = require("../models/clientes");

async function create(req, res) {
  try {
    const { name, gender, dateOfBirth, age, city } = req.body;

    // Verifica se o corpo da requisição está vazio e se foram enviados valores numéricos
    if (
      !isNaN(name) || !isNaN(gender) || !dateOfBirth || !isNaN(city) || !age
    ) {
      return res
        .status(400)
        .json({
          error:
            "Os parâmetros são inválidos ou não foram preenchidos corretamente!",
        });
    }
    // retorna erro se o cliente já estiver cadastrado
    const existingCliente = await clientes.findOne({
      where: { name },
    });

    if (existingCliente) {
      return res.status(409).json({ error: "O cliente já está cadastrado! " });
    }

    const newClient = await clientes.create({
      name: name,
      gender: gender,
      dateOfBirth: dateOfBirth,
      age: age,
      city: city,
    });

    res.status(201).json({ newClient });
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
}

// Consultar cliente pelo nome ou id
async function getCliente(req, res) {
  const { nameOrId } = req.params;

  if (isNaN(nameOrId)) {
    // Se não é um número, procurar por nome
    try {
      const cliente = await clientes.findOne({
        where: { name: nameOrId },
      });

      if (cliente) {
        res.json(cliente);
      } else {
        res.status(404).json({ error: "O cliente não está cadastrado!" });
      }
    } catch (error) {
      console.log(error);
      res.sendStatus(500);
    }
  } else {
    // Se é um número, procurar por ID

    try {
      const cliente = await clientes.findByPk(nameOrId);

      if (cliente) {
        res.json(cliente);
      } else {
        res.status(404).send("O ID não está cadastrado!");
      }
    } catch (error) {
      console.log(error);
      res.sendStatus(500);
    }
  }
}
// consultar cliente por id e validação se é um número ou n

async function deleteById(req, res) {
  const id = req.params.id;

  if (isNaN(id)) {
    res.status(400).send("ID inválido!");
  }

  try {
    const cliente = await clientes.findByPk(id);

    if (cliente) {
      await cliente.destroy();
      return res.status(204).end();
    } else {
      res.status(404).send("O ID não está cadastrado!");
    }
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
}

async function updateName(req, res) {
  const id = req.params.id;
  const { name } = req.body;

  try {
    const cliente = await clientes.findByPk(id);

    if (!cliente) {
      return res.status(404).send("Cliente não encontrado!");
    }

    await cliente.update({
      name: name,
    });

    return res.status(200).send("Nome do cliente atualizado com sucesso!");
  } catch (error) {
    console.log(error);
    return res.status(500).send("Erro ao atualizar o nome do cliente!");
  }
}

module.exports = { create, getCliente, deleteById, updateName };
