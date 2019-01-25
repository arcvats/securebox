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

  async getConfig(config) {
    try {
      const response = await this.axios.post("/api/config", { config });
      return response;
    } catch (err) {
      throw err;
    }
  }
}

export default Requests;
