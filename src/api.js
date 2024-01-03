import axios from "axios";
// import setVals from "./App"

/** API Class.
 *
 * Class of methods to retrieve data from API.
 *
 */

class WebspaceApi {

  // Individual API routes

  static async getCustomers(nombre, setCustomer){
    axios.get(`http://localhost:3001/api/${nombre}/customers` )
        .then(response => {
            console.log("customer then runs");
            // console.log("api customer response.data.data[0]", Object.entries(response.data.data[0]))
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
            console.log("api server response.data.data[0]", response);
            setServer(response.data.data[0]);
        }).catch(error => {
        console.log("server error runs");
        console.error(error);
        });
  }

  static async getResources(nombre, setResource){
    axios.get(`http://localhost:3001/api/${nombre}/resources_used`).then(response => {
            console.log("resource then runs");
            setResource(response.data);
        }).catch(error => {
        console.log("resource error runs");
        console.error(error);
        });
  }

  static async getTechnologies(nombre, setTechnology){
    axios.get(`http://localhost:3001/api/${nombre}/technologies_used`).then(response => {
            console.log("technology then runs");
            console.log("technology response.data.data", response.data.data);
            setTechnology(response.data.data);
        }).catch(error => {
        console.log("technology error runs");
        console.error(error);
        });
  }

  static async getApplications(nombre, setApplication){
    axios.get(`http://localhost:3001/api/${nombre}/applications`).then(response => {
            console.log("application then runs");
            console.log("application response", response.data.data);
            setApplication(response.data.data);
        }).catch(error => {
        console.log("application error runs");
        console.error(error);
        });
  }

  static async getLanguages(nombre, setLanguage){
    axios.get(`http://localhost:3001/api/${nombre}/languages_used`).then(response => {
            console.log("language then runs");
            console.log("language response", response.data.data);
            setLanguage(response.data.data);
        }).catch(error => {
        console.log("application error runs");
        console.error(error);
        });
  }

}

export default WebspaceApi;