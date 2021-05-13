require("./config/config");


const express = require("express");
const app = express();

app.use(express.json()); //poner siempre para que funcione el POST

let users = [];

app.get("/users",(req, res) => {
   const user = {name: "john", email: "jh@gmail.com"}
   res.json({ok:true, results:users})
});


app.put("/users/:id",(req, res) => {
    let id= req.params.id;
    res.json({message: `petición GET recibida con parámetro: ${id}`})
});

app.delete("/users/:id",(req, res)=>{
    const id= req.params.id
    const removeUser = users.splice(id, 1)
    res.json(removeUser)
})
    
app.post("/users", (req, res) => {
    const body = req.body; // necesita el middleware, definido arriba: app.use(express.json());

    if (body.username) {
        res.status(400).json({ ok: false, message: "Name is required" });
    } else {
        users.push(body);
        res.status(201).json({ user: body });
    }
});

app.listen(process.env.PORT,()=> {
console.log("listening on port:", process.env.PORT);
})

