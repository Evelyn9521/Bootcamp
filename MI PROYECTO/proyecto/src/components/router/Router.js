import React from 'react'
import Login from "../login/Login";
import Register from "../register/Register"
import Home from "../home/Home"
import {BrowserRouter, Route, Switch} from "react-router-dom";
import ForgetPassword from '../forgetPassword/ForgetPassword';

export default function router() {
    return (
        <>
        <BrowserRouter>

            <Switch>
                <Route  exact path="/" component={Login}/>
                <Route path="/register" component={Register}/>
                <Route path="/forgetpassword" component={ForgetPassword}/>
                <Route path="/home" component={Home}/>
            </Switch>
        </BrowserRouter>
        </>
    )
}
