import React from 'react'
import Login from "../login/Login";
import Register from "../register/Register"
import {BrowserRouter, Route, Switch} from "react-router-dom";
import ForgetPassword from '../forgetPassword/ForgetPassword';
// import Navbar from "../register/Navbar";

export default function router() {
    return (
        <>
        <BrowserRouter>
            {/* <Navbar />  */}

            <Switch>
                <Route  exact path="/" component={Login}/>
                <Route path="/register" component={Register}/>
                <Route path="/forgetpassword" component={ForgetPassword}/>
            </Switch>
        </BrowserRouter>
        </>
    )
}
