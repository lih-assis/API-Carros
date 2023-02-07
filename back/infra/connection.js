const {PATH_CARS_DB} = require("dotenv").config().parsed
const { Database } = require("sqlite3")
const carDb = new Database(PATH_CARS_DB)

module.exports = carDb
