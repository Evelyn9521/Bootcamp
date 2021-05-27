import React from 'react'



export default function ChatContent({contacts, messages}) {


    return (

        <div className=" content box" >
                <div className="contactsleft">
                    <h2>Contactos</h2>
                    <ul>
                        {contacts.map((contact)=> <li>{contact.name}</li>)}
                    </ul>
                </div>
            <div className="row container d-flex justify-content-center chatrigth">
                    
                <div className="card ">
                            <div className="card-header">
                                <h4 className="card-title"><strong>Chat</strong></h4> 
                            </div>
                            
                            <div className="" >
                                { /* TODO: messages.map() */
                                    messages.map((message)=>{
                                    return(
                                        <div className="media media-chat chat-reverse">
                                            <div className="media-body">
                                                <p>{message.name}</p>
                                                <p>{message.message}</p>
                                                <p className="meta"><time>{message.date}</time></p>
                                            </div>
                                        </div>
                                
                                        )
                                    })
                                }
            
            
                            </div>
                                <div className=""> 
                                <input className="" type="text" placeholder="Escribir un mensaje"/> 
                        
                            </div>
                    </div>  
            </div>
        </div>
    )
}

