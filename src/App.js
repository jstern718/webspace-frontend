"Use strict;"

/** External dependencies */
import React, { useState, useEffect } from "react";
import { BrowserRouter } from "react-router-dom";
import { jwtDecode } from "jwt-decode";

/** Internal dependencies */
import './App.css';
import WebspaceApi from './api';

// React/jsx components */

import RouteList from './RouteList';
import NavBar from './NavBar';

let TOKEN_KEY;
// let x = localStorage.getItem(TOKEN_KEY);
// console.log("before app function", x);

function App(){

    // console.log("app component runs");

    const [userState, setUserState] = useState(null);
    const [loadingState, setLoadingState] = useState(false);
    const [tokenState, setTokenState] = useState(localStorage.getItem(TOKEN_KEY));
    // console.log("starting token state", tokenState);

    useEffect(function onTokenChange() {

        // let x = localStorage.getItem(TOKEN_KEY);
        // console.log("useEffect local storage token/state", "storage", x, "state", tokenState);

        if (tokenState === null) {
        //   localStorage.removeItem(TOKEN_KEY);
          setUserState( null );
        } else {
          console.log("useEffect else token", tokenState)
        //   WebspaceApi.token = tokenState;
        //   TOKEN_KEY = tokenState;
             let token = localStorage.getItem(TOKEN_KEY);
             setTokenState(token);
        //   console.log("local storage before set / state", "storage", y, "state", tokenState )

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
        // console.log("username", username, "password", password);
        let newToken = await WebspaceApi.login(username, password);
        // let before = localStorage.getItem(TOKEN_KEY);
        // console.log("login local storage before", before);
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
    // async function logout() {
    //     setToken(null);
    // }
    function logoutFunc() {
        setTokenState(null);
        localStorage.setItem(TOKEN_KEY, "token");
    }

    // if (userState.isLoading) return <h1>Loading...</h1>;
    // console.log("app userState", userState);
    // let props = [login, register, userState, loadingState];
    // console.log("props", props)

    return (
        <div>
            <BrowserRouter>
                <NavBar props={{userState, logoutFunc}} />
                <RouteList props={{login, register, userState, loadingState, tokenState, setTokenState}} />
            </BrowserRouter>
        </div>
    );
}

export default App;