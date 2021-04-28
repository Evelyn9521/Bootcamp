import ToDos from "../Components/ToDos";
import Input from "../Components/Input";
import {createContext} from "react";

export const GlobalContext = createContext({})

function App4() {

    return (
      <div className="container">
         <h1>To-dos List</h1>
         <Input />
        <ToDos />
      </div>
    );
}

export default App4;
