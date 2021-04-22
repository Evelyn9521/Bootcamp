import {useState} from "react";

export default function Form({setContacts}) {
// //primera parte del apartado7
//     const [name, setName] = useState("")
//     const [lastName, setLastName] = useState("")
//     const [direction, setDirection] = useState("")
//     const [city, setCity] = useState("")
//     const [postalCode, setPostalCode] = useState("")
//     const [phoneNumber, setPhoneNumber] = useState("")

// //segunda parte del apartado 7
//     function handleName(e){
//         setName(e.target.value);
//     };
//     function handleLastName(e){
//         setLastName(e.target.value);
//     };
//     function handleDirection(e){
//         setDirection(e.target.value);
//     };
//     function handleCity(e){
//         setCity(e.target.value);
//     };
//     function handlePostalCode(e){
//         setPostalCode(e.target.value);
//     };
//     function handlePhoneNumber(e){
//         setPhoneNumber(e.target.value);
//     };

    const initialState ={
        name: "",
        lastName:"",
        direction:"",
        city:"",
        postalCode:"",
        phoneNumber:""
    }

    const [form, setForm] = useState(initialState);
    
    function handleInput(e){
        const inputName=e.target.id;
        const newValue = e.target.value
       
        setForm({...Form, ...{[inputName]: newValue}})
    }



    //apartado 8
    function submit(e){
        e.preventDefault();
            // const newContact = {name, lastName, direction, city, postalCode, phoneNumber}
    //forma larga
        // const newContact ={
        //     name: name,
        //     lastName: lastName,
        //     direction: direction,
        //     city: city,
        //     postalCode: postalCode,
        //     phoneNumber: phoneNumber
        // };

        // setContacts(currentContacts => [...currentContacts, newContact]);
        // // e.target.reset(); //para dejar el formulario en blanco
        // setName("");
        // setLastName("");
        // setDirection("");
        // setCity("");
        // setPostalCode("");
        // setPhoneNumber(""); 
    }

    return (
        <form className="form-group" onSubmit={submit}> 

            <input id="name" className="form-control mb-3 " type="text" value={form.name} onChange={handleInput} placeholder="Insert your name" readonly></input>
            <input id="lastName" className="form-control mb-3 " type="text" value={form.lastName} onChange={handleInput} placeholder="Insert your last name" readonly></input>
            <input id="direction" className="form-control mb-3 " type="text" value={form.direction} onChange={handleInput} placeholder="Insert your direction" readonly></input>
            <input id="city" className="form-control mb-3" type="text" value={form.city} onChange={handleInput} placeholder="Insert your city" readonly></input>
            <input id="postalCode" className="form-control mb-3" type="text" value={form.postalCode} onChange={handleInput} placeholder="Insert your postal code" readonly></input>
            <input id="phoneNumber" className="form-control mb-3" type="text" value={form.phoneNumber} onChange={handleInput} placeholder="Insert your phone number" readonly></input>
            <button type="submit" className="mb-3 btn bg-success" value="register">Register</button>
        </form>
    )
}
