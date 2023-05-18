const cities = require("../models/cities");
const { Op } = require('sequelize');

async function create(req, res) {
  try {
    const { name, state } = req.body;
    // Checks if the request body is empty and if numeric values were sent
    if (!name || !state) {
      return res.status(400).json({
        error: "Parameters 'name' and 'state' must be provided!",
      });
    }

    // returns error if the city is already registered
    const existingCity = await cities.findOne({ where: { name, state } });

    if (existingCity) {
      return res.status(409).json({ error: "The city is already registered! " });
    }

    const newCity = await cities.create({ name, state });

    res.status(201).json({ newCity });
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
}

async function getCities(req, res) {
  try {
    const { nameOrState } = req.params;

    if (!nameOrState) {
      return res.status(400).json({
        error: "Specify a name or state to perform the search!",
      });
    }

    const city = await cities.findOne({
      where: {
        [Op.or]: [
          { name: nameOrState },
          { state: nameOrState },
        ],
      },
    });

    if (!city) {
      return res.status(404).json({ error: "The city or state is not registered!" });
    }

    res.json(city);
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
}

module.exports = { create, getCities };
