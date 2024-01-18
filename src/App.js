"Use strict;"

/** External dependencies */
import React, { useState, useEffect } from "react";
import { BrowserRouter } from "react-router-dom";
import { jwtDecode } from "jwt-decode";

/** Internal dependencies */
import './App.css';
import WebspaceApi from './api';
import userContext from "./userContext";

// React/jsx components */

import RouteList from './RouteList';

const TOKEN_KEY = "token";

function App(){

  console.log("app component runs");

  const [userState, setUserState] = useState({ isLoading: false, currentUser: null });
  const [token, setToken] = useState(localStorage.getItem(TOKEN_KEY));

  console.log("user......", userState.currentUser);
  console.log("token......", token);

/**
   * useEffect activated when token changes
   * Sets WebspaceApi.token
   * gets username by decoding payload
   * call Webspace.getUser passing in username
   */
    useEffect(function onTokenChange() {
        // if (token === null) {
        //     localStorage.removeItem(TOKEN_KEY);
        //     setUserState({ isLoading: false, currentUser: null });
        // }
        // else {
            WebspaceApi.token = token;
            localStorage.setItem(TOKEN_KEY, token);
            async function getUserInfo() {
                try {
                    const { username } = jwtDecode(token);
                    console.log("username", username);
                    // const user = await WebspaceApi.getUserLogin(username);
                    // console.log("user", user);
                    // setUserState({ isLoading: false, currentUser: user });
                }
                catch (err) {
                    console.error(err);
                }
            }
            getUserInfo();
        // }
    }, [token]);

    /**
     * Makes API post request to login
     * @param {Object} formData data from form
     */
    async function login(formData) {
        console.log("login function runs");
        let {username, password} = formData;
        console.log("username-password from login func", username, password);
        const token = await WebspaceApi.login({username, password});
        setToken(token);
    }

    async function register(formData) {
        console.log("register function runs");
        let {username, password} = formData;
        console.log("username-password from register func", username, password);
        const token = await WebspaceApi.register({username, password});
        setToken(token);
    }

    // /**
    //  * Makes API post request to logout
    //  */
    async function logout() {
        setToken(null);
    }

    // if (userState.isLoading) return <h1>Loading...</h1>;

    return (
        <div>
            <BrowserRouter>
                <userContext.Provider value={{ user: userState.currentUser }}>
                    <RouteList login={login, register} />
                </userContext.Provider>
            </BrowserRouter>
        </div>
    );
}

export default App;