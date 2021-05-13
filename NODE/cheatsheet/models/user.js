const mongoose = require("mongoose");
const uniqueValidator =require("mongoose-unique-validator")

let Schema = mongoose.Schema;
const validRoles = {
    values: ["ADMIN", "USER"],
    message:"{VALUE} is not a valid role"
}

let userSchema = new Schema({
    username:{
        type: String,
        required: [true, "username is required"]
    },
    email:{
        type:String,
        unique:true,
        required:[true, "Email is required"]
    },
    password:{
        type:String,
        required:[true, "password is required"]
    },
    role:{
        //not required if ommited
        type:String,
        default:"USER",
        enum:validRoles
    },
    active:{
        type: Boolean,
        default:true
    }
});

userSchema.plugin(uniqueValidator, {message: "{PATH} should be unique"})

module.exports = mongoose.model("user", userSchema);