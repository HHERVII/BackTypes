const express = require("express");
const app = express();
const cors = require("cors");
const { config } = require("./databaseConnect/index");
const mysql = require("mysql");
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
        const connection = mysql.createConnection(config);
        connection.connect(async (err) => {
            if (err) {
                console.log("error");
            } else {
                await connection.query(
                    `SELECT * FROM station_treatments`,
                    (err, response, fields) => {
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
                    }
                );
                connection.end();
            }
        });
    } catch (e) {
        console.log(e);
        res.status(500).json("Error no se logró  hacer la consulta");
    }
});
app.post("/api/v1/stationTreatments", async (req, res) => {
    const {
        user,
        Treatment,
        Longitude,
        Latitude,
        SM_1,
        SM_2,
        SM_3,
        Env_Temp,
        RH,
        CO2,
        Canopy_Temp,
        CS_Temp,
        Irrig_Pres_Rate,
        Irrig_Pres_Time,
        Date_Time,
    } = req.body;
    try {
        const connection = mysql.createConnection(config);
        connection.connect(async (err) => {
            if (err) {
                console.log("error");
            } else {
                await connection.query(
                    `INSERT INTO  station_treatments ( 
                                        user, Treatment, Longitude, Latitude,  SM_1 ,SM_2,SM_3, Env_Temp , RH,CO2 , Canopy_Temp ,CS_Temp ,Irrig_Pres_Rate,Irrig_Pres_Time,
                                        Date_Time
                                        )
                                            VALUES (         ${user},
                                                    ${Treatment},
                                                    ${Longitude},
                                                    ${Latitude},
                                                    ${SM_1},
                                                    ${SM_2},
                                                    ${SM_3},
                                                    ${Env_Temp},
                                                    ${RH},
                                                    ${CO2},
                                                    ${Canopy_Temp},
                                                    ${CS_Temp},
                                                    ${Irrig_Pres_Rate},
                                                    ${Irrig_Pres_Time},
                                                    ${Date_Time});`,
                    (err, response, fields) => {
                        if (response) {
                            res.status(200).json({
                                state: "OK",
                                msj: "Datos actualizados",
                            });
                        } else {
                            res.status(200).json({
                                state: "FAIL",
                                data: [],
                                msj: "No fué posible realizar la actualizacion",
                            });
                        }
                    }
                );
                connection.end();
            }
        });
    } catch (e) {
        console.log(e);
        res.status(500).json("Error no se logró  hacer el proceso");
    }
});

//conexion
app.listen(app.get("port"), () => {
    console.log("CORRIENDO EN EL PUERTO 4001");
});
