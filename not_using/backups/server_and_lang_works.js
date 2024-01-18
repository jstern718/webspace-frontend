"Use strict;"

import React, {useState, useEffect} from 'react';
import './App.css';
import WebspaceApi from '../../src/api';
import { v4 as uuidv4 } from 'uuid';
import Helpers from '../../src/util';

// import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
// import Typography from '@mui/material/Typography';
// import { styled } from '@mui/system';

//import components
import Users from '../../src/components/UsersPage';
import {MyBox, MyListItem, MyType} from '../../src/style';
import { appBarClasses } from '@mui/material';
import { Visibility } from '@mui/icons-material';
// import Servers from './components/ServersPage';
// import Technologies from './components/TechnologiesPage';
// import Applications from './components/ApplicationsPage';

// import { BrowserRouter} from "react-router-dom";
// import RouteList from './RouteList';


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
    const [langObjS, setLangObjS] = useState([]);
    const [priceObjS, setPriceObjS] = useState([]);
    const [multiList, setMultiList] = useState([]);

/** Use Effect to make sure api calls only take place once on load */

    // useEffect(()=> {
    //     console.log("constant useEffect1 runs");

    //     WebspaceApi.getLanguages(setLanguage);
    //     let languageObj = {};

    //     Helpers.makeLanguageObj(languageObj, language);
    //     setLangObjS(languageObj);

    // }, [language]);


    useEffect((language=[], resourceTypes=[])=> {
        console.log("constant useEffect2 runs");

        WebspaceApi.getServerTypes(setServerTypes);
        WebspaceApi.getResourceTypes(setResourceTypes);
        WebspaceApi.getSoftwareTechnologies(setSoftwareTechnologies);
    }, []);

    useEffect((language=[], resourceTypes=[])=> {
        console.log("chaninguseEffect runs");
        WebspaceApi.getCustomers("adamapple", setCustomer);
        WebspaceApi.getServers("adamapple", setServer);
        WebspaceApi.getResources("adamapple", setResource);
        WebspaceApi.getTechnologies("adamapple", setTechnology);
        WebspaceApi.getApplications("adamapple", setApplication);
        WebspaceApi.getLanguages(setLanguage);


        /** Functions for retrieving language data to add to applications
        section. Data must be in state to be displayed on page*/



        const listOfLists = [serverTypes, resourceTypes, softwareTechnologies];
        setMultiList(listOfLists);
    }, []);


   /** price functions placed in useEffect require dependencies which then cause
   endless loading and extremely slow runtimes.
   TODO: Doesn't work yet */

    // useEffect((mutliList)=> {
    //     console.log("multiList", multiList)

    //      /** Functions for retrieving price data to add to applications
    //     section. Data must be in state to be displayed on page*/
    //     let priceObj = {};
    //     function fillPrice(multiList){
    //         for (let list of multiList){
    //             for (let i=0; i<list.length; i++){
    //                 if (priceObj[list[i].application_name]){
    //                     priceObj[list[i].application_name].push(list[i].language_name);
    //                 }
    //                 else{
    //                     priceObj[list[i].application_name] = [list[i].language_name];
    //                 }
    //             }
    //         }
    //     }
    //     fillPrice([serverTypes, resourceTypes, softwareTechnologies]);
    //     setPriceObjS(priceObj);
    //     console.log("priceObjS", priceObjS);

    // }, []);


    const getId = () => {
        return uuidv4()
    }

    // const ltest = [{application_name: "appd", language_name: "french"},
    //               {application_name: "appf", language_name: "spanish"}]
    // Helpers.filterFunction()

    let filteredList;

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
                                             ${item.resource_amount}`}/>
                    </MyListItem>
                ))}
            </List>
        </MyBox>

        <MyBox key={getId()}>
            <MyType key={getId()}>
                Individual Servers
            </MyType>
            <List key={getId()}>
            {Array.isArray(server) && server.map((item, index) => (
                <MyListItem key={getId()}>
                    <ListItemText
                        key={getId()}
                        primary={`•  Id Nº${item.id}:
        Server Name: ... ${item.server_name} ... ${serverTypes[item.id].price}`}
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
                                primary={`•  Id Nº${item.id}:
        Technology: ... ${item.technology_name}`}
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
                                <ListItemText primary={`App Name: ... ${item.application_name}`}
                                    key={getId()}
                                    sx={{ml: -2, '& .MuiTypography-root':{fontWeight: '600'}}}/>
                            </MyListItem>
                        </List>
                        <List key={getId()}>
                            <MyListItem key={getId()} sx={{mt: -1.5}}>
                                <ListItemText primary={`•  App Port: ... ${item.application_port}`}
                                key={getId()}/>
                            </MyListItem>
                            <MyListItem key={getId()}>
                                <ListItemText primary={`•  App Url: ... ${item.application_url}`}
                                key={getId()}/>
                            </MyListItem>
                            <MyListItem key={getId()}>
                                <ListItemText primary={`•  Version Nº: ... ${item.version_num}`}
                                key={getId()}/>
                            </MyListItem>
                            <List key={getId()} sx={{pt:0}}>
                                <MyListItem sx={{mb:-2}}>
                                    <ListItemText primary={`•  Languages used: ...`}
                                    key={getId()}/>
                                </MyListItem>
                                <span className="hide">{filteredList = Helpers.filterFunction(language, item.application_name)}</span>
                                    {filteredList.map(item => (
                                        <ListItem key={getId()} sx={{ml: 2, pl: 2, mb:0, pb:0, mt:-0.5, pt: 0}}>
                                            <ListItemText primary={item}
                                            key={getId()}
                                            sx={{color: 'rgba(0, 0, 0, 1)', '& .MuiTypography-root':
                                            {fontWeight: '350', fontSize: 'small'}}} inset/>
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