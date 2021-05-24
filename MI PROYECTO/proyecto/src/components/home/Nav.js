import React from 'react'
import { NavLink } from 'react-router-dom'

export default function Nav() {
    return (
        <div className="linksNav">
           
        <NavLink className="linkk" exact to="/inicio">Inicio</NavLink>
        <NavLink className="linkk" exact to="/cuidesusalud">Cuide su salud</NavLink>
        <NavLink className="linkk" exact to="/chat">Chat</NavLink>
        </div>
    )
}
