/* eslint-disable no-console */
/* eslint-disable no-else-return */
const mysql = require("mysql");

const data = {
    user: "root",
    password: "123456!Bases",
    host: "localhost",
    database: "pruebas",
    connectTimeout: 30000,
};
let connection;
try {
    connection = mysql.createConnection(data);
    connection.connect((err) => {
        if (err) {
            console.log("error");
            console.log(err);
        } else {
            console.log("exito en la conexion");
        }
    });
} catch (e) {
    console.log(e);
}

const config = data;
module.exports = { config, mysql, connection };
