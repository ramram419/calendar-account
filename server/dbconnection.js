const pg = require('pg');

const connectionString = "pg://postgres:1234@localhost:5432/todolist";
const client = new pg.Client(connectionString);
client.connect();

module.exports = client;

