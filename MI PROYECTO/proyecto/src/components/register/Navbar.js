import React from 'react'
import {NavLink} from "react-router-dom";



export default function Navbar() {


    return (
        <div className="nav ">
            
            <NavLink className="left" exact to="/">Login</NavLink>
        
            
            <div className="separatedInput">
                <label for="exampleInputEmail1">Usuario</label>
                <input type="email" className="" id="exampleInputEmail1" placeholder="Correo electrónico"></input>
            </div>
            <div className="separatedInput">
                <label for="exampleInputEmail1">Contraseña</label>
                <input type="password" className="" id="exampleInputEmail1" placeholder="Contraseña"></input>
            </div>
                <button className="buttonNav">Entrar</button>
            
        </div>
    )
}
