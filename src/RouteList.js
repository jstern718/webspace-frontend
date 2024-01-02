import React from "react";
import { Routes, Route } from 'react-router-dom';

import HomePage from './routes/HomePage';
import Customers from "./routes/Customers";
import ServerTypes from "./routes/ServerTypes";
import ResourceTypes from "./routes/ResourceTypes";
import CodeLanguages from "./routes/CodeLanguages";
import SoftwareTechnologies from "./routes/SoftwareTechnologies";
import ServersUsed from './routes/ServersUsed';
import ResourcesUsed from './routes/ResourcesUsed';
import TechnologiesUsed from "./routes/TechnologiesUsed";
import Applications from "./routes/Applications";
import LanguagesUsed from "./routes/LanguagesUsed";

/**
 * Component for RouteList
 *
 * App -> RoutesList -> {HomePage, Customers, ServerTypes, ResourceTypes
                         CodeLanguages, SoftwareTechnologies, ServersUsed
                         ResourcesUsed, TechnologiesUsed, Applications,
                         LanguagesUsed}
 */
function RouteList(path) {
    console.log("routeList runs");
//   const { user } = useContext(userContext);
    // const Navigate = useNavigate();

//   if (user) {
    return (
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/api/customers" element={<Customers />} />
        <Route path="/api/server_types" element={<ServerTypes />} />
        <Route path="/api/resource_types" element={<ResourceTypes />} />
        <Route path="/api/code_languages" element={<CodeLanguages/>} />
        <Route path="/api/software_technologies" element={<SoftwareTechnologies />} />
        <Route path="/api/servers_used" element={<ServersUsed />} />
        <Route path="/api/resources_used" element={<ResourcesUsed />} />
        <Route path="/api/technologies_used" element={<TechnologiesUsed />} />
        <Route path="/api/applications" element={<Applications />} />
        <Route path="/api/languages_used" element={<LanguagesUsed />} />
        {/* <Route path="/api/*" element={<Navigate to="/" />} />
        <Route path="/*" element={<Navigate to="/" />} /> */}
      </Routes>
    );

}

export default RouteList;