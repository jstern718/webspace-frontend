"Use strict;"

/** External dependencies */

import React, {useState, useEffect} from 'react';

/** Internal dependencies */

import WebspaceApi from './api';
import Helpers from './util';
import './App.css';

// React/jsx components */
import Users from './components/UsersPage';
import Servers from './components/ServersPage';
import Technologies from './components/TechnologiesPage';
import Resources from './components/ResourcesPage';
import Applications from './components/ApplicationsPage';

function App(){

    console.log("app runs");

    /** State declarations */

    const [customer, setCustomer] = useState([]);
    const [server, setServer] = useState([]);
    const [resource, setResource] = useState([]);
    const [technology, setTechnology] = useState([]);
    const [application, setApplication] = useState([]);
    const [language, setLanguage] = useState([]);
    const [serverTypes, setServerTypes] = useState([]);
    const [resourceTypes, setResourceTypes] = useState([]);
    const [softwareTechnologies, setSoftwareTechnologies] = useState([]);

    /** UseEffect makes sure api calls only take place once on load.*/

    useEffect(()=> {
        console.log("Second useEffect (non-price values) runs");

        WebspaceApi.getServerTypes(setServerTypes);
        WebspaceApi.getResourceTypes(setResourceTypes);
        WebspaceApi.getSoftwareTechnologies(setSoftwareTechnologies);

        WebspaceApi.getCustomers("adamapple", setCustomer);
        WebspaceApi.getServers("adamapple", setServer);
        WebspaceApi.getResources("adamapple", setResource);
        WebspaceApi.getTechnologies("adamapple", setTechnology);
        WebspaceApi.getApplications("adamapple", setApplication);
        WebspaceApi.getLanguages(setLanguage);

    }, []);

    /** Declare filtered list of languages to establish scope but cannot
        establish value until mapping languages to applications they are used in
        in jsx. Will be used multiple times on page load if customer has multiple
        apps. However, declaring inside jsx causes error   */

    let filteredLanguages;

    /** Creates objects to hold prices so that they can be accessed via object
        notation when needed. Imported helper function are used to fill objects
        with price values. The prices here are constant and only need to be
        retrieved once and saved to local memory for later use. Since those
        price values are needed later inside of the loops of other values,
        allowing direct access to the api call would significantly increase
        loadtime.*/

    let serverObj = Helpers.createObject(serverTypes);
    let technologyObj = Helpers.createObject(softwareTechnologies);
    let resourceObj = Helpers.createObject(resourceTypes);


  return (
    <div>
        <Users props={customer}/>

        <Resources props={[{resource, resourceObj}]}/>

        <Servers props={[{server, serverObj}]}/>

        <Technologies props={[{technology, technologyObj}]}/>

        <Applications props={[{application, language}]}/>

    </div>
  );
}

export default App;