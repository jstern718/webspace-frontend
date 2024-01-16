import axios from "axios";
// import  from "./App"

/** API Class.
 *
 * Class of methods to retrieve data from API.
 *
 */

class WebspaceApi {

/** Individual API routes w/ 2 params */

  static async getCustomers(nombre, setCustomer){
    axios.get(`http://localhost:3001/api/${nombre}/customers` )
        .then(response => {
            // console.log("customer runs");
            // console.log("api customer response.data.data", response.data.data)
            setCustomer(response.data.data[0]);
        }).catch(error => {
        console.log("customer error runs");
        console.error(error);
        });
  }

  static async getServers(nombre, setServer){
    axios.get(`http://localhost:3001/api/${nombre}/servers_used`)
        .then(response => {
            // console.log("server runs");
            console.log("api server response.data.data", response);
            setServer(response.data.data);
        }).catch(error => {
        console.log("server error runs");
        console.error(error);
        });
  }

  static async getResources(nombre, setResource){
    axios.get(`http://localhost:3001/api/${nombre}/resources_used`).then(response => {
            // console.log("resource runs");
            console.log("resource response.data", response.data.data);
            setResource(response.data.data);
        }).catch(error => {
        console.log("resource error runs");
        console.error(error);
        });
  }

  static async getTechnologies(nombre, setTechnology){
    axios.get(`http://localhost:3001/api/${nombre}/technologies_used`).then(response => {
            // console.log("technology runs");
            console.log("technology response.data.data", response.data.data);
            setTechnology(response.data.data);
        }).catch(error => {
        console.log("technology error runs");
        console.error(error);
        });
  }

  static async getApplications(nombre, setApplication){
    axios.get(`http://localhost:3001/api/${nombre}/applications`).then(response => {
            // console.log("application runs");
            // console.log("application response", response.data.data);
            setApplication(response.data.data);
        }).catch(error => {
            console.log("application error runs");
            console.error(error);
            });
    }

/** Individual API routes w/ 1 param */

  static async getLanguages(setLanguage){
    axios.get(`http://localhost:3001/api/languages_used`).then(response => {
            // console.log("Languages runs");
            console.log("Languages response", response.data.data);
            setLanguage(response.data.data);
        }).catch(error => {
        console.log("application error runs");
        console.error(error);
        });
  }

  static async getServerTypes(setServerTypes){
    axios.get(`http://localhost:3001/api/server_types`).then(response => {
            console.log("ServerTypes runs");
            console.log("ServerTypes response", response.data.data);
            setServerTypes(response.data.data);
        }).catch(error => {
        console.log("application error runs");
        console.error(error);
        });
  }

  static async getResourceTypes(setResourceTypes){
    axios.get(`http://localhost:3001/api/resource_types`).then(response => {
            console.log("ResourceTypes runs");
            console.log("ResourceTypes response", response.data.data);
            setResourceTypes(response.data.data);
        }).catch(error => {
        console.log("application error runs");
        console.error(error);
        })
  }

  static async getSoftwareTechnologies(setSoftwareTechnologies){
    axios.get(`http://localhost:3001/api/software_technologies`).then(response => {
            console.log("SoftwareTechnologies runs");
            console.log("SoftwareTechnologies response", response.data.data);
            setSoftwareTechnologies(response.data.data);
        }).catch(error => {
        console.log("application error runs");
        console.error(error);
        });
  }
}

export default WebspaceApi;