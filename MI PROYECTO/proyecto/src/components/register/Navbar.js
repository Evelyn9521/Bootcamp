import React from 'react'

export default function Navbar() {
    return (
        <div className="nav">
        
            <a href="">Login</a>
            <div>
                <label for="exampleInputEmail1">Usuario</label>
                <input type="email" className="" id="exampleInputEmail1" placeholder="Correo electrónico"></input>
            </div>
            <div>
                <label for="exampleInputEmail1">Contraseña</label>
                <input type="password" className="" id="exampleInputEmail1" placeholder="Contraseña"></input>
            </div>
            <div>
                <button>Entrar</button>
            </div> 
            
        </div>
    )
}
