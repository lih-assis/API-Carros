const express = require('express');

const app = express()

const env = require("dotenv").config().parsed

app.use(express.json())

const router_cars = require("../routes/cars")
app.use("/cars", router_cars)

app.listen(env.PORT, () => {
    console.log(`O servidor está em execução na porta ${env.PORT}`);
});
