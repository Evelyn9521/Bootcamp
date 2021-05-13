require("./config/config")


const mongoose = require("mongoose");
const express = require("express");
const app = express();
const users = require("./routes/users")

app.use(express.json());

app.use("/users", users);

mongoose.connect("mongodb://localhost:27017/users",{
    useNewUrlParser:true,
    useUnifiedTopology:true,
    useCreateIndex:true
});
const db =mongoose.connection;

db.on("error", err=> console.log("connection to db failed:", err));
db.once("open", ()=> console.log("conected to db successfully"));




app.listen(process.env.PORT, ()=> console.log("LISTENING EN PORT", process.env.PORT));





//PASOS PARA CREAR UN PROYECTO CON NODE
//npm init  0 npm init -y para dejar todo por defecto
//npm install express
//npm install --save-dev nodemon
//npm start

//pkill -f nodemon
