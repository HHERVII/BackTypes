/* eslint-disable no-console */
/* eslint-disable no-else-return */
const mysql = require("mysql");

const data = {
    user: "Ajimenez",
    password: "AJ%$2087mmq",
    host: "104.248.53.140",
    database: "pruebas",
    connectTimeout: 30000,
    port: 3306,
};

let connection = mysql.createConnection(data);

const config = data;
module.exports = { config, mysql, connection };
