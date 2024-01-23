import axios from "axios";
// import  from "./App"

/** API Class.
 *
 * Class of methods to retrieve data from API.
 *
 */

class WebspaceApi {

  static token = null;

  /** Login */

  //Send { username, password } to api and retrieve token
  static async login(username, password) {
    console.log("api login");
      console.log("username", username);
      console.log("password", password);

    let res = await axios.post(`http://localhost:3001/login`, {
        name: username,
        password: password
    });

    if (res){
        let newToken = res.data.data;
        // console.log("api login newToken", newToken);
        return newToken;
    }

    throw new Error("Invalid user/password");

  }

  static async register(username, password) {
    console.log("api register");
    // console.log("username", username);
    // console.log("password", password);
    let res = await axios.post(`http://localhost:3001/register`, {
        name: username,
        password: password
    });
    let token = res.data.token;
    console.log("api register token", token);
    return token;
  }

  static async getUsername(username) {
    console.log("api register");
    // console.log("username", username);
    // console.log("password", password);
    let res = await axios.get(`http://localhost:3001/api/${username}/users`);
    let token = res.data;
    return token;
  }

  /** Individual API routes w/ 2 params */

  static async getUser(nombre, setUser){
    axios.get(`http://localhost:3001/api/${nombre}/customers`)
        .then(response => {
            // console.log("api user/customer response.data.data", response.data.data[0])
            setUser(response.data.data[0]);
        }).catch(error => {
        console.log("user error runs");
        console.error(error);
        });
  }

  static async getServers(nombre, setServers){
    axios.get(`http://localhost:3001/api/${nombre}/servers_used`)
        .then(response => {
            // console.log("api servers response.data.data", response);
            setServers(response.data.data);
        }).catch(error => {
        console.log("server error runs");
        console.error(error);
        });
  }

  static async getResources(nombre, setResources){
    axios.get(`http://localhost:3001/api/${nombre}/resources_used`).then(response => {
            // console.log("api resources response.data", response.data.data);
            setResources(response.data.data);
        }).catch(error => {
        console.log("resource error runs");
        console.error(error);
        });
  }

  static async getTechnologies(nombre, setTechnologies){
    axios.get(`http://localhost:3001/api/${nombre}/technologies_used`).then(response => {
            // console.log("api technologies response.data.data", response.data.data);
            setTechnologies(response.data.data);
        }).catch(error => {
        console.log("technology error runs");
        console.error(error);
        });
  }

  static async getApplications(nombre, setApplications){
    axios.get(`http://localhost:3001/api/${nombre}/applications`).then(response => {
            // console.log("api applications response", response.data.data);
            setApplications(response.data.data);
        }).catch(error => {
            console.log("application error runs");
            console.error(error);
            });
    }

/** Individual API routes w/ 1 param */

  static async getLanguages(setLanguages){
    axios.get(`http://localhost:3001/api/languages_used`).then(response => {
            // console.log("api languages response", response.data.data);
            setLanguages(response.data.data);
        }).catch(error => {
        console.log("application error runs");
        console.error(error);
        });
  }

  static async getServerTypes(setServerTypes){
    axios.get(`http://localhost:3001/api/server_types`).then(response => {
            // console.log("api serverTypes response", response.data.data);
            setServerTypes(response.data.data);
        }).catch(error => {
        console.log("application error runs");
        console.error(error);
        });
  }

  static async getResourceTypes(setResourceTypes){
    axios.get(`http://localhost:3001/api/resource_types`).then(response => {
            // console.log("api resourceTypes response", response.data.data);
            setResourceTypes(response.data.data);
        }).catch(error => {
        console.log("application error runs");
        console.error(error);
        })
  }

  static async getSoftwareTechnologies(setSoftwareTechnologies){
    axios.get(`http://localhost:3001/api/software_technologies`).then(response => {
            // console.log("api softwareTechnologies response", response.data.data);
            setSoftwareTechnologies(response.data.data);
        }).catch(error => {
        console.log("application error runs");
        console.error(error);
        });
  }
}

export default WebspaceApi;



  // static async login(username, password) {
    //     console.log("api login function")
    //     axios.get("http://localhost:3001/auth", {username, password})
    //     .then((response) => {
    //         console.log("post response", response);
    //     });
    // };
    // // try {
    // //   console.log("api try");
    //   return (await axios.post(`http://localhost:3001/api/${username}`,
    //                        "post",
    //                        {username, password}))
    // } catch (err) {
    //   console.log("api catch")
    //   console.error("API Error:", err.response);
    //   let message = err.response.data.error.message;
    //   throw Array.isArray(message) ? message : [message];
    // }
//   }