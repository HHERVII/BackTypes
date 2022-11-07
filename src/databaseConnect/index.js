/* eslint-disable no-console */
/* eslint-disable no-else-return */
const { log } = require("console");
const mysql = require("mysql");

const data = {
    user: "root",
    password: "123456!Bases",
    host: "24.199.68.208",
    database: "pruebas",
    connectionLimit: 10,
    port: "3306",
    multipleStatements: true,
};
let connection;
try {
    connection = mysql.createPool(data);
    connection.getConnection(function (err, conn) {
        if (err) {
            console.log("mala conexion");
            console.log(err);
            return;
        }
        console.log("exitoo");
    });
} catch (e) {
    console.log(e);
}

const config = data;
module.exports = { config, mysql, connection };
