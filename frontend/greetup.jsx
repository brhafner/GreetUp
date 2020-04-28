import React from "react";
import ReactDOM from "react-dom";
import {signup, login, logout } from './util/session_api_util'; 

document.addEventListener("DOMContentLoaded", () => {
    const root = document.getElementById("root");

    // testing
    window.signup = signup
    window.login = login
    window.logout = logout
    // /testing
    ReactDOM.render(<h1>React is working</h1>, root);
});