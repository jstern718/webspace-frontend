"Use strict;"

import React, {useState, useEffect} from 'react';
// import './App.css';
// import { BrowserRouter} from "react-router-dom";
// import RouteList from './RouteList';
import WebspaceApi from './api';
// import axios from "axios";


function App() {

    console.log("app runs");

    const [vals, setVals] = useState([]);
    const [server, setServer] = useState([]);
    const [resource, setResource] = useState([]);

    useEffect(()=> {
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
        WebspaceApi.getCustomers("adamapple", setVals);

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



  }, []);


  console.log("resource", resource);



//   const url = 'http://localhost:3001/api/customers';

//   async function callApi(url){
//     console.log("call Api runs");
//     const response = await axios.get(url);
//     response.then(console.log("response", response));
//   }

//   callApi(url);



  return (
    <div>
        <h3>Customer</h3>
        <ul>
        {vals.data && Object.entries(vals.data).map(([key, value], index) => (
          <li key={index}>
            <b>{key}:</b> {value}
          </li>
        ))}
        </ul>
        <hr />
        <h3>Servers</h3>
        <ul>
        {server.data && Object.entries(server.data).map(([key, value], index) => (
          <li key={index}>
            <b>{key}:</b> {value}
          </li>
        ))}
        </ul>
        <hr />
        <h3>Resources</h3>
        <ul>
            {resource.map(x=><li>{x.name}</li>)}
            {/* {Array.isArray(resource) && resource.map((item, index) => (
                <li key={index}>
                    <b>ID:</b> {item} <b>name:</b> {item.name}
                </li>
            ))} */}
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