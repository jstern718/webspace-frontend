"Use strict;"

import React, {useState, useEffect} from 'react';
import './App.css';
// import { BrowserRouter} from "react-router-dom";
// import RouteList from './RouteList';
import WebspaceApi from './api';
// import axios from "axios";

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
        <h3 className="subheader">Server Resources Used (combined total)</h3>
        <ul>
            {Array.isArray(resource) && resource.map((item, index) => (
                <li key={index}>
                    <b>{item.resource_name}:</b> <span className="dots">. . .</span>
                     {item.resource_amount} <br/>
                </li>
            ))}
        </ul>
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
        <hr />
        <h3 className="subheader">Applications</h3>
            {Array.isArray(application) && application.map((item, index) => (
                <ul key={index}>
                    <li className="close"> <span className="x-bold">App name: </span> <span className="dots"> . . . </span>
                     {item.application_name}</li>
                    <li className="close"> <span className="med-bold">App port: </span> <span className="dots"> . . . </span>
                     {item.application_port}</li>
                    <li className="close"> <span className="med-bold">App url: </span> <span className="dots"> . . . </span>
                     {item.application_url}</li>
                    <li className="close"> <span className="med-bold">Version No.: </span> <span className="dots"> . . . </span>
                     {item.version_num}</li>
                     <li className="close"> <span className="med-bold">Languages used: </span> <span className="dots"></span></li>
                     {Array.isArray(langObjS[item.application_name]) &&
                      langObjS[item.application_name].map((x, index) => <li key={index}><span>. . .</span> {x}</li>)}
                </ul>
            ))}
        <hr/>

    </div>
  );
}

export default App;