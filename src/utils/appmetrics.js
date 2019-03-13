import appmetrics from "appmetrics";
import _ from "underscore";
import mqttHelper from "./mqtt";

class Appmetrics {
  constructor(config, connectorConfig = {}) {
    this.appmetrics = appmetrics.monitor();
    this.config = config;
    this.connectorConfig = connectorConfig;
  }

  init() {
    this.env();
    this.generics();
  }

  env() {
    this.appmetrics.on("initialized", () => {
      // const env = this.appmetrics.getEnvironment();
      if (this.config.main.environment) {
        // TODO: send env
      }
    });
  }

  generics() {
    const params = _.keys(
      _.omit(
        _.extend({}, this.config.main, this.config.probe, this.config.requests),
        (val, key) => !val || key === "environment"
      )
    );
    if (this.connectorConfig.type === "mqtt") {
      mqttHelper(this.appmetrics, params, this.connectorConfig.host, this.connectorConfig.port);
    }
  }

  close() {
    this.appmetrics.stop();
    this.connector.end();
  }
}

export default Appmetrics;
