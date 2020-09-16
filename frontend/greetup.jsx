import React from "react";
import ReactDOM from "react-dom";
import configureStore from './store/store'
import Root from './components/root';
// testing
// import {signup, login, logout } from './actions/session_actions'; 
// import { requestAllGroups } from './actions/group_actions'
// end testing

document.addEventListener("DOMContentLoaded", () => {
    const root = document.getElementById("root");
    let store;
    if (window.currentUser) {
        const preloadedState = {
            entities: {
                users: { [window.currentUser.id]: window.currentUser }
            },
            session: { currentUserId: window.currentUser.id }
        };
        store = configureStore(preloadedState);
        delete window.currentUser;
    } else {
        store = configureStore();
    }
    
    // testing
    // window.signup = signup
    // window.login = login
    // window.logout = logout
    // window.getState = store.getState;
    // window.dispatch = store.dispatch;
    // window.requestAllGroups = requestAllGroups;
    // /testing
    ReactDOM.render(<Root store={store}/>, root);
});