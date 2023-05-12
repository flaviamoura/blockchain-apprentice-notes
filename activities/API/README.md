# API Project
This REST API is used for querying, creating, updating, and deleting clients and cities, utilizing the MySQL database!

## Initial Setup:
Before running the code, you need to import the following packages:
```
npm install 
```

### Database:
Create a MySQL database and update the database name and password in the file [database]()!
```js
const database = new Sequelize('nomeDoBD', 'root', 'senha', {
    host: 'localhost',
    dialect: 'mysql'
});
```
After configuring the database, navigate to the src folder in the terminal and enter the following command:
```
node app
```
Now the API should be up and running. Use Postman to execute the following endpoints! 😄🎉
Make sure to select "raw" in the Body section of Postman and switch to JSON format!

## Endpoints
### POST /customers
This endpoint is responsible for registering clients in the database.
```
http://localhost:8000/customers
```
#### Parameters:
```json
{
"name": "Flavia",
"gender": "feminino",
"dateOfBirth": "1999-08-08",
"age": 23,
"city": "São Francisco de Assis"
}
```
#### Responses:
##### 201 Created
If this response occurs, the registration was successfully created.

Example response:
```json
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
If this response occurs, it means that the client is already registered.

Example response:
```json
{
    "error": "The client is already registered!"
}
```

##### 400 Bad Request
If this response occurs, it means that invalid parameters or empty values were sent in the request body.

Example response:

```json
{
    "error": "Os parâmetros são inválidos ou não foram preenchidos corretamente!"
}
```

### POST /cities
This endpoint is responsible for registering cities in the database.
```
http://localhost:8000/cities
```
#### Parameters:
```json
{
"name": "Santiago",
"state": "RS"
}
```
#### Responses:
##### 201 Created
If this response occurs, the registration was successfully created.

Example response:
```json
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
If this response occurs, it means that the city is already registered.

Example response:
```json
{
    "error": "The city is already registered!"
}
```

##### 400 Bad Request
If this response occurs, it means that invalid or empty parameters were sent in the request body.

Example response:
```json
{
    "error": "Invalid or empty parameters!"
}
```

### GET /cities
This endpoint is responsible for querying the city by name or state.
```
http://localhost:8000/cities/?name=São Paulo
```
```
http://localhost:8000/cities/?state=RS
```

#### Responses:
##### OK! 200
If this response occurs, it means that your query was successful.

Example response for querying by state:
```json
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
The searched state has not been registered in the database yet.

Example response:
```json
{
    "error": "The state is not registered!"
}
```

##### 400 Bad Request
The URL "http://localhost:8000/cidades/?state=" is incomplete because the value of the "state" parameter is missing.

Example response:
```json
{
    "error": "Specify a name or state to perform the search!"
}
```

### GET /customers
This endpoint is responsible for querying the client by name or ID.

Example request for searching by name:
```
http://localhost:8000/customers/flavia
```
Example request for searching by ID:
```
http://localhost:8000/customers/2
```

#### Responses
##### OK! 200
If this response occurs, it means that your query was successful.

Example response for querying by name:
```json
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
The client has not been registered in the database yet.

Example response:
```json
{
    "error": "The client is not registered!"
}
```

### PUT /customers
This endpoint is responsible for changing the name of the client. The client is selected based on their ID:
```
http://localhost:8000/customers/2
```
#### Parameters
```json
{
"name": "Luiza"
}
```
#### Responses
##### OK! 200
```
Client's name updated successfully!
```
##### 404 Not Found
If this response occurs, the client you are looking for is not registered in the database.
```
Client not found!
```

### DELETE /customers
This endpoint is responsible for deleting clients by ID:
```
http://localhost:8000/clientes/2
```
#### Responses
##### 204 No Content
The status code 204 indicates that the client was successfully deleted but there is no content to be returned in the response.
##### 404 Not Found
```
The ID is not registered!
```
##### 400 Bad Request
If this response occurs, a non-numeric character was sent in the request.
```
ID inválido!
```

##### 500 Internal Server Error
 **All the above routes are using this status code for server connection failures or syntax errors in the code!**
 
Example response:
```
Internal Server Error
```
