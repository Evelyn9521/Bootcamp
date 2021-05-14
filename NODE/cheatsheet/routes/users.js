const express = require("express");
const ramda = require("ramda");
const router = express.Router();
const User = require("../models/user");
const bcrypt = require("bcrypt")



router.get("/",(req, res) => {
    //similar al find de mongo si el filtro está vacio me devuelve todos los documentos
  
    const PAGE_SIZE = 2;
    const page = req.query.page || 1;
   

    User.find({active:true})
    .skip((page - 1) *PAGE_SIZE) //Nº DE DOC QUE SALTARÁ
    .limit(PAGE_SIZE) //Nº DOC QUE DEVOLVERÁ
    .exec((error, users)=>{
    

    if(error){
        res.status(400).json({ok:false, error})
    }else{
        res.status(200).json({ok:true, users})
    }
   })
});

router.post("/", (req, res)=>{
    let body = req.body;
    const user = new User({
        username:body.username,
        email:body.email,
        password:bcrypt.hashSync(body.password, 10)
    })

  
    user.save((error, savedUser)=>{
        if(error){
            res.status(400).json({ok:false, error})
        }else{
            res.status(201).json({ok:true, savedUser})
        }
    });
    
});


router.put("/:id", (req, res)=>{
    const id = req.params.id;
    const body = ramda.pick(["username", "email"], req.body);

    User.findByIdAndUpdate(
        id,
        body,
        {new:true, runValidators:true, context:"query"}),
        (error, updatedUser)=>{
            if(error){
                res.status(400).json({ok:false, error})
            }else{
                res.status(200).json({ok:true, updatedUser})
            }
        }

});

router.delete("/:id",(req, res)=>{
    const id= req.params.id;

    User.findOneAndRemove(id, (error, removedUser)=>{
        if(error){
            res.status(400).json({ok:false, error})
        }else{
            res.status(200).json({ok:true, removedUser})
        }
    })
})



module.exports = router;