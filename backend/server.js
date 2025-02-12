const express = require("express");
const app = express();
const registerRoute = require("./routes/registerRoute")
app.use(express.urlencoded({ extended: true }))

app.use("/",registerRoute);

app.listen(3001)