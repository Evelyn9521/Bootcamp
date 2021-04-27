// import './App.css';
import {BrowserRouter, Route, NavLink, Switch} from "react-router-dom";
import App1 from "./Pages/App1";
import App2 from "./Pages/App2";
import App3 from "./Pages/App3";
import App4 from "./Pages/App4";

function App() {
  return (
    <div >
     <BrowserRouter>
      <nav className="navbar  bg-dark"  >
        <NavLink className="text-white" exact to="/Pages/App1" activeClassName= " active text-success">Ejercicio 1</NavLink>
        <NavLink className="text-white" to="/Pages/App2" activeClassName= "active text-success ">Ejercicio 2</NavLink>
        <NavLink className="text-white" to="/Pages/App3" activeClassName= "active text-success ">Ejercicio 3</NavLink>
        <NavLink className="text-white" to="/Pages/App4" activeClassName= "active text-success ">Ejercicio 4</NavLink>
      </nav>

      <Switch>
          <Route path="/Pages/App1" component={App1}/>
          <Route path="/Pages/App2" component={App2}/>
          <Route path="/Pages/App3" component={App3}/>
          <Route path="/Pages/App4" component={App4}/>

      </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
