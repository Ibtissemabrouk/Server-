const mongoose = require('mongoose');


const User = mongoose.model("User",
{
NAME : {
    type : String,
},
LASTNAME : {
    type : String,
},
AGE : {
    type : Number,
}

}
)

module.exports = User;