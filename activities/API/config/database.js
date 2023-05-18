const Sequelize = require("sequelize");

const database = new Sequelize("projetoapis", "root", "yourPassword", {
    host: "localhost",
    dialect: "mysql"
});

module.exports = database;
