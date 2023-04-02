# Projeto de APIs
Esta API REST é utilizada para consulta, cadastro, edição e deleção de clientes e cidades, utilizando o banco de dados MySQL!

## Configurações iniciais:
Antes de rodar o código é necessário importar os seguintes pacotes:
```
npm init
```
```
npm install express —save
```

```
npm install sequelize --save
```
```
npm install mysql2 —save
```

### Banco de dados:
Crie um banco de dados em MySQL e altere o nome do BD e senha no arquivo [database]()!
```
const database = new Sequelize('nomeDoBD', 'root', 'senha', {
    host: 'localhost',
    dialect: 'mysql'
});
```

Após a configuração do banco de dados no terminal navegue para a pasta src e digite o seguinte comando no terminal:
```
node app
```
Agora a API já deve estar rodando, utilize o Postman para executar os endpoints a seguir! 😄🎉 
Certifique-se de selecionar o raw no Body do Postman e trocar para o formato JSON!

## Endpoints
### POST /clientes
Esse endpoint é responsável por realizar o cadastro dos clientes no banco de dados.
```
http://localhost:8000/clientes
```
#### Parâmetros
```
{
"name": "Flavia",
"gender": "feminino",
"dateOfBirth": "1999-08-08",
"age": 23,
"city": "São Francisco de Assis"
}
```
#### Respostas
##### 201 Created
Caso essa resposta aconteça o cadastro foi criado com sucesso.

Exemplo de resposta:
```
{
    "newClient": {
        "id": 10,
        "name": "Flavia",
        "gender": "feminino",
        "dateOfBirth": "1999-08-08T00:00:00.000Z",
        "age": 23,
        "city": "São Francisco de Assis",
        "updatedAt": "2023-04-02T17:38:18.146Z",
        "createdAt": "2023-04-02T17:38:18.146Z"
    }
}

```
##### 409 Conflict
Caso essa resposta aconteça, isso significa que o cliente já está cadastrado.

Exemplo de resposta:
```
{
    "error": "O cliente já está cadastrado! "
}
```

##### 400 Bad Request
Caso essa resposta aconteça foram enviados parâmetros inválidos(ex: name: "22") ou vazios no corpo da solicitação.
Exemplo de resposta:
```
{
    "error": "Os parâmetros são inválidos ou não foram preenchidos corretamente!"
}
```

### POST /cidades
Esse endpoint é responsável por realizar o cadastro das cidades no banco de dados.
```
http://localhost:8000/cidades
```
#### Parâmetros
```
{
"name": "Santiago",
"state": "RS"
}
```
#### Respostas
##### 201 Created
Caso essa resposta aconteça o cadastro foi criado com sucesso.

Exemplo de resposta:
```
{
    "newCity": {
        "id": 9,
        "name": "Santiago",
        "state": "RS",
        "updatedAt": "2023-04-02T17:55:00.855Z",
        "createdAt": "2023-04-02T17:55:00.855Z"
    }
}

```
##### 409 Conflict
Caso essa resposta aconteça, isso significa que a cidade já está cadastrada.

Exemplo de resposta:
```
{
    "error": "A cidade já está cadastrada! "
}
```

##### 400 Bad Request
Foram enviados parâmetros inválidos(ex: name: "22") ou vazios no corpo da solicitação.
Exemplo de resposta:
```
{
    "error": "Os parâmetros são inválidos ou não foram preenchidos corretamente!"
}
```

### GET /cidades
Esse endpoint é responsável por realizar a consulta da cidade pelo nome ou estado.
```
http://localhost:8000/cidades/?name=São Paulo
```
```
http://localhost:8000/cidades/?state=RS
```

#### Respostas
##### OK! 200
Caso essa resposta aconteça sua consulta foi feita com sucesso.

Exemplo de resposta de consulta por estado:
```
{
    {
    "id": 9,
    "name": "Santiago",
    "state": "RS",
    "createdAt": "2023-04-02T17:55:00.000Z",
    "updatedAt": "2023-04-02T17:55:00.000Z"
    }
}
```
##### 404 Not Found
O estado pesquisado ainda não foi  cadastrado no banco de dados.

Exemplo de resposta:
```
{
    "error": "O estado não está cadastrado!"
}
```

##### 400 Bad Request
A URL "http://localhost:8000/cidades/?state=" está incompleta, pois o valor do parâmetro "state" está faltando.

Exemplo de resposta:
```
{
    "error": "Especifique um nome ou estado para realizar a busca!"
}
```

### GET /clientes
Esse endpoint é responsável por realizar a consulta do cliente pelo nome ou ID.

Exemplo de busca por Nome:
```
http://localhost:8000/clientes/flavia
```
Exemplo de busca por ID:
```
http://localhost:8000/clientes/2
```

#### Respostas
##### OK! 200
Caso essa resposta aconteça sua consulta foi feita com sucesso.

Exemplo de resposta de consulta por nome:
```
{
    "id": 2,
    "name": "flavia",
    "gender": "female",
    "dateOfBirth": "1989-08-08T00:00:00.000Z",
    "age": "22",
    "city": "São Chico",
    "createdAt": "2023-03-26T23:52:51.000Z",
    "updatedAt": "2023-03-28T05:09:49.000Z"
}
```
##### 404 Not Found
O cliente ainda não foi  cadastrado no banco de dados.

Exemplo de resposta:
```
{
    "error": "O cliente não está cadastrado!"
}
```

### PUT /clientes
Esse endpoint é responsável por realizar a alteração do nome do cliente, a escolha do cliente é feita por ID:
```
http://localhost:8000/clientes/2
```
#### Parâmetros
```
{
"name": "Luiza"
}
```
#### Respostas
##### OK! 200
```
Nome do cliente atualizado com sucesso!
```
##### 404 Not Found
Caso essa resposta aconteça, o cliente em que você procura não está cadastrado no banco de dados.
```
Cliente não encontrado!
```

### DELETE /clientes
Esse endpoint é responsável por realizar a deleção de clientes por ID:
```
http://localhost:8000/clientes/2
```
#### Respostas
##### 204 No Content
o código de status 204 indica que o cliente foi excluído com sucesso, mas que não há conteúdo a ser retornado na resposta.
##### 404 Not Found
```
O ID não está cadastrado!
```
##### 400 Bad Request
Caso essa resposta aconteça, foi enviado algum caractere não numérico. 
```
ID inválido!
```

##### 500 Internal Server Error
 **Todas as rotas acima estão usando este código de status para falhas na conexão com o servidor ao tentar processar a solicitação (request) ou erros de sintaxe no código!**
Exemplo de resposta:
```
Internal Server Error
```