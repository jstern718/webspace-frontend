//TODO: Question: is there a way to change url on redirect. Method i found didn't work.

import React from "react";
import { Routes, Route, Navigate } from 'react-router-dom';

import Home from './components/HomePage';
import LoginPage from './LoginPage'
import RegisterPage from "./RegisterPage";


/**
 * Component for RouteList
 *
 * App -> RoutesList -> {HomePage, *}
 */
function RouteList( props ) {

    console.log("routeList runs ...");
    console.log("props", props);
    let {userState} = props.props;
    console.log("userState", userState);
    let tokenState = props.props;
    // let [login, register, userState, loadingState] = props.props.props;
    // console.log("routelist userState", userState)

    if (!userState) {

        console.log("routeList no current user")
        return (
          <Routes >
            <Route path="/login" element={<LoginPage props={props} />} />

            <Route path="/register" element={<RegisterPage props={props} />} />

            <Route path="/*" element={<Navigate to="/login" />}/>
          </Routes>
        );
      }
    else {

        console.log("routeList yes current user")
        return (
            <Routes>
            <Route path="/:nombre" element={<Home props={props}/>} />

            <Route path="/*" element={<Navigate to="/:nombre" />} />
            </Routes>
        );
    }

  }

  export default RouteList;




