const expres = require("express");
const app = expres();
const cors = require("cors");
const { mysql } = require("./databaseConnect/index");
app.set("port", process.env.PORT || 4001);
app.use(cors());

console.log("holaaa mundo");
//get
app.get("/api/v1/stationTreatments", async (req, res) => {
    try {
        const response = await mysql.query`SELECT * FROM station_treatments`;
        if (response) {
            res.status(200).json({
                state: "OK",
                data: response,
                msj: "Exito aL realizar la consulta",
            });
        } else {
            res.status(200).json({
                state: "FAIL",
                data: [],
                msj: "No fuu posible realizar la consulta",
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
