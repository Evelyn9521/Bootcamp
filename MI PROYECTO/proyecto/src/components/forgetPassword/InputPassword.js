import React from 'react'

export default function InputPassword() {
    return (
        <div className="">
            <div className="">
                <h3 className="">Recupera tu cuenta</h3>
                <p className="">Introduce tu correo electrónico y te enviaremos un enlace para que vuelvas a entrar en tu cuenta.</p>
               
                <div className="">
                    <label for="exampleInputEmail1"></label>
                    <input type="email" className="" id="exampleInputEmail1" placeholder="Correo electrónico"></input>
                </div>
                <button className="">Enviar enlace de acceso</button>
            </div>
        </div>
    )
}
