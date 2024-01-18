"Use strict;"

import React, {useState, useEffect} from 'react';
import './App.css';
import WebspaceApi from '../../src/api';

import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Typography from '@mui/material/Typography';




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

    useEffect((resource, multiList)=> {
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


  return (
    <div>
        <h3 className="subheader">Customer</h3>
            {Array.isArray(customer) && customer.map((item, index) => (
                <ul key={index}>
                    <li> <b>User: <span className="dots"> . . . </span> </b>
                     {item.name}</li>
                    <li> <b>Company: <span className="dots"> . . . </span> </b>
                     {item.customer_company}</li>
                    <li> <b>User Role: <span className="dots"> . . . </span> </b>
                     {item.customer_identity}</li>
                    <li> <b>Address: </b> <br/><span className="address">
                      {item.address_num}<span> </span>
                      {item.address_street} {item.address_road_type}</span><br/>
                      <span className="address">Suite {item.address_suite}</span><br/>
                      <span className="address">{item.address_city}, {item.address_state}<span> </span>
                      {item.address_zip}</span></li>
                     <li><b>Tel.: <span className="dots"> . . . </span> </b>
                      {item.phone} </li>
                     <li><b>Password: <span className="dots"> . . . </span> </b>
                      {item.password} </li>
                     <li><b>Email: <span className="dots"> . . . </span>
                      </b> {item.email} </li>
                </ul>
            ))}
        <hr />
        <Box sx={{border: 1, borderColor: 'lightgray', borderRadius: 1, m: 1, p: 1}}>
            <Typography variant="h5" gutterBottom>
                Server Resources Used (combined total)
            </Typography>
            <List>
                {Array.isArray(resource) && resource.map((item, index) => (
                    <ListItem key={index} sx={{ m: 0, p: 0}}>
                        <ListItemText primary={`${item.resource_name}: ...
                                             ${item.resource_amount}`}
                                            sx={{color: 'rgba(0, 0, 0, 1)'}}
                                            inset/>

                    </ListItem>
                ))}
            </List>
        </Box>

        <hr />
        <h3 className="subheader">Individual Servers</h3>
        <ul>
            {server && (
                <li>Id #{server.id} <span className="dots"> . . . </span>
                    <b>Server Name:</b>
                    <span className="dots"> . . . </span> {server.server_name}
                </li>
            )}

        </ul>
        <hr />
        <h3 className="subheader">Technologies Used</h3>
        <ul>
            {Array.isArray(technology) && technology.map((item, index) => (
                <li key={index}>
                    Id No. {item.id} <span className="dots"> . . . </span>
                    <b>Technology:</b> <span className="dots"> . . . </span>
                     {item.technology_name} <br/>
                </li>
            ))}
        </ul>

        <Box sx={{border: 1, borderColor: 'lightgray', borderRadius: 1, m: 1, p: 1}}>
            <Typography variant="h5" gutterBottom sx={{mb:0, pb:0}}>
            Technologies Used
            </Typography>
            <List>
                {Array.isArray(technology) && technology.map((item, index) => (
                    <ListItem>
                        <ListItemText key={`${index}`} primary={`Id No. ${index}${item.id}: ... Technology: ... ${item.technology_name}`}></ListItemText>
                    </ListItem>
                ))}
            </List>
        </Box>

        <Box sx={{border: 1, borderColor: 'lightgray', borderRadius: 1, m: 1, p: 1}}>
            <Typography variant="h5" gutterBottom sx={{mb:0, pb:0}}>
                Applications
            </Typography>
            {Array.isArray(application) && application.map((item, index) => (
            <div>
                <List key={`a${index}`} sx={{ mb: 0, pb: .5}}>
                    <ListItem key={`b1${index}`} sx={{ ml: 1, mt: 0, mb:0, pb: 0}}>
                        <ListItemText primary={`App Name: ... ${item.application_name}`}
                            sx={{color: 'rgba(0, 0, 0, 1)', '& .MuiTypography-root':
                            {fontWeight: '600'}}}/>
                    </ListItem>
                    <ListItem key={`b2${index}`} sx={{ ml: 2, pl: 2, mb:0, pb:0}}>
                        <ListItemText primary={`•  App Port: ... ${item.application_port}`}
                        sx={{color: 'rgba(0, 0, 0, 1)', '& .MuiTypography-root':
                        {fontWeight: '400'}}}/>
                    </ListItem>
                    <ListItem key={`b3${index}`} sx={{ ml: 2, pl: 2, mb:0, pb:0, mt:0, pt: 0}}>
                        <ListItemText primary={`•  App Url: ... ${item.application_url}`}
                        sx={{color: 'rgba(0, 0, 0, 1)', '& .MuiTypography-root':
                        {fontWeight: '400'}}}/>
                    </ListItem>
                    <ListItem key={`b4${index}`} sx={{ ml: 2, pl: 2, mb:0, pb:0, mt:0, pt: 0}}>
                        <ListItemText primary={`•  Version No.: ... ${item.version_num}`}
                        sx={{color: 'rgba(0, 0, 0, 1)', '& .MuiTypography-root':
                        {fontWeight: '400'}}}/>
                    </ListItem>
                    <List key={`c${index}`} sx={{ mt: .5, ml: 2, pl: 2, mb:0, pb:0, mt:0, pt: 0}}>
                        <Typography  sx={{fontWeight: '400', mb: .5,}}>
                            •  Languages used: ...
                        </Typography>
                        {Array.isArray(langObjS[item.application_name]) &&
                            langObjS[item.application_name].map((language, index) => (
                        <ListItem key={`d${index}`} sx={{ml: 2, pl: 2, mb:0, pb:0, mt:0, pt: 0}}>
                                <ListItemText primary={`- ${language}`}
                                    sx={{color: 'rgba(0, 0, 0, 1)', '& .MuiTypography-root':
                                    {fontWeight: '300'}}}/>
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