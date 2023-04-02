const Sequelize = require('sequelize');

const database = new Sequelize('projetoapis', 'root', 'pbunny88', {
    host: 'localhost',
    dialect: 'mysql'
});

module.exports = database;
