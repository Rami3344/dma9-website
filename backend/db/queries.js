const pool = require("./pool")

async function insertUsers(username,email,password) {
    await pool.query("INSERT INTO users (username,email,pwd) VALUES($1,$2,$3)",[username,email,password])
}
module.exports = {insertUsers}