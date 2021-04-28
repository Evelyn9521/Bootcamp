
import Schedule from "../Components/Schedule";
import Form from "../Components/Form";

function App3() {

  return (
    <div className="container">
       <h2>ListBook</h2>
      <Schedule />
      
      <h2>New Contact</h2>
      <Form/>  {//funcion para modificar el array (los contactos) en el form
}   </div>
  );
}

export default App3;
