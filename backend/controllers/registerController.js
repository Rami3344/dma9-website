const db = require("../db/queries")

async function registerContPost(req,res) {
    const {username,email,password} = req.body
    await db.insertUsers(username,email,password)
    res.redirect("http://localhost:3000/")
}
module.exports = registerContPost