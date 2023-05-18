const express = require('express');
const routes = express.Router();

const customersController = require('../controllers/customersController');
const citiesController = require('../controllers/citiesController');

routes.post('/customers', customersController.create);

routes.get('/customers/:nameOrId', customersController.getCustomer);

routes.delete('/customers/:id', customersController.deleteById);

routes.put('/customers/:id', customersController.updateName);

routes.post('/cities', citiesController.create);

routes.get('/cities/:nameOrState', citiesController.getCities);

routes.get('/cities', citiesController.getAllCities);

module.exports = routes;