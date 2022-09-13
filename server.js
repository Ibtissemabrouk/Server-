const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const User = require("./models/user");
const Login = require("./models/login")
require('dotenv').config();


const app = express();
//*  create local server and allow outside reqs to our usingn cors
app.use(cors());

//* to accept any json file in our requestes as data
app.use(express.json());

//* get db path and try to connect to it
const url = process.env.DB_URL;

//* url = notre réferance de base de donnée
mongoose.connect(url);
const connection = mongoose.connection;

connection.once("open", () => {
    console.log("Mongo DB database connection  successfully !")
})


app.listen(3002, ()=> {
    console.log('server running on port 3002')
})
//* ROUTE FOR AUTH

app.get('/login/:login/:pwd' , async(req,res) =>{
try{
let myLogin = req.params.login;
let pwd = req.params.pwd;
let currentUser = await Login.findOne({login : myLogin , password : pwd})

if (!currentUser)
 res.send("false")
else
res.send(currentUser)

}
catch(error){
res.send(error)
console.log('error');
}
}

)



//^ Get 
app.get('/getAllData',async(req,res) => {
try{
    // (age $gt :20) = (age >20) 
    //(age $lt :20) = (age <20) 
let allUsers = await User.find({});
res.send(allUsers);
}
catch(error){
console.log("ERROR, Users not find !");
}
    // console.log("Get all works")
})
//! Get by id request
app.get('/users/:id' , async(req,res) => {
try {
let userId = req.params.id;
let finalUser = await User.findOne({_id : userId});
res.send(finalUser)

}
catch (error) {
    console.log("ERROR, Users not find !");
}
}
)
//^ Post
app.post('/add' ,async (req,res) => {
try {let data = req.body;
let userModel = new User(data);
let finalUser = await userModel.save();
res.send("OK, USER ADDED :");
}
catch (error){
    res.send("error")
}
    // console.log("added work successfully")
})


//^ Put

app.put('/update/:id' , async (req,res) => {
try{
    let userId = req.params.id;
    let newData = req.body;
    await User.findByIdAndUpdate({_id : userId} , newData);
    res.send("user updated")
}

catch(error){

    res.send("error! , user not updated ")
}

    // console.log("update work successfully")
})



//^ Delete

app.delete('/delete/:id' , async (req,res) => {
try{
    let userId = req.params.id;
   await User.findOneAndDelete({_id: userId });
  res.send("user Deleted !")

}
catch{
    res.send("error")

}


    // console.log("delete work successfully")
})