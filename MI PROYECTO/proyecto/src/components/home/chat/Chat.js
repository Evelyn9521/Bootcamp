import React from 'react'
import Photo from "../Photo"
import Nav from "../Nav"
import ChatContent from "../chat/ChatContent"
import Footer from "../../footer/Footer"
import "../home.css"

export default function Chat() {
    return (
        <div className="d-flex">
            <Photo/> 
            <Nav/>
            <ChatContent/>
            <Footer/>
        </div>
    )
}
