const database = require('../../config/database');
const DataTypes = require('sequelize');

const cidades = database.define('cidades', {
  name: DataTypes.STRING,
  state: DataTypes.STRING,
});

cidades.sync({force: false}).then(() => {});

module.exports = cidades;