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

  static async getCustomers(nombre, setVals){
    axios.get(`http://localhost:3001/api/customers/${nombre}` )
        .then(response => {
            console.log("customer then runs");
            setVals(response.data);
        }).catch(error => {
        console.log("customer error runs");
        console.error(error);
        });
  }

  static async getServers(nombre, setServer){
    axios.get(`http://localhost:3001/api/servers_used/${nombre}`)
        .then(response => {
            console.log("server then runs");
            setServer(response);
        }).catch(error => {
        console.log("server error runs");
        console.error(error);
        });
  }

  static async getResources(nombre, setResource){
    axios({
        url: "http://localhost:3001/api/resources_used/adamapple",
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


//   /** Get details on a job by Id. */

//   static async getJob(id) {
//     let res = await this.request(`jobs/${id}`);
//     // console.log(res);
//     return res.job;
//   }

//   /** Get list of companies with search term*/

//   static async getCompanies(data) {
//     let res = await this.request("companies", data);
//     return res.companies;
//   }

//   /** Get list of jobs with search term */

//   static async getJobs(data) {
//     let res = await this.request("jobs", data);
//     console.log(res);
//     return res.jobs;
//   }

//   /** Send { username, password } to api and retrieve token */

//   static async login(data) {
//     let res = await this.request("auth/token", data, "post");
//     return res.token;
//   }

//   /** Send { username, password, firstName, lastName,
//    * email } to api and retrieve token */

//   static async signUp(data) {
//     let res = await this.request("auth/register", data, "post");
//     return res.token;
//   }

//   /** Send username and get user information */
//   static async getUser(username) {
//     let res = await this.request(`users/${username}`);
//     return res.user;
//   }
// //hint endpoint is /user/username so update user needs to recieve username
// //current user has access
//   /** Send { username, password, firstName, lastName, email }
//    *  to api and retrieve user */
//   static async updateUser(username, data) {
//     let res = await this.request(`users/${username}`, data, "patch");
//     return res.user;
//   }

}

export default WebspaceApi;