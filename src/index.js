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
        const respone = await mysql.query`SELECT * FROM station_treatments`;
        res.status(200).json(respone);
    } catch (e) {
        res.status(500).json("Error no se logró  hace la consulta");
    }
});

//conexion
app.listen(app.get("port"), () => {
    console.log("CORRIENDO EN EL PUERTO 4001");
});
