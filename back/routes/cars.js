const express = require("express")
const router = express.Router()
const carCtrl = require("../controllers/carCtrl")

router.post("/", carCtrl.createCar)

router.get("/", carCtrl.getAllCar)

router.get("/:id", carCtrl.getOneCarId)

//router.get("/:name", carCtrl.getOneCarName)

router.patch("/:id", carCtrl.changeOneCar)

router.delete("/:id", carCtrl.deleteCar)

module.exports = router
