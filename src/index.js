const express = require("express");
const app = express();
const cors = require("cors");
const { connection } = require("./databaseConnect/index");

const bodyParser = require("body-parser");
app.set("port", process.env.PORT || 4001);
app.use(cors());

app.use(express.json({ limit: "50mb" }));
app.use(express.urlencoded({ limit: "50mb", extended: true }));
app.use(express.static("files"));
app.use(function (req, res, next) {
    res.set("Cache-control", "no-cache");
    next();
});

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
console.log("holaaa mundo");
//get
app.get("/api/v1/stationTreatments", async (req, res) => {
    try {
        const response = true;
        //await connection.query`SELECT * FROM station_treatments `;
        if (response) {
            res.status(200).json({
                state: "OK",
                data: response,
                msj: "Exito al realizar la consulta",
            });
        } else {
            res.status(200).json({
                state: "FAIL",
                data: [],
                msj: "No fué posible realizar la consulta",
            });
        }
    } catch (e) {
        res.status(500).json("Error no se logró  hace la consulta");
    }
});

//conexion
app.listen(app.get("port"), () => {
    console.log("CORRIENDO EN EL PUERTO 4001");
});
