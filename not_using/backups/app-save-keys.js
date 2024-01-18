"Use strict;"

import React, {useState, useEffect} from 'react';
import './App.css';
import WebspaceApi from '../../src/api';
import { v4 as uuidv4 } from 'uuid';

import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Typography from '@mui/material/Typography';

//import components
import Users from '../../src/components/UsersPage';
import Servers from '../../src/components/ServersPage';
import Technologies from '../../src/components/TechnologiesPage';
import Applications from '../../src/components/ApplicationsPage';


// import { BrowserRouter} from "react-router-dom";
// import RouteList from './RouteList';

function App() {

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

    useEffect(()=> {
        console.log("useEffect runs")
        WebspaceApi.getCustomers("adamapple", setCustomer);
        WebspaceApi.getServers("adamapple", setServer);
        WebspaceApi.getResources("adamapple", setResource);
        WebspaceApi.getTechnologies("adamapple", setTechnology);
        WebspaceApi.getApplications("adamapple", setApplication);
        WebspaceApi.getLanguages(setLanguage);
        WebspaceApi.getServerTypes(setServerTypes);
        WebspaceApi.getResourceTypes(setResourceTypes);
        WebspaceApi.getSoftwareTechnologies(setSoftwareTechnologies);

        /** Functions for retrieving language data to add to applications
        section. Data must be in state to be displayed on page*/

        let languageObj = {};
        function fillLang(){
            for (let i=0; i<language.length; i++){
                if (languageObj[language[i].application_name]){
                    languageObj[language[i].application_name].push(language[i].language_name);
                }
                else{
                    languageObj[language[i].application_name] = [language[i].language_name]
                }
            }
        }

        fillLang();
        setLangObjS(languageObj);

        const listOfLists = [serverTypes, resourceTypes, softwareTechnologies];
        setMultiList(listOfLists);
    }, []);


   /** price functions placed in useEffect require dependencies which then cause
   endless loading and extremely slow runtimes.
   TODO: Doesn't work yet */

    useEffect((mutliList)=> {
        console.log("multiList", multiList)

         /** Functions for retrieving price data to add to applications
        section. Data must be in state to be displayed on page*/
        let priceObj = {};
        function fillPrice(multiList){
            for (let list of multiList){
                for (let i=0; i<list.length; i++){
                    if (priceObj[list[i].application_name]){
                        priceObj[list[i].application_name].push(list[i].language_name);
                    }
                    else{
                        priceObj[list[i].application_name] = [list[i].language_name];
                    }
                }
            }
        }
        fillPrice([serverTypes, resourceTypes, softwareTechnologies]);
        setPriceObjS(priceObj);
        console.log("priceObjS", priceObjS);

    }, []);


    const getUuid = () => {
        return uuidv4()
    }

  return (
    <div>
        <Box key={`abox1`} sx={{border: 1, borderColor: 'lightgray',
                  borderRadius: 1, m: 1, p: 1}}>
            <Typography key={`aboxtype`}variant="h5" gutterBottom sx={{mb:0, pb:0}}>
                User Information
            </Typography>
            <List sx={{ mb: 0, pb: .5}}>
                <ListItem key={`a1`} sx={{ ml: 0, mt: 0, mb:0, pb: 0}}>
                    <ListItemText
                        key={`a2text`}
                        primary={`User: ... ${customer.name}`}
                        sx={{color: 'rgba(0, 0, 0, 1)', '& .MuiTypography-root':
                        {fontWeight: '600'}}} inset/>
                </ListItem>
                <ListItem key={`a2`} sx={{ ml: 1, pl: 1, mb:0, pb:0}}>
                    <ListItemText
                        key={`a2text`}
                        primary={`•  Company: ... ${customer.customer_company}`}
                        sx={{color: 'rgba(0, 0, 0, 1)', '& .MuiTypography-root':
                            {fontWeight: '400'}}} inset/>
                </ListItem>
                <ListItem key={`a3`} sx={{ ml: 1, pl: 1, mb:0, pb:0, mt:0, pt: 0}}>
                    <ListItemText
                        key={`a3text`}
                        primary={`•  User Role: ... ${customer.customer_identity}`}
                        sx={{color: 'rgba(0, 0, 0, 1)', '& .MuiTypography-root':
                            {fontWeight: '400'}}} inset/>
                </ListItem>
                <ListItem key={`a4`}
                            sx={{ ml: 1, pl: 1, mb:0, pb:0, mt:0, pt: 0,
                                whiteSpace: "pre-wrap" }}>
                    <ListItemText
                        key={`a4text`}
                        primary={`•  Address: ...
        ${customer.address_num} ${customer.address_street} ${customer.address_road_type}
        Suite ${customer.address_suite}
        ${customer.address_city}, ${customer.address_state} ${customer.address_zip}`}
                            sx={{color: 'rgba(0, 0, 0, 1)',
                            '& .MuiTypography-root': {fontWeight: '400'}}}
                            inset/>
                </ListItem>
                <ListItem key={`a5`} sx={{ ml: 1, pl: 1, mb:0, pb:0}}>
                    <ListItemText
                        key={`a5text`}
                        primary={`•  Tel.: ... ${customer.phone}`}
                        sx={{color: 'rgba(0, 0, 0, 1)', '& .MuiTypography-root':
                            {fontWeight: '400'}}} inset/>
                </ListItem>
                <ListItem key={`a6`} sx={{ ml: 1, pl: 1, mb:0, pb:0}}>
                    <ListItemText
                        key={`a6text`}
                        primary={`•  Password: ... ${customer.password}`}
                        sx={{color: 'rgba(0, 0, 0, 1)', '& .MuiTypography-root':
                            {fontWeight: '400'}}} inset/>
                </ListItem>
                <ListItem key={`a7`} sx={{ ml: 1, pl: 1, mb:0, pb:0}}>
                    <ListItemText
                        key={`a7text`}
                        primary={`•  Email: ... ${customer.email}`}
                        sx={{color: 'rgba(0, 0, 0, 1)', '& .MuiTypography-root':
                        {fontWeight: '400'}}} inset/>
                </ListItem>
            </List>
        </Box>

        <Box key={`bbox2`} sx={{border: 1, borderColor: 'lightgray', borderRadius: 1, m: 1, p: 1}}>
            <Typography key={`bboxtype`} variant="h5" gutterBottom>
                Server Resources Used (combined total)
            </Typography>
            <List>
                {Array.isArray(resource) && resource.map((item, index) => (
                    <ListItem key={`b${index}`} sx={{ m: 0, p: 0}}>
                        <ListItemText
                            key={`b${index}text`}
                            primary={`${item.resource_name}: ...
                                             ${item.resource_amount}`}
                                            sx={{color: 'rgba(0, 0, 0, 1)'}}
                                            inset/>
                    </ListItem>
                ))}
            </List>
        </Box>

        <Box key={`cbox3`} sx={{border: 1, borderColor: 'lightgray', borderRadius: 1, m: 1, p: 1}} >
            <Typography key={`cboxtype`} variant="h5" gutterBottom sx={{mb:0, pb:0}} >
                Individual Servers
            </Typography>
            <List key={`clist`}>
            {Array.isArray(server) && server.map((item, index) => (
                <ListItem key={`c${index}`}>
                    <ListItemText
                        key={`c${index}text`}
                        primary={`•  Id #${item.id} ... Server Name: ... ${item.server_name}`}/>
                </ListItem>
                ))}
            </List>

        </Box>

        <Box key={`dbox4`} sx={{border: 1, borderColor: 'lightgray', borderRadius: 1, m: 1, p: 1}} >
            <Typography key={`dboxtype`} variant="h5" gutterBottom sx={{mb:0, pb:0}} >
                Technologies Used
            </Typography>
            <List key={`dlist`}>
                {Array.isArray(technology) && technology.map((item, index) => (
                    <ListItem key={`dlist${index}item`}>
                        <ListItemText
                            key={`dlist${index}text`}
                            primary={`Id No. ${index}${item.id}: ... Technology: ... ${item.technology_name}`}/>
                    </ListItem>
                ))}
            </List>
        </Box>

        <Box key={`ebox5`} sx={{border: 1, borderColor: 'lightgray', borderRadius: 1, m: 1, p: 1}}>
                <Typography key = {`ebox5type`} variant="h5" gutterBottom sx={{mb:0, pb:0}}>
                     Applications
                </Typography>
                {Array.isArray(application) && application.map((item, index) => (
                    <div>
                        <List>
                            <ListItem key={`e${index}a1`} sx={{ ml: 1, mt: 0, mb:0, pb: 0}}>
                                <ListItemText primary={`App Name: ... ${item.application_name}`}
                                    key={`e${index}a1text`}
                                    sx={{color: 'rgba(0, 0, 0, 1)', '& .MuiTypography-root':
                                    {fontWeight: '600'}}} inset/>
                            </ListItem>
                        </List>
                        <List key={`e${index}b`}>
                            <ListItem key={`e${index}b2`} sx={{ ml: 2, pl: 2, mb:0, pb:0, mt: -1.5, pt: 0}}>
                                <ListItemText primary={`•  App Port: ... ${item.application_port}`}
                                key={`e${index}b2text`}
                                sx={{color: 'rgba(0, 0, 0, 1)', '& .MuiTypography-root':
                                {fontWeight: '400'}}} inset/>
                            </ListItem>
                            <ListItem key={`e${index}b3`} sx={{ ml: 2, pl: 2, mb:0, pb:0, mt:0, pt: 0}}>
                                <ListItemText primary={`•  App Url: ... ${item.application_url}`}
                                key={`e${index}b3text`}
                                sx={{color: 'rgba(0, 0, 0, 1)', '& .MuiTypography-root':
                                {fontWeight: '400'}}} inset/>
                            </ListItem>
                            <ListItem key={`e${index}b4`} sx={{ ml: 2, pl: 2, mb:0, pb:0, mt:0, pt: 0}}>
                                <ListItemText primary={`•  Version No.: ... ${item.version_num}`}
                                key={`e${index}b4text`}
                                sx={{color: 'rgba(0, 0, 0, 1)', '& .MuiTypography-root':
                                {fontWeight: '400'}}} inset/>
                            </ListItem>
                            <List key={`e${index}b5`} sx={{ mt: .5, ml: 2, pl: 2, mb:0, pb:0, pt: 0}}>
                                    <ListItemText primary={`•  Languages used: ...`}
                                    key={`e${index}b5text`}
                                    sx={{fontWeight: '400', mb: .5}} inset/>
                                {Array.isArray(langObjS[item.application_name]) &&
                                    langObjS[item.application_name].map((language, index2) => (
                                <ListItem key={`e${index}bb5${index2}`} sx={{ml: 2, pl: 2, mb:0, pb:0, mt:0, pt: 0}}>
                                        <ListItemText primary={`- ${language}`}
                                            key={`e${index}b5${index2}text`}
                                            sx={{color: 'rgba(0, 0, 0, 1)', '& .MuiTypography-root':
                                            {fontWeight: '300'}}} inset/>
                                </ListItem>
                                    ))}
                            </List>
                        </List>
                    </div>
                ))}
            </Box>
    </div>
  );
}

export default App;