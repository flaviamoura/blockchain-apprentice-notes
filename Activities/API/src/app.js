const express = require('express');
const database = require('../config/database');
const routes = require('./routes/routes');

const app = express();

app.use(express.json());

app.use(routes);

database.authenticate()
    .then(() => console.log('Conexão feita com o banco de dados!'))
    .catch((msgErro) => console.log(msgErro));

app.listen(8000, () => console.log('API rodando na porta 8000!'));