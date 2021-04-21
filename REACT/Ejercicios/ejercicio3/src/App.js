
import './App.css';
import Schedule from "./Components/Schedule";
import Form from "./Components/Form";

function App() {

  const contacts ={
  contact1: [
    {name: "Lucas", lastName: "Gómez",direction: "C/ Luz",city: "Málaga",postalCode: 29005,phoneNumber: 605258741}
  ],
  
  contact2: [
    {name: "Juan", lastName: "Cruz",direction: "C/ Sol",city: "Málaga",postalCode: 29005,phoneNumber: 605258741}
  ],
  
  contact3: [
    {name: "Sofia", lastName: "Hernández",direction: "C/ Eugenio",city: "Málaga",postalCode: 29008,phoneNumber: 605258741}
  ]
  }

  return (
    <div className="App">
      <Schedule contact={contacts.contact1} category="contact 1" />
      <Schedule contact={contacts.contact2} category="contact 2"/>
      <Schedule contact={contacts.contact3} category="contact 3"/>
      <Form/>
    </div>
  );
}

export default App;
