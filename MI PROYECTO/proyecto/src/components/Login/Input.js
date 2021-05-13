import React from 'react'


export default function Input() {
    return (
        <div >
            <label for="exampleInputEmail1">Usuario</label>
            <input type="email" className="form-control" id="exampleInputEmail1" placeholder="Correo electrónico"></input>
            <label for="exampleInputEmail1">Contraseña</label>
            <input type="password" className="form-control" id="exampleInputEmail1" placeholder="Contraseña"></input>
            <div>
                <a href="">¿Olvidaste tu contraseña?</a>
            </div>
            <button className="btn bg-warning">Crear cuenta nueva</button>
        </div>
    )
}
