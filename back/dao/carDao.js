const carDb = require("../infra/connection")
const {ulid} = require("ulid")

class Cars {
    create (data, callback) { const {marca, modelo, cor, ano, combustivel, cambio} = data
    const sql = `INSERT INTO concessionaire (id, marca, modelo, cor, ano, combustivel, cambio) VALUES('${ulid()}','${marca}','${modelo}','${cor}','${ano}','${combustivel}','${cambio}')`
    carDb.run(sql, callback)
}

    findAll(callback) {
        const sql = "SELECT * FROM concessionaire";
        carDb.all(sql, callback) 
    }

    findId(id, callback) {
        const sql = `SELECT * FROM concessionaire WHERE id = '${id}'` ;
        carDb.get(sql, callback)
    }

    /*findModel(callback) {
        const { name } = req.params.name;
        console.log(name)
        const sql = `SELECT * FROM concessionaire WHERE modelo = '${name}'` ;
        carDb.get(sql, callback)
            }
        }*/
    
    updatePartial(id, data, callback){
        let carsData = Object.entries(data)
        let fields = []

        for(let i = 0; i< carsData.length; i++) {
            fields.push(`${carsData[i][0]} = '${carsData[i][1]}'`)
        }

        const sql = `UPDATE concessionaire SET 
                        ${fields.join(",")}
                        WHERE
                        id = '${id}'`
        carDb.run(sql, callback)
    }

    deleteOne(id, callback){
        const sql = `DELETE FROM concessionaire WHERE id = '${id}'`
        carDb.run(sql, callback)
    }
}
module.exports = new Cars