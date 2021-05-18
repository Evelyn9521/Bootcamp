import React from 'react'

export default function Form() {
    return (
        <div>
            <h1>CREAR UNA CUENTA</h1>
            <h3>Es rápido y fácil</h3>

            <label for="exampleInputName"></label>
            <input type="text" className="" id="exampleInputName" placeholder="Nombre"></input>
        
            <label for="exampleInputLastName"></label>
            <input type="text" className="" id="exampleInputLastName" placeholder="Apellidos"></input>
           
            <div className="">
                <label for="exampleInputEmail1"></label>
                <input type="email" className="" id="exampleInputEmail1" placeholder="Correo electrónico"></input>
            </div>

            <div>
            <label for="examplePassword"></label>
                <input type="password" className="" id="examplePassword" placeholder="Contraseña"></input>
            </div>

            <div>
                <label for="birthdayInput">Fecha de nacimiento</label>
                <input type="date" id="birthdayInput" name="birthdayInput"  value="2021-04-18" min="1910-01-01" max="2021-05-18"></input>
            </div>
            
            <button>Registrarte</button>
            
        
        </div>
    )
}
