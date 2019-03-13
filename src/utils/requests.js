import axios from "axios";

class Requests {
  constructor(token, connection) {
    this.token = token;
    this.connection = connection;
    this.axios = axios.create({
      baseURL: connection,
      headers: { "X-Access-Token": token }
    });
  }
}

export default Requests;
