require("./config/config");

const mongoose =require("mongoose");
const express = require("express")
const app = express();

app.use(express.json());

mongoose.connect("mongodb://localhost:27017/",{
    useNewUrlParser: true,
    useUnifiedTopology:true,
    useCreateIndex:true
});


const db = mongoose.connection;
db.on("error", err => console.log("conection to db failed", err));
db.once("open", ()=> console.log("conected to db successfully"));


app.listen(process.env.PORT, ()=>"listening en port", process.env.PORT);