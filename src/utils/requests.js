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

  sendStackTrace(data) {
    return this.axios.post("/stacktrace", data);
  }

  sendTimer(data) {
    return this.axios.post("/timer", data);
  }

  sendAudit(data) {
    return this.axios.post("/audit", data);
  }
}

export default Requests;
