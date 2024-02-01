"Use strict;"

/** External dependencies */
import React, { useState, useEffect, useRef } from "react";
import { BrowserRouter } from "react-router-dom";
import { jwtDecode } from "jwt-decode";

/** Internal dependencies */
import './App.css';
import WebspaceApi from './api';

// React/jsx components */
import RouteList from './RouteList';
import NavBar from './NavBar';

/** import pyodide from cdn so it will be accessible throughout app */
let pyodide = await window.loadPyodide({
    indexURL : "https://cdn.jsdelivr.net/pyodide/v0.18.1/full/"
});

let TOKEN_KEY;

function App(){

    // console.log("app component runs");

    const [userState, setUserState] = useState(null);
    const [loadingState, setLoadingState] = useState(false);
    const [tokenState, setTokenState] = useState(localStorage.getItem(TOKEN_KEY));
    // console.log("starting token state", tokenState);

    //for pyodide

    const [output, setOutput] = useState();

    useEffect(function onTokenChange() {

        if (tokenState === null) {
          setUserState( null );
        }
        else {
            console.log("useEffect else token", tokenState)
            let token = localStorage.getItem(TOKEN_KEY);
            setTokenState(token);

            async function getUserInfo() {
                try {
                    console.log("getUsername token", tokenState);
                    const decoded  = jwtDecode( tokenState );
                    console.log("decoded", decoded);
                    const username = decoded.name;
                    console.log("useEffect decoded username", username);
                    setUserState( username );
                }
                catch (err) {
                    console.error(new Error( `invalid token used, token = ${tokenState}`, { cause: err }))
                }
            }
            getUserInfo();
        }

      }, [tokenState]);

    /**
     * Makes API post request to login
     * @param {Object} formData data from form
     */
    const login = async function(formData) {
        console.log("login function runs");
        let {username, password} = formData;
        let newToken = await WebspaceApi.login(username, password);
        localStorage.setItem(TOKEN_KEY, newToken);
        setTokenState( newToken );

    }

    const register = async function(formData) {
        console.log("register function runs");
        let {username, password} = formData;
        // console.log("username", username, "password", password);
        let newToken = await WebspaceApi.register(username, password);
        setTokenState(newToken);

    }

    // /**
    //  * Makes API post request to logout
    //  */

    function logoutFunc() {
        setTokenState(null);
        localStorage.setItem(TOKEN_KEY, "token");
    }

    return (
        <div>
            <BrowserRouter>
                <NavBar props={{userState, logoutFunc}} />
                <RouteList props={{login, register,
                                   userState, loadingState,
                                   tokenState, setTokenState,
                                   output, setOutput}} />
            </BrowserRouter>
        </div>
    );
}

export default App;