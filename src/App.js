"Use strict;"

import React, {useState, useEffect} from 'react';
import './App.css';
// import { BrowserRouter} from "react-router-dom";
// import RouteList from './RouteList';
import WebspaceApi from './api';
// import axios from "axios";


function App() {

    console.log("app runs");

    const [customer, setCustomer] = useState([]);
    const [server, setServer] = useState([]);
    const [resource, setResource] = useState([]);
    const [technology, setTechnology] = useState([]);
    const [application, setApplication] = useState([]);
    const [language, setLanguage] = useState([]);

    useEffect((resource)=> {
        console.log("useEffect runs")
        WebspaceApi.getCustomers("adamapple", setCustomer);
        WebspaceApi.getServers("adamapple", setServer);
        WebspaceApi.getResources("adamapple", setResource);
        WebspaceApi.getTechnologies("adamapple", setTechnology);
        WebspaceApi.getApplications("adamapple", setApplication);
        WebspaceApi.getLanguages("adamapple", setLanguage);
  }, []);

  return (
    <div>
        <h3 className="subheader">Customer</h3>
        <ul>
            {Array.isArray(customer) && customer.map(
                ([key, val], index) => (
                    <li key={index}>
                         <b>{key}:</b> ... {val}<br/><br/>
                    </li>
                )
            )}
        </ul>
        <hr />
        <h3 className="subheader">Server Resources</h3>
        <ul>
            {Array.isArray(resource.data) && resource.data.map((item, index) => (
                <li key={index}>
                    <b>{item.resource_name}:</b> ... {item.resource_amount} <br/><br/>
                </li>
            ))}
        </ul>
        <hr />
        <h3 className="subheader">Individual Servers</h3>
        <ul>
            <li>Id #{server.id} ... <b>Server Name:</b> ... {server.server_name}</li>
        </ul>
        <hr />
        <h3 className="subheader">Technologies Used</h3>
        <ul>
            {Array.isArray(technology) && technology.map((item, index) => (
                <li key={index}>
                    Id #{item.id} ... <b>Technology:</b> ... {item.technology_name} <br/><br/>
                </li>
            ))}
        </ul>
        <hr />
        <h3 className="subheader">Applications</h3>
        <ul>
            {Array.isArray(application) && application.map((item, index) => (
                <li key={index}>
                    <b>App name: ...</b> {item.application_name}<br/>
                    <b>App port: ...</b> {item.application_port}<br/>
                    <b>App url: ...</b> {item.application_url}<br/>
                    <b>Version #: ...</b> {item.version_num}<br/>
                </li>
            ))}
        </ul>
        <hr/>
        <h3 className="subheader">Languages</h3>
        <ul>
            {Array.isArray(language) && language.map((item, index) => (
                <li key={index}>
                    <b>App name: ...</b> {item.application_name}<br/>
                    <b>Language name: ...</b> {item.language_name}<br/><br/>
                </li>
            ))}
        </ul>
    </div>
  );
}

export default App;

/* <div>
<ul>
    {Array.isArray(response) && response.map((x, xIndex) => (
        <ul key={xIndex}>{Object.entries(x).map(
            (y, yIndex) => <li key={yIndex}><b>{y[0]}:</b> ... {y[1]}</li>
        )}</ul>
    ))}
</ul>
</div> */


/* <ul>
            {Array.isArray(resource) && Object.entries(resource).map((x, xIndex) =>
                <li key={xIndex}>{x}</li>
            )}
        </ul> */



        //
