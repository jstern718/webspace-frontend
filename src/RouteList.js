import React, { useContext } from "react";
import { Routes, Route, Navigate } from 'react-router-dom';

import Home from './components/HomePage';
import LoginPage from './LoginPage'
import userContext from './userContext'

/**
 * Component for RouteList
 *
 * App -> RoutesList -> {HomePage, *}
 */
function RouteList({ login, signUp, updateUser }) {
    const { user } = useContext(userContext);

    if (user) {
      return (
        <Routes>
          <Route path="/:nombre" element={<Home />} />

          <Route path="/*" element={<Navigate to="/:nombre" />} />
        </Routes>
      );
    }
    else {
      return (
        <Routes>
          <Route path="/login" element={<LoginPage login={login} />} />

          <Route path="/*" element={<Navigate to="/login" />}/>
        </Routes>
      );
    }
  }

  export default RouteList;