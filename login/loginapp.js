const express =  require("express")
const app = express()
const bodyParser = require("body-parser")
const path = require("path")
const port = process.env.PORT || 3000;

require("./db/conn")
// const mongoose = require("mongoose")
// const { allowedNodeEnvironmentFlags } = require("process")

// mongoose.connect('mongodb://localhost/firstmongo',{ useNewUrlParser : true, useUnifiedTopology : true})
//bodyParser
app.use(bodyParser.json())

app.get("/login", (req, res) => {
    res.sendFile("login is working");
})

app.get("/register",  (req, res) => {
    res.send("Register is working")
})

app.listen(port, () => {
    console.log("login Page server is working")
})
