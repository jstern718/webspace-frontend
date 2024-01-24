import React from "react";
import { Routes, Route, Navigate } from 'react-router-dom';

import Home from './components/HomePage';
import LoginPage from './LoginPage'


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
    // let [login, register, userState, loadingState] = props.props.props;
    // console.log("routelist userState", userState)

    if (!userState) {
        console.log("routeList no current user")
        return (
          <Routes>
            <Route path="/login" element={<LoginPage props={props} />} />

            <Route path="/*" element={<Navigate to="/login" />}/>
          </Routes>
        );
      }
    else {
        //WHY BEING SENT TO localhost:3000/:nombre
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




