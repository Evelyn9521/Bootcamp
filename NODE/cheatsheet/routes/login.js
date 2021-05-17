require("../config/config")

const express =require("express");
const router =express.Router();
const bcrypt = require("bcrypt");
const jwt= require("jsonwebtoken")


const User = require("../models/user");


router.post("/", (req, res)=>{
    const body=req.body;

    User.findOne({email:body.email}, (error, userDB)=>{
        if (error){
            res.status(500).json({ok:false, error})
        }else if(!userDB){
            res.status(400).json({ok:false, error:"email not found"})
        }else if(!bcrypt.compareSync(body.password, userDB.password)){
            res.status(400).json({
                ok:false,
                error:{message:"invalid password"}
            })
        }else{
            const token = jwt.sign(
                {user:userDB}, //payload
                process.env.SEED,
                {expiresIn: 20}
            );
            res.status(200).json({ok:true, token,user:userDB})
        }
    })
})
module.exports=router;