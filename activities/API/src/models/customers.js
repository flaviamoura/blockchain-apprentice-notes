const database = require("../../config/database");
const DataTypes = require("sequelize");

const customers = database.define("customers", {
  name: DataTypes.STRING,
  gender: DataTypes.STRING,
  dateOfBirth: DataTypes.DATEONLY,
  age: DataTypes.STRING,
  city: DataTypes.STRING
});

customers.sync({force: false}).then(() => {});

module.exports = customers;