import _ from "underscore";
import Requests from "../utils/requests";

class Config {
  static loadConfig(config, token, connection) {
    const defaultConfig = {
      main: {
        cpu: true,
        eventloop: true,
        gc: false,
        environment: true,
        loop: false,
        memory: true,
        profiling: false
      },
      probe: {
        http: true,
        "http-outbound": false
      },
      requests: {
        request: false
      }
    };
    const request = new Requests(token, connection);
    if (_.isEmpty(config)) {
      return request.getConfig(defaultConfig);
    }
    return request.getConfig(config);
  }
}

export default Config;
