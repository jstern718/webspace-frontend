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

let TOKEN_KEY = "token";
localStorage.setItem("TOKEN_KEY", TOKEN_KEY);
console.log(localStorage);

function App(){

    //   console.log("app component runs");

    const [userState, setUserState] = useState(null);
    const [loadingState, setLoadingState] = useState(false);
    const [tokenState, setTokenState] = useState(localStorage.getItem(TOKEN_KEY));

    useEffect(function onTokenChange() {
        if (tokenState === null) {
        //   localStorage.removeItem(TOKEN_KEY);
          setUserState( null );
        } else {
          console.log("useEffect else token", tokenState)
          WebspaceApi.token = tokenState;
          TOKEN_KEY = tokenState;
          localStorage.setItem("TOKEN_KEY", TOKEN_KEY);
          async function getUserInfo() {
            // try {
              console.log("getUsername token", tokenState);
              const decoded  = jwtDecode( tokenState );
              console.log("decoded", decoded);
              const username = decoded.name;
              console.log("useEffect decoded username", username);
            //   console.log("getUsername username", username);
            //   const user = await WebspaceApi.getUsername(username);
            //   console.log("user", user);
              setUserState( username );
            // }
            // catch (err) {
            //   console.error(err);
            // }
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
        console.log("login func username", username, "password", password);
        let token = await WebspaceApi.login(username, password);
        console.log("login newToken", token);
        setTokenState(token);

    }

    const register = async function(formData) {
        console.log("register function runs");
        let {username, password} = formData;
        console.log("username", username, "password", password);
        let newToken = await WebspaceApi.register(username, password);
        setTokenState(newToken);

    }

    // /**
    //  * Makes API post request to logout
    //  */
    // async function logout() {
    //     setToken(null);
    // }
    const logout = async function logout() {
        setTokenState(null);
      }

    // if (userState.isLoading) return <h1>Loading...</h1>;
    // console.log("app userState", userState);
    // let props = [login, register, userState, loadingState];
    // console.log("props", props)

    return (
        <div>
            <BrowserRouter>
                    <RouteList props={{login, register, userState, loadingState}} />
            </BrowserRouter>
        </div>
    );
}

export default App;