import './App.css';
import ToDos from "./Components/ToDos"
import Input from "./Components/Input"
import {useEffect, useState} from "react";

function App() {


  const [toDos, setToDos] = useState([])

  useEffect(() => {

    fetch("https://raw.githubusercontent.com/BC-FSWD/todo-list/master/todo-list.json")
      .then(response => response.json())
      .then(data => setToDos(data.splice(0, 20)));
    
  }, [])

    return (
      <div className="container">
        <h2>To-dos List</h2>
        <ToDos lists={toDos} setToDos={setToDos}/>
        <Input/>
      </div>
    );
}

export default App;
