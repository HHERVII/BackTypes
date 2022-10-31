/* eslint-disable no-console */
/* eslint-disable no-else-return */
const mysql = require("mysql");

const data = {
    user: "Ajimenez",
    password: "AJ%$2087mmq",
    host: "104.248.53.140",
    database: "pruebas",
};

let conection = mysql.createConnection(data);
conection.connect((err) => {
    if (err) {
        console.log("error");
        console.log(err);
    } else {
        console.log("exito en la conexion");
    }
});
const config = data;
module.exports = { config, mysql };
