import React from 'react'
import Login from "../login/Login";
import Register from "../register/Register"
import {BrowserRouter, Route, Switch} from "react-router-dom";

export default function router() {
    return (
        <div>
        <BrowserRouter>
            <Switch>
                <Route  exact path="/" component={Login}/>
                <Route path="/register" component={Register}/>
            </Switch>
      </BrowserRouter>
        </div>
    )
}
