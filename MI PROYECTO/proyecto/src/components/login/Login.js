import React from 'react'
import Input from "./Input"
import Title from './Title'
import "./login.css";



export default function Login() {

    return (
      
        <div className="twocolumns login">
      
          <div className="center ">
            <Title/>
          </div>

          <div className="center">
            <Input/>
          </div>
        
        </div>
        
        
      
    )
};
