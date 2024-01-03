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

    useEffect((resource)=> {
        console.log("useEffect runs")
        // axios.get("http://localhost:3001/api/customers/adamapple")
        //     .then(response => {
        //     console.log("customer then runs");
        //     setVals(response.data);
        //     })
        //     .catch(error => {
        //         console.log("customer error runs");
        //         console.error(error);
        //     });

        WebspaceApi.getCustomers("adamapple", setCustomer);

        //axios({ url, method, data, params, headers })

        // axios({url: "http://localhost:3001/api/servers_used/adamapple",
        //     //    method: "get",
        //     //    params: {
        //     //     customer_name: "adamapple"
        //     //   }
        // }).then(serverResponse => {
        //         console.log("servers then runs");
        //         setServer(serverResponse.data);
        //     })
        //     .catch(error => {
        //         console.log("server error runs");
        //         console.error(error);
        //     });

        WebspaceApi.getServers("adamapple", setServer);
        WebspaceApi.getResources("adamapple", setResource);

        // console.log("effects resource", resource);

  }, []);


  console.log("outside effects resource", resource);
  console.log("outside effects customer", customer);

//   const url = 'http://localhost:3001/api/customers';

//   async function callApi(url){
//     console.log("call Api runs");
//     const response = await axios.get(url);
//     response.then(console.log("response", response));
//   }

//   callApi(url);

  return (
    <div>
        <h3 className="subheader">Customer</h3>
        <ul>
            {Array.isArray(customer) && customer.map(
                ([key, val], index) => (
                    <li key={index}>
                         <b>{key}:</b> ... {val}
                         <br/><br/>
                     </li>
                )
            )}
        </ul>
        <hr />
        <h3 className="subheader">Servers</h3>
        <ul>
            <li> <b>Server ID:</b> ... {server.id}</li>
            <br/>
            <li><b>Server Name:</b> ... {server.server_name}</li>
        </ul>
        <hr />
        <h3 className="subheader">Resources</h3>
        <ul>
            {Array.isArray(resource.data) && resource.data.map((item, index) => (
                <li key={index}>
                    <b>{item.resource_name}:</b> ... {item.resource_amount} <br/><br/>
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
