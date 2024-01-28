"Use strict;"

/** External dependencies */

import React, {useState, useEffect} from 'react';

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

/**
 * Component for rendering HomePage
 * RoutesList -> HomePage
 */
function Home( props ){

    // console.log("Home runs ...");
    console.log("props", props);

    let userState = props.props.props.userState
    const nombre = userState

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

    }, [nombre]);

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

  console.log("userState", userState);
  console.log("user", user);
  if (userState === user.name) {
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
}

export default Home;