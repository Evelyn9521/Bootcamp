
//Antes de los endpoints, usamos los middlewares
app.use(express.json());


app.get("/",(req, res) => {
    res.json({message: `petición GET recibida correctamente`})
});


app.get("/:id",(req, res) => {
    let id= req.params.id;
    res.json({message: `petición GET recibida con parámetro: ${id}`})
});
    
app.post("/", (req, res)=>{
    let body = req.body;

    if(body.username){
       
        res.status(200).json({message: `recibido username: ${body.username}`})
    }else{
        
        res.status(400).json({ok: false, message: `el username es obligatorio`})
    }


});

app.listen(3000);


