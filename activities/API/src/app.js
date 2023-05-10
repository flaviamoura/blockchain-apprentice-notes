const express = require('express');
const database = require('../config/database');
const routes = require('./routes/routes');

const app = express();

app.use(express.json());

app.use(routes);

database.authenticate()
    .then(() => console.log('Connection made to the database!'))
    .catch((msgErro) => console.log(msgErro));

app.listen(8000, () => console.log('API running on port 8000!'));