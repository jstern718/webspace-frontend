import axios from "axios";
// import setVals from "./App"

/** API Class.
 *
 * Class of methods to retrieve data from API.
 *
 */

class WebspaceApi {

//   static async request(endpoint, data = {}, method = "get") {
//     console.log("API Call:", endpoint, data, method);

//     const url = `http://localhost:3001/${endpoint}`;
//     const params = (method === "get")
//       ? data
//       : {};
//     console.log("api url", url);
//     console.log("api params", params);

//     try {
//       let apiTry = await axios({url, method, data, params });
//       console.log("apiTry", apiTry);
//       return apiTry;
//     } catch (err) {
//       console.error("API Error:", err.response);
//     //   let message = err.response.data.error.message;
//     //   throw Array.isArray(message) ? message : [message];
//     }
//   }

  // Individual API routes

  /** Get details on server*/

//   static async getTable(endpoint) {
//     console.log("getTable endpoint", endpoint);
//     let res = await this.request(endpoint);
//     console.log("getTable res", res);
//     return res;
//   }

//   static async getItem(path) {
//     let res = await this.request(path);
//     return res;
//   }

  static async getCustomers(nombre, setCustomer){
    axios.get(`http://localhost:3001/api/${nombre}/customers` )
        .then(response => {
            console.log("customer then runs");
            console.log("api customer response.data.data[0]", Object.entries(response.data.data[0]))
            setCustomer(Object.entries(response.data.data[0]));
        }).catch(error => {
        console.log("customer error runs");
        console.error(error);
        });
  }

  static async getServers(nombre, setServer){
    axios.get(`http://localhost:3001/api/${nombre}/servers_used`)
        .then(response => {
            console.log("server then runs");
            console.log("api server response.data.data[0]", response.data.data[0]);
            setServer(response.data.data[0]);
        }).catch(error => {
        console.log("server error runs");
        console.error(error);
        });
  }

  static async getResources(nombre, setResource){
    axios({
        url: "http://localhost:3001/api/adamapple/resources_used",
        method: "get"
        // params: {
        //     name: "adamapple"
        // }
    }).then(response => {
            console.log("resource then runs");
            setResource(response.data);
        }).catch(error => {
        console.log("resource error runs");
        console.error(error);
        });
  }

}

export default WebspaceApi;