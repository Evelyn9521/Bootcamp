import './App.css';
import ToDos from "./components/ToDos"
import Input from "./components/Input"
import {useEffect, useState} from "react";


function App() {


  const [toDos, setToDos] = useState([])

  useEffect(() => {

    fetch("https://raw.githubusercontent.com/BC-FSWD/todo-list/master/todo-list.json")
      .then(response => response.json())
      .then(data => setToDos(data.slice(0, 20)));
    
  }, []);

    return (
      <div className="container">
         <h1>To-dos List</h1>
         <Input setToDos={setToDos}/>
        <ToDos lists={toDos} setToDos={setToDos}/>
      </div>
    );
}

export default App;
