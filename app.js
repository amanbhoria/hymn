const express = require("express")
const app = express()
<<<<<<< HEAD
=======
const path = require("path")
>>>>>>> c1062bd (login accessible)
const bodyParser = require("body-parser")
const https = require("https")
const mongoose = require("mongoose")
//MongoDB Community *Server*
//Your Process (Node) + MongoDB => Sockets (TCP)
//Mongoose is wrapper over MongoDB

//connect to mongoDB
mongoose.connect('mongodb://localhost/firstmongo',{useUnifiedTopology : true, useNewUrlParser : true})
//connection might not be complete yet
// * Still you can use mongoose for querying
// (mongoose models can queue the requests you have)


//localhost ---> Name of the database
//http://google.com:80 -----> browser would remove this 80 (d. port of http) part
//http://google.com:443

<<<<<<< HEAD
=======
app.set("view engine","ejs")
const navbarPath = path.join(__dirname+"/views")

>>>>>>> c1062bd (login accessible)

// app.use(bodyParser.urlencoded({extended : true}));
app.use(bodyParser.json());
app.use(express.static("public"))
// app.use(express.static(path.resolve(__dirname,'folderName')))

app.get("/",(req,res) => {
  res.sendFile(__dirname+"/try.html")
})

app.get("/login", (req,res) => {
  console.log("login route")
  res.sendFile(__dirname+"/login/login.html")
})

<<<<<<< HEAD
=======
app.get("/about",(req, res) => {
  res.render("aboutus");
})

>>>>>>> c1062bd (login accessible)
// const request = https.request(url, option, function(response){
//
//     if (response.statusCode === 200) {
//       res.sendFile(__dirname + "/success.html")
//     }   else {
//           console.log("Error!")
//   }
// })

app.listen(3000,() => {
  console.log("The server has started")
})
