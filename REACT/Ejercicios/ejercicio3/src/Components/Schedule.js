

export default function Schedule(props) {
    return (
        <div>
           
             {
                 props.contact.map(contact =>{
                     return <ul className="list-group-item">
                        <li className="list-group-item active w-50 m-auto">{props.category}</li>
                        <li className="list-group-item w-50 m-auto">{contact.name}</li>
                        <li className="list-group-item w-50 m-auto ">{contact.lastName}</li>
                        <li className="list-group-item w-50 m-auto">{contact.direction}, {contact.city}, {contact.postalCode}</li>
                        <li className="list-group-item w-50 m-auto">{contact.phoneNumber}</li>
                        <><button type="button" class="btn btn-warning ">Deleted</button></>
                        </ul>
                           
                 })
             }
            
         
        </div>
    )
}
