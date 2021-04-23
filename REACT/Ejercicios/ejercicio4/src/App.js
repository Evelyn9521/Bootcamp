import './App.css';
import ToDos from "./Components/ToDos"
import Input from "./Components/Input"

function App() {


  const URL = "https://raw.githubusercontent.com/BC-FSWD/todo-list/master/todo-list.json"

  fetch(URL)
    .then(response => response.json())
    .then(data => console.log(data));

  return (
    <div className="App">
      <h2>To-dos List</h2>
      <ToDos/>
      <Input/>
    </div>
  );
}

export default App;
