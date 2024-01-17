"Use strict;"

/** External dependencies */

import React, {useState, useEffect} from 'react';
import { useParams } from 'react-router-dom';

/** Internal dependencies */

import WebspaceApi from '../api';
import Helpers from '../util';
import '../App.css';

// React/jsx components */
import Users from './UsersPage';
import Servers from './ServersPage';
import Technologies from './TechnologiesPage';
import Resources from './ResourcesPage';
import Applications from './ApplicationsPage';

function Home(){

    console.log("Home runs");

    /** get params from url */
    const { nombre } = useParams();

    /** State declarations */

    const [user, setUser] = useState([]);
    const [servers, setServers] = useState([]);
    const [resources, setResources] = useState([]);
    const [technologies, setTechnologies] = useState([]);
    const [applications, setApplications] = useState([]);
    const [languages, setLanguages] = useState([]);
    const [serverTypes, setServerTypes] = useState([]);
    const [resourceTypes, setResourceTypes] = useState([]);
    const [softwareTechnologies, setSoftwareTechnologies] = useState([]);


    /** UseEffect makes sure api calls only take place once on load.*/

    useEffect(()=> {
        console.log("useEffect runs");

        WebspaceApi.getServerTypes(setServerTypes);
        WebspaceApi.getResourceTypes(setResourceTypes);
        WebspaceApi.getSoftwareTechnologies(setSoftwareTechnologies);

        WebspaceApi.getUser(nombre, setUser);
        WebspaceApi.getServers(nombre, setServers);
        WebspaceApi.getResources(nombre, setResources);
        WebspaceApi.getTechnologies(nombre, setTechnologies);
        WebspaceApi.getApplications(nombre, setApplications);
        WebspaceApi.getLanguages(setLanguages);

    }, []);

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

        <Users props={user}/>

        <Resources props={[{resources, resourceObj}]}/>

        <Servers props={[{servers, serverObj}]}/>

        <Technologies props={[{technologies, technologyObj}]}/>

        <Applications props={[{applications, languages}]}/>

    </div>
  );
}

export default Home;