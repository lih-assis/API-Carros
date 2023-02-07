const Car = require("../dao/carDao")

exports.createCar = (req, res) => {
   Car.create(req.body,(err) => {
        if(!err) {
            res.send({})
        } else {
            res.status(400).send(err)
        }
    })
   }

exports.getAllCar = (req, res) => {
    Car.findAll((err,data) => res.send(data))
}

exports.getOneCarId = (req, res) => {
    Car.findId(req.params.id, (err, data) => {
        if(data){
            res.status(200).send(data)
        } else {
            res.status(404).send("Id informado não foi localizado")
        }
    })
}
/*exports.getOneCarName = (req, res) => {
    Car.findModel()
        .then((data) => res.status(200).json(data))
        .catch((err) => res.status(500).json({ err }));
}*/

exports.changeOneCar = (req, res) => {
    Car.updatePartial(req.params.id,req.body, (err) => {
        if(err) {
        res.status(400).send("Ocorreu um erro")
    } else {
        res.status(204).end()
    }
    })
}

exports.deleteCar = (req, res) => {
    Car.deleteOne(req.params.id, (err) => {
        if(!err){
            res.status(204).end()
        } else {
            res.status(404).send("Id informado não foi localizado")
        }
    })
}