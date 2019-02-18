import appmetrics from "appmetrics";
import _ from "underscore";
import { chalkifyAppmetrics } from "./chalkify";

class Appmetrics {
  constructor(config, cli) {
    this.appmetrics = appmetrics.monitor();
    this.config = config;
    this.cli = cli;
  }

  init() {
    this.env();
    this.generics();
  }

  env() {
    this.appmetrics.on("initialized", () => {
      const env = this.appmetrics.getEnvironment();
      if (this.config.main.environment && this.cli) {
        chalkifyAppmetrics.env(env);
      } else {
        console.log("Send to mqtt");
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
    _.each(params, (param) => {
      this.appmetrics.on(param, (data) => {
        if (this.cli) {
          chalkifyAppmetrics[param](data);
        }
      });
    });
  }

  close() {
    this.appmetrics.stop();
  }
}

export default Appmetrics;
