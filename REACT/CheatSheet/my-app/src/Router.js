import {BrowserRouter, Route, Switch, NavLink} from "react-router-dom";
import Index from "./Pages/Index";
import Dashboard from "./Pages/Dashboard";
import Record from "./Pages/Record"
import Error from "./Pages/Error"

export default function Router() {
    return (
        <div>
            <BrowserRouter>

                <NavLink to="/" activeClassName="active">Ir al Inicio</NavLink>
                <NavLink to="/dashboard" style={{marginRight:"10px"}}>Panel de control</NavLink>
                <NavLink to="/record/5">Record</NavLink>

                <Switch>
                    <Route exact path="/" component={Index}/>
                    <Route path="/dashboard" component={Dashboard}/>
                    <Route path="/record/:user" component={Record}/>

                    <Route component={Error}/>
                </Switch>
            </BrowserRouter>
        </div>
    )
}

