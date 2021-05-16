import React from 'react'


export default function Input() {
    return (
        <div>
            
            <div>
                <label for="exampleInputEmail1">Usuario</label>
            </div>
            <input type="email" className="input" id="exampleInputEmail1" placeholder="Correo electrónico"></input>
            
            <div>
             <label for="exampleInputEmail1">Contraseña</label>
            </div>
            <input type="password" className="input" id="exampleInputEmail1" placeholder="Contraseña"></input>
            <div>
            <button className="button1">Iniciar Sesión</button>
            </div>
            <div className="link">
                <a className="link" href="">¿Olvidaste tu contraseña?</a>
            </div>
            <button className="button2">Crear cuenta nueva</button>
        </div>
    )
}
