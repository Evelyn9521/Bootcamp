import {useState} from "react"; //importamos el useState 
import {useContext} from "react";
import {GlobalContext} from "../App";

export default function Form() { //recibo la función como si fuera un props que modifica el array o los contactos

    const{setContacts}=useContext(GlobalContext)
    
 //Creamos tantos useState como inputs tengamos
    const [name, setName] = useState("")
    const [lastName, setLastName] = useState("")
    const [direction, setDirection] = useState("")
    const [city, setCity] = useState("")
    const [postalCode, setPostalCode] = useState("")
    const [phoneNumber, setPhoneNumber] = useState("")

 //Creamos las funciones con las que vamos a hacer el evento en onclick y se lo añadimos con el mismo nombre en cada input
    function handleName(e){
        setName(e.target.value);
     };

    function handleLastName(e){
        setLastName(e.target.value);
     };

    function handleDirection(e){
        setDirection(e.target.value);
    };

     function handleCity(e){
        setCity(e.target.value);
    };

    function handlePostalCode(e){
        setPostalCode(e.target.value);
    };
    
    function handlePhoneNumber(e){
        setPhoneNumber(e.target.value);
     };

     //Apartado 8
    function submit(e){
        e.preventDefault(); //evitamos el comportamiento por defecto, no se actualiza la pág cuando le damos al enter
        
        //creamos un nuevo objeto con la información de todos los inputs
        const newContact = {name, lastName, direction, city, postalCode, phoneNumber};
        //forma larga
        // const newContact ={
        //     name: name,
        //     lastName: lastName,
        //     direction: direction,
        //     city: city,
        //     postalCode: postalCode,
        //     phoneNumber: phoneNumber
        // };

        //creamos un nuevo array, al principio tendrá todos los elementos del array original y al final del todo tendrá el nuevo elemento
        setContacts(currentContacts => [...currentContacts, newContact]);

        // e.target.reset(); //el reset hace lo mismo que el de abajo, pero en este caso no podemos usarlo
        // Una vez añadido algo en el formulario, posteriormente lo dejamos en blanco
        setName("");
        setLastName("");
        setDirection("");
        setCity("");
        setPostalCode("");
        setPhoneNumber(""); 
    }

    return (
        <form className="form-group" onSubmit={submit}> 
            <input className="form-control mb-3 " type="text"  value={name}         onChange={handleName}        placeholder="Insert your name" readonly></input>
            <input className="form-control mb-3 " type="text"  value={lastName}     onChange={handleLastName}    placeholder="Insert your last name" readonly></input>
            <input className="form-control mb-3 " type="text"  value={direction}    onChange={handleDirection}   placeholder="Insert your direction" readonly></input>
            <input className="form-control mb-3"  type="text"  value={city}         onChange={handleCity}        placeholder="Insert your city" readonly></input>
            <input className="form-control mb-3"  type="text"  value={postalCode}   onChange={handlePostalCode}  placeholder="Insert your postal code" readonly></input>
            <input className="form-control mb-3"  type="text"  value={phoneNumber}  onChange={handlePhoneNumber} placeholder="Insert your phone number" readonly></input>
            <button type="submit" className="mb-3 btn bg-success" value="register">Register</button>
        </form>
    )
}

//hacemos onChange y me metemos el nombre de cada función con las que vamos a hacer el evento
//hacemos onSubmit y metemos el nombre de la función con las que queremos hacer el evento
//ponemos el value asociado con cada nombre de la propiedad para que el formulario quede vacio después de añadirle algo