const cities = require("../models/cities");

async function create(req, res) {
  try {
    const { name, state } = req.body;
    // Checks if the request body is empty and if numeric values were sent
    if (!isNaN(name) || !isNaN(state)) {
      return res
        .status(400)
        .json({
          error:
            "Parameters are invalid or not filled in correctly!",
        });
    }
    // returns error if the city is already registered
    const existingCity = await cities.findOne({
      where: { name, state },
    });

    if (existingCity) {
      return res.status(409).json({ error: "The city is already registered! " });
    }
    const newCity = await cities.create({
      name: name,
      state: state,
    });

    res.status(201).json({ newCity });
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
}

async function getCities(req, res) {
  try {
    const { name, state } = req.query;

    let city;

    if (name) {
      city = await cities.findOne({
        where: { name: name },
      });
      if (!city) {
        return res.status(404).json({ error: "The city is not registered!" });
      }
    } else if (state) {
      city = await cities.findOne({
        where: { state: state },
      });
      if (!city) {
        return res.status(404).json({ error: "The state is not registered!" });
      }
    } else {
      return res.status(400).json({
        error: "Specify a name or state to perform the search!",
      });
    }

    res.json(city);
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
}

module.exports = { create, getCities };
