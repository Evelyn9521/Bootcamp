const user = require("../models/user");

const express = require("express")
const router = express.Router();
const User=require("../models/user");



router.get("/",(req, res) => {
    //similar al find de mongo si el filtro está vacio me devuelve todos los documentos
   user.find({}).exec((error,users)=>{
    if(error){
        res.status(400).json({ok:false, error})
    }else{
        res.status(200).json({ok:true, users})
    }
   })
});


router.get("/:id",(req, res) => {
    let id= req.params.id;
    res.json({message: `petición GET recibida con parámetro: ${id}`})
});
    
router.post("/", (req, res)=>{
    let body = req.body;
    const user = new User({
        username:body.username,
        email:body.email,
        password:body.password
    })

    // if(body.username){
       
    //     res.status(200).json({message: `recibido username: ${body.username}`})
    // }else{
        
    //     res.status(400).json({ok: false, message: `el username es obligatorio`})
    // }

    user.save((error, savedUser)=>{
        if(error){
            res.status(400).json({ok:false, error})
        }else{
            res.status(201).json({ok:true, savedUser})
        }
    });
    
});



module.exports = router;