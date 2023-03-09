const Sequelize = require('sequelize');

const connection = new Sequelize('guiaperguntas', 'root', 'pbunny88', {
    host: 'localhost',
    dialect: 'mysql'
})

module.exports = connection;