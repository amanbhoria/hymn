const express = require("express")
const app = express()
const path = require("path")
const bodyParser = require("body-parser")
const https = require("https")
const mongoose = require("mongoose")
const ejs = require("ejs")
const encrypt = require("mongoose-encryption")
// require("./db/conn")

const regSchema = new mongoose.Schema({
  username : {
      type : String,
      required : true
  },
 email : {
      type : String,  //It always shows error without type
      required : true, 
      unique : true
  },
   password : {
      type : String,
      required : true,
   }  

});

//now we need to create the collections

const Register = new mongoose.model("Register", regSchema)
// const Register = require("./models/registers")


const dB = 'mongodb+srv://nickbhoria007:coolboyaman15000@cluster0.1t4pa.mongodb.net/hymndb?retryWrites=true&w=majority'



//MongoDB Community *Server*
//Your Process (Node) + MongoDB => Sockets (TCP)
//Mongoose is wrapper over MongoDB

//connect to mongoDB
// mongoose.connect('mongodb://localhost/firstmongo',{useUnifiedTopology : true, useNewUrlParser : true, useCreateIndex : true})
mongoose.connect(dB, {
  useNewUrlParser : true, useUnifiedTopology : true, useFindAndModify : false, useCreateIndex : true
}).then(() => {
  console.log("connection successful")
}).catch((error) => {
  console.log("No connection")
});
//connection might not be complete yet
// * Still you can use mongoose for querying
// (mongoose models can queue the requests you have)


//localhost ---> Name of the database
//http://google.com:80 -----> browser would remove this 80 (d. port of http) part
//http://google.com:443

const template_path = path.join(__dirname,"../templates/views")
app.set("view engine","ejs")
app.set("views",template_path)

const navbarPath = path.join(__dirname+"/views")

app.use(bodyParser.urlencoded({extended : false}));
app.use(express.json());
app.use(express.static("public"))

// app.use(express.static(path.resolve(__dirname,'folderName')))

app.get("/",(req,res) => {
  res.sendFile(__dirname+"/try.html")
})

app.get("/home",(req,res) => {
  res.render(__dirname+"/templates/views/home")
  //we can't render a sendFile an ejs file. we only render js file and sendFile html files. 
})

app.get("/login", (req,res) => {
  res.render(__dirname+"/templates/views/login2")
})

app.post("/login", (req, res) => {
    const username = req.body.username;
    const password = req.body.password;

    Register.findOne({email : username}, (err, foundUser) => {
        if(err) {
            console.log(err)
        } else {
            if (foundUser) {
                if(foundUser.password === password) {
                    res.render(__dirname+"/templates/views/home")
                } else {
                  res.send("File is not found");
                }
            }
        }
    })
})

// 
app.get("/about",(req, res) => {
  res.render(__dirname+"/templates/views/aboutus");
})

app.get("/contact",(req, res) => {
  res.render(__dirname+"/templates/views/contact");
})

// app.get("/register", (req,res) => {
//   res.render(__dirname+"/templates/views/list");
// })

app.post("/register", (req,res) => {
  const registerEmployee = new Register({
    username : req.body.username,
    email : req.body.email,
     password : req.body.password})
  registerEmployee.save()
  res.render(__dirname+"/templates/views/login2")
})





// app.post("/register", async (req,res) => {
//   try {
//     const registerEmployee = new Register({
//       username : req.body.username,
//       email : req.body.email,
//       password : req.body.password
//     })
//     const registered = await registerEmployee.save()
//     res.status(201).render(__dirname+"/templates/views/list");
//   } catch(error) {
//     res.status(400).send(error);
//   }
// }



app.listen(3000,() => {
  console.log("The server has started")
})
