

export default function Schedule({contacts, setContacts}) {

    function deletedContact(index) {
         setContacts(contacts.filter((c, i) => i !== index))
    };

    return (
        <div>
            { 
                contacts.map((contact, index) =>{ //ponemos el index para que salga el nº del array y se imprima por pantalla el titulo contact1
                    return <ul className="list-group-items" key={contact.phoneNumber}>
                        <li className="list-group-item active mb-3">Contacto {index + 1}</li>
                        <li className="list-group-item mb-3">{contact.name}</li>
                        <li className="list-group-item mb-3 ">{contact.lastName}</li>
                        <li className="list-group-item mb-3">{contact.direction}, {contact.city}, {contact.postalCode}</li>
                        <li className="list-group-item mb-3">{contact.phoneNumber}</li>
                        <><button type="button" className="btn btn-warning" onClick={()=>deletedContact(index)}>Deleted</button></>
                        </ul>  
                })
            }
        </div>
    )
}
