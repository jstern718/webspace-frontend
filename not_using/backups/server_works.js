"Use strict;"

import React, {useState, useEffect, useRef} from 'react';
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
// import Servers from './components/ServersPage';
import {MyBox, MyListItem, MyType} from '../../src/style';
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
    const [serverPriceObj, setServerPriceObj] = useState([]);
    const [serverPrice, setServerPrice] = useState([]);
    const [resourcePrice, setResourcePrice] = useState({});
    const [technologyPrice, setTechnologyPrice] = useState({});
    // const [multiList, setMultiList] = useState({});

/** Use Effect to make sure api calls only take place once on load */

    // useEffect(()=> {
    //     // console.log("Language useEffect runs");

    //     /** Functions for retrieving language data to add to applications
    //     section. Data must be in state to be displayed on page*/

    //     WebspaceApi.getLanguages(setLanguage);

    //     let languageObj = {};

    //     Helpers.makeLanguageObj(languageObj, language);
    //     setLangObjS(languageObj);


    // }, []);


    // useEffect(()=> {
    //     console.log("serverTypes useEffect runs");
    //     WebspaceApi.getServers("adamapple", setServer);

    //     // let serverPriceObj = {};
    //     // Helpers.makePriceObj(serverPriceObj, serverTypes);




    // }, [server]);

    // useRef(()=> {
    //     console.log("serverTypes useEffect runs");



    //     // let serverPriceObj = {};
    //     // Helpers.makePriceObj(serverPriceObj, serverTypes);

    // }, []);

    useEffect(()=> {
        console.log("chaning useEffect runs");
        WebspaceApi.getCustomers("adamapple", setCustomer);
        WebspaceApi.getServerTypes(setServerTypes);
        WebspaceApi.getResources("adamapple", setResource);
        WebspaceApi.getTechnologies("adamapple", setTechnology);
        WebspaceApi.getApplications("adamapple", setApplication);
        WebspaceApi.getServers("adamapple", setServer);
        WebspaceApi.getLanguages(setLanguage);







    }, []);


   /** price functions placed in useEffect require dependencies which then cause
   endless loading and extremely slow runtimes.
   TODO: Doesn't work yet */

    useEffect(()=> {


         /** Functions for retrieving price data to add to applications
        section. Data must be in state to be displayed on page*/



        // function fillPrice(multiList){
        //     for (let list of multiList){
        //         for (let i=0; i<list.length; i++){
        //             if (priceObj[list[i].application_name]){
        //                 priceObj[list[i].application_name].push(list[i].language_name);
        //             }
        //             else{
        //                 priceObj[list[i].application_name] = [list[i].language_name];
        //             }
        //         }
        //     }
        // }

        // console.log("priceObjS", priceObjS);

    }, []);


    const getId = () => {
        return uuidv4()
    }

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
                                <MyListItem>
                                    <ListItemText primary={`•  ${language}Languages used: ...`}
                                    key={getId()}/>
                                </MyListItem>
                                {Array.isArray(language) &&
                                    language.filter((x) => (
                                        x === true
                                        ? <ListItem key={getId()} sx={{ml: 2, pl: 2, mb:0, pb:0, mt:0, pt: 0}}>
                                             <ListItemText primary={`- ${x}`}
                                             key={getId()}
                                             sx={{color: 'rgba(0, 0, 0, 1)', '& .MuiTypography-root':
                                             {fontWeight: '300'}}} inset/>
                                        </ListItem>
                                        :null))
                                }
                            </List>
                        </List>
                    </div>
                ))}
            </MyBox>
    </div>
  );
}

export default App;

// {Array.isArray(langObjS[item.application_name]) &&
//     langObjS[item.application_name].map((lang, index2) => (
// <ListItem key={getId()} sx={{ml: 2, pl: 2, mb:0, pb:0, mt:0, pt: 0}}>
//         <ListItemText primary={`- ${lang}`}
//             key={getId()}
//             sx={{color: 'rgba(0, 0, 0, 1)', '& .MuiTypography-root':
//             {fontWeight: '300'}}} inset/>
// </ListItem>



// lang["application_name"] === item.application_name
//                                         ? <ListItem key={getId()} sx={{ml: 2, pl: 2, mb:0, pb:0, mt:0, pt: 0}}>
//                                              <ListItemText primary={`- ${lang.application_name}`}
//                                              key={getId()}
//                                              sx={{color: 'rgba(0, 0, 0, 1)', '& .MuiTypography-root':
//                                              {fontWeight: '300'}}} inset/>
//                                         </ListItem>