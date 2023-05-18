const database = require("../../config/database");
const DataTypes = require("sequelize");

const cities = database.define("cities", {
  name: DataTypes.STRING,
  state: DataTypes.STRING,
});

cities.sync({force: false}).then(() => {});

module.exports = cities;