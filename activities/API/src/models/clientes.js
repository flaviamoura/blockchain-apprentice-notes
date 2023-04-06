const database = require('../../config/database');
const DataTypes = require('sequelize');

const clientes = database.define('clientes', {
  name: DataTypes.STRING,
  gender: DataTypes.STRING,
  dateOfBirth: DataTypes.DATE,
  age: DataTypes.STRING,
  city: DataTypes.STRING
});

clientes.sync({force: false}).then(() => {});

module.exports = clientes;