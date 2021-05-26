const express = require('express');
const path = require('path');
const ejs = require("ejs");
const app = express();
const PORT = process.env.PROCESS || 3000;

require('./db/conn');
//const ServiceSchema = require("./models/ServiceSchema");



const static_path = path.join(__dirname, "../public");
const template_path = path.join(__dirname, "../templates/views");
const partials_path = path.join(__dirname, "../templates/partials");



app.use(express.json());
app.use(express.urlencoded({ extended: false }));


app.use(express.static(static_path));
app.set("view engine", "ejs");
app.set("views", template_path);
ejs.partials_path;


app.get("/", (req, res) => {
    res.render("index");
});

app.listen(PORT, () => {
    console.log(`server is running at: ${PORT}`);

});
