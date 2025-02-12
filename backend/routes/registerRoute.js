const {Router} = require("express")
const route = Router();
const registerContPost = require("../controllers/registerController")

route.post("/register",registerContPost)

module.exports = route;