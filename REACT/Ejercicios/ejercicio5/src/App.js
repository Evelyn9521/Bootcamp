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

      <nav className="navbar  bg-dark px-5 py-3"  >
        <NavLink  exact to="/" className="text-white text-decoration-none font-weight-bold"   activeClassName= "text-success">Ejercicio 1</NavLink>
        <NavLink  to="/App2"   className="text-white text-decoration-none font-weight-bold"   activeClassName= "text-success ">Ejercicio 2</NavLink>
        <NavLink  to="/App3"   className="text-white text-decoration-none font-weight-bold"   activeClassName= "text-success ">Ejercicio 3</NavLink>
        <NavLink  to="/App4"   className="text-white text-decoration-none font-weight-bold"   activeClassName= "text-success ">Ejercicio 4</NavLink>
      </nav>

      <Switch>
          <Route exact path="/" component={App1}/> 
          <Route path="/App2"   component={App2}/>
          <Route path="/App3"   component={App3}/>
          <Route path="/App4"   component={App4}/>
      </Switch>
      
      </BrowserRouter>
    </div>
  );
}

export default App;
