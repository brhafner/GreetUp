import React from "react";
import ReactDOM from "react-dom";
import configureStore from './store/store'
// testing
import {signup, login, logout } from './util/session_api_util'; 
// end testing

document.addEventListener("DOMContentLoaded", () => {
    const root = document.getElementById("root");
    const store = configureStore()
    // testing
    window.signup = signup
    window.login = login
    window.logout = logout
    window.getState = store.getState;
    window.dispatch = store.dispatch;
    // /testing
    ReactDOM.render(<h1>React is working</h1>, root);
});