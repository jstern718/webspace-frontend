"Use strict;"

/** External dependencies */

import React, {useState, useEffect} from 'react';

// uuid is used to ensure unique ids for looping react components
import { v4 as getId } from 'uuid';

// import pre-styled mui components */
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';

/** Internal dependencies */

import WebspaceApi from '../../src/api';
import Helpers from '../../src/util';
import {MyBox, MyListItem, MyType} from '../../src/style';
import './App.css';

// React/jsx components */
import Users from '../../src/components/UsersPage';
import Servers from '../../src/components/ServersPage';

// import Technologies from './components/TechnologiesPage';
// import Applications from './components/ApplicationsPage';



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

        <MyBox key={getId()}>
            <MyType key={getId()}>
                Server Resources Used (combined total)
            </MyType>
            <List>
                {Array.isArray(resource) && resource.map((item, index) => (
                    <MyListItem key={getId()}>
                        <ListItemText
                            key={getId()}
                            primary={`•  ${item.resource_name}: ...
        Total Units: ... ${item.resource_amount}
        Price per Unit: ... $${resourceObj[item.resource_name]}
        Total Cost: ... $${Helpers.combinePrice(item.resource_amount,
                                                 resourceObj[item.resource_name]
                                               )}`}
                            sx={{whiteSpace: "pre-wrap" }}/>
                    </MyListItem>
                ))}
            </List>
        </MyBox>

        <Server/>

        <MyBox key={getId()}>
            <MyType key={getId()}>
                Individual Servers
            </MyType>
            <List key={getId()}>
            {Array.isArray(server) && server.map((item) => (
                <MyListItem key={getId()}>
                    <ListItemText
                        key={getId()}
                        primary={`•  Id ﹟${item.id}:
        Server Name: ... ${item.server_name}
        Price: ... $${serverObj[item.server_name]}`}
                        sx={{whiteSpace: "pre-wrap" }}/>
                </MyListItem>
                ))}
            </List>
        </MyBox>

        <MyBox key={getId()} >
            <MyType key={getId()}>
                Technologies Used
            </MyType>
            <List key={getId()}>
                {Array.isArray(technology) && technology.map((item, index) => (
                    <div>
                        <MyListItem key={getId()}>
                            <ListItemText
                                key={getId()}
                                primary={`•  Id ﹟${item.id}:
        Technology: ... ${item.technology_name}
        Price: ... $${technologyObj[item.technology_name]}`}
                                sx={{whiteSpace: "pre-wrap" }}/>
                         </MyListItem>
                    </div>
                ))}
            </List>
        </MyBox>

        <MyBox key={getId()}>
                <MyType key = {getId()}>
                     Applications
                </MyType>
                {Array.isArray(application) && application.map((item, index) => (
                    <div>
                        <List>
                            <MyListItem key={getId()}>
                                <ListItemText primary={`App Name:
                                                       ... ${item.application_name}`}
                                    key={getId()}
                                    sx={{ml: -2, '& .MuiTypography-root':{
                                        fontWeight: '600'}}}/>
                            </MyListItem>
                        </List>
                        <List key={getId()}>
                            <MyListItem key={getId()} sx={{mt: -1.5}}>
                                <ListItemText primary={`•  App Port:
                                                       ... ${item.application_port}`}
                                key={getId()}/>
                            </MyListItem>
                            <MyListItem key={getId()}>
                                <ListItemText primary={`•  App Url:
                                                       ... ${item.application_url}`}
                                key={getId()}/>
                            </MyListItem>
                            <MyListItem key={getId()}>
                                <ListItemText primary={`•  Version No.:
                                                       ...${item.version_num}`}
                                key={getId()}/>
                            </MyListItem>
                            <List key={getId()} sx={{pt:0}}>
                                <MyListItem sx={{mb:-2}}>
                                    <ListItemText primary={`•  Languages used: ...`}
                                    key={getId()}/>
                                </MyListItem>
                                <span className="hide">{
                                    filteredLanguages = Helpers.languageFilter(
                                        language, item.application_name)}</span>
                                    {filteredLanguages.map(item => (
                                        <ListItem key={getId()}
                                                  sx={{ml: 2, pl: 2, mb:0, pb:0,
                                                        mt:-0.5, pt: 0}}>
                                            <ListItemText primary={item}
                                                          key={getId()}
                                                          sx={{color: 'rgba(0, 0, 0, 1)',
                                                                '& .MuiTypography-root':
                                                             {fontWeight: '350',
                                                              fontSize: '90%'}}}
                                                          inset/>
                                        </ListItem>
                                    ))}
                            </List>
                        </List>
                    </div>
                ))}
            </MyBox>
    </div>
  );
}

export default App;