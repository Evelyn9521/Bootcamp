
import { createContext, useState, useEffect } from "react";
import {BrowserRouter, Route, NavLink, Switch} from "react-router-dom";
import App1 from "./Pages/App1";
import App2 from "./Pages/App2";
import App3 from "./Pages/App3";
import App4 from "./Pages/App4";


export const GlobalContext = createContext({});


function App() {

  const initialState =[
    {name: "Lucas", lastName: "Gómez",direction: "C/ Luz",city: "Málaga",postalCode: 29005,phoneNumber: 607258741},
    {name: "Juan", lastName: "Cruz",direction: "C/ Sol",city: "Málaga",postalCode: 29005,phoneNumber: 605958741},
    {name: "Sofia", lastName: "Hernández",direction: "C/ Eugenio",city: "Málaga",postalCode: 29008,phoneNumber: 705258741}
  ];
  const [contacts, setContacts] = useState(initialState);

  const [toDos, setToDos] = useState([])

  useEffect(() => {

    fetch("https://raw.githubusercontent.com/BC-FSWD/todo-list/master/todo-list.json")
      .then(response => response.json())
      .then(data => setToDos(data.slice(0, 20)));
    
  }, []);

  return (
    <div >
     <BrowserRouter>

      <nav className="navbar  bg-dark px-5 py-3"  >
        <NavLink  exact to="/" className="text-white text-decoration-none font-weight-bold" activeClassName= "text-success">Ejercicio 1</NavLink>
        <NavLink  to="/App2" className="text-white text-decoration-none font-weight-bold" activeClassName= "text-success ">Ejercicio 2</NavLink>
        <NavLink  to="/App3" className="text-white text-decoration-none font-weight-bold" activeClassName= "text-success ">Ejercicio 3</NavLink>
        <NavLink  to="/App4" className="text-white text-decoration-none font-weight-bold" activeClassName= "text-success ">Ejercicio 4</NavLink>
      </nav>

     <GlobalContext.Provider value={{contacts, setContacts, lists: toDos, setToDos}}>
        <Switch>
            <Route exact path="/" component={App1}/> 
            <Route path="/App2" component={App2}/>
            <Route path="/App3" component={App3}/>
            <Route path="/App4" component={App4}/>
        </Switch>
      </GlobalContext.Provider>
      </BrowserRouter>
    </div>
  );
}

export default App;
