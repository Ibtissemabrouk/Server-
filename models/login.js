const mongoose = require("mongoose");

const Login = mongoose.model("login",
{
login:{
    type : String
},
password : {
    type : String
}
}
);
module.exports= Login;