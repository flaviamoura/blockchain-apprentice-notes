const customers = require("../models/customers");

function calculateAge(dateOfBirth) {
  const today = new Date();
  const birthDate = new Date(dateOfBirth);
  let age = today.getFullYear() - birthDate.getFullYear();

  birthDate.setFullYear(today.getFullYear());

  if (birthDate > today) {
    age--;
  }

  return age;
}

// Create a new customer
async function create(req, res) {
  try {
    const { name, gender, dateOfBirth, city } = req.body;

    // Checks if the request body is empty and if numeric values were sent
    if (!isNaN(name) || !isNaN(gender) || !dateOfBirth || !isNaN(city)){
      return res.status(400).json({ error: "Parameters are invalid or not filled in correctly!"});
    }

    // returns error if the customer is already registered
    const existingCustomer = await customers.findOne({ where: { name },});
    
    if (existingCustomer) {
      return res.status(409).json({ error: "The customer is already registered! " });
    }

    const age = calculateAge(dateOfBirth);

    const newClient = await customers.create({
      name: name,
      gender: gender,
      dateOfBirth: dateOfBirth,
      age: age,
      city: city,
    });

    res.status(201).json({ newClient });
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
}

// Query customer by name or id
async function getCustomer(req, res) {
  const { nameOrId } = req.params;

  if (isNaN(nameOrId)) {
    // If not a number, search by name
    try {
      const customer = await customers.findOne({
        where: { name: nameOrId },
      });

      if (customer) {
        res.json(customer);
      } else {
        res.status(404).json({ error: "The customer is not registered!" });
      }
    } catch (error) {
      console.log(error);
      res.sendStatus(500);
    }
  } else {
    // If it's a number, search for ID

    try {
      const customer = await customers.findByPk(nameOrId);

      if (customer) {
        res.json(customer);
      } else {
        res.status(404).send("ID is not registered!");
      }
    } catch (error) {
      console.log(error);
      res.sendStatus(500);
    }
  }
}
// query customer by id and validation if it's a number or not

async function deleteById(req, res) {
  const id = req.params.id;

  if (isNaN(id)) {
    res.status(400).send("Invalid ID!");
  }

  try {
    const customer = await customers.findByPk(id);

    if (customer) {
      await customer.destroy();
      return res.status(204).end();
    } else {
      res.status(404).send("The ID is not registered!");
    }
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
}

async function updateName(req, res) {
  const id = req.params.id;
  const { name } = req.body;

  try {
    const customer = await customers.findByPk(id);

    if (!customer) {
      return res.status(404).send("Customer not found!");
    }

    await customer.update({
      name: name,
    });

    return res.status(200).send("Customer name successfully updated!");
  } catch (error) {
    console.log(error);
    return res.status(500).send("Error updating customer name!");
  }
}

module.exports = { create, getCustomer, deleteById, updateName };
