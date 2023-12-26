import axios from "axios";

const BASE_URL = "http://localhost:3001";

/** API Class.
 *
 * Class of methods to retrieve data from API.
 *
 */

class WebspaceApi {

  static async request(endpoint, data = {}, method = "get") {
    console.debug("API Call:", endpoint, data, method);

    const url = `${BASE_URL}/${endpoint}`;
    const params = (method === "get")
      ? data
      : {};

    try {
      return (await axios({ url, method, data, params })).data;
    } catch (err) {
      console.error("API Error:", err.response);
      let message = err.response.data.error.message;
      throw Array.isArray(message) ? message : [message];
    }
  }

  // Individual API routes

  /** Get details on server*/

  static async getServer(customer) {
    let res = await this.request(`companies/${handle}`);
    return res.company;
  }

  /** Get details on a job by Id. */

  static async getJob(id) {
    let res = await this.request(`jobs/${id}`);
    // console.log(res);
    return res.job;
  }

  /** Get list of companies with search term*/

  static async getCompanies(data) {
    let res = await this.request("companies", data);
    return res.companies;
  }

  /** Get list of jobs with search term */

  static async getJobs(data) {
    let res = await this.request("jobs", data);
    console.log(res);
    return res.jobs;
  }

  /** Send { username, password } to api and retrieve token */

  static async login(data) {
    let res = await this.request("auth/token", data, "post");
    return res.token;
  }

  /** Send { username, password, firstName, lastName,
   * email } to api and retrieve token */

  static async signUp(data) {
    let res = await this.request("auth/register", data, "post");
    return res.token;
  }

  /** Send username and get user information */
  static async getUser(username) {
    let res = await this.request(`users/${username}`);
    return res.user;
  }
//hint endpoint is /user/username so update user needs to recieve username
//current user has access
  /** Send { username, password, firstName, lastName, email }
   *  to api and retrieve user */
  static async updateUser(username, data) {
    let res = await this.request(`users/${username}`, data, "patch");
    return res.user;
  }

}

export default WebspaceApi;