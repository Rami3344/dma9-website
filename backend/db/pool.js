const {Pool} = require("pg")

module.exports = new Pool({
    host: "localhost", // or wherever the db is hosted
    user: "postgres",
    database: "dmak",
    password: "123456789",
    port: 5432 // The default port
})