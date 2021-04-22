import {useState} from "react";
import './App.css';
import Schedule from "./Components/Schedule";
import Form from "./Components/Form";

function App() {

  const initialState =[
    {name: "Lucas", lastName: "Gómez",direction: "C/ Luz",city: "Málaga",postalCode: 29005,phoneNumber: 605258741},
    {name: "Juan", lastName: "Cruz",direction: "C/ Sol",city: "Málaga",postalCode: 29005,phoneNumber: 605258741},
    {name: "Sofia", lastName: "Hernández",direction: "C/ Eugenio",city: "Málaga",postalCode: 29008,phoneNumber: 605258741}
  ];
  const [contacts, setContacts] = useState(initialState);

  return (
    <div className="container">
       <h2>ListBook</h2>
      <Schedule contact={contacts}/>
      
      <h2>New Contact</h2>
      <Form setContacts={setContacts}/>
    </div>
  );
}

export default App;
