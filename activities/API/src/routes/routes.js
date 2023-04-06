const express = require('express');
const routes = express.Router();

const clientesController = require('../controllers/clientesController');
const cidadesController = require('../controllers/cidadesController');

routes.post('/clientes', clientesController.create);

routes.get('/clientes/:nameOrId', clientesController.getCliente);

routes.delete('/clientes/:id', clientesController.deleteById);

routes.put('/clientes/:id', clientesController.updateName);

routes.post('/cidades', cidadesController.create);

routes.get('/cidades', cidadesController.getCidade);


module.exports = routes;