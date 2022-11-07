/* eslint-disable no-console */
/* eslint-disable no-else-return */
const mysql = require("mysql");

const data = {
    user: "root",
    password: "123456!Bases",
    host: "24.199.68.208",
    database: "pruebas",
    connectTimeout: 30000,
    port: "3306",
};
const connection = mysql.createConnection(data);
try {
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
