/**
 * @file Main SecureBox Class
 * @author Archit <archit5793@gmail.com>
 */
import _ from "underscore";
// import Auth from "../utils/auth";
import Appmetrics from "../utils/appmetrics";
import config from "./config";
import tracer from "../utils/tracer";
import Requests from "../utils/requests";
import auditor from "../utils/auditor";

const DEFAULT_OPTIONS = {
  auth: true,
  connectorConfig: {}
};
/**
 * @class SecureBox
 * @classdesc Facade interface to provide configuration and monitoring function
 * @example const securebox = new SecureBox(token, connectionString)
 */
class SecureBox {
  constructor(token, connection, options = {}) {
    try {
      if (_.isUndefined(token) || _.isUndefined(connection)) {
        throw new Error("Missing Arguments");
      } else if (!_.isString(token) || !_.isString(connection)) {
        throw new Error("Invalid Arguments");
      } else {
        this.token = token;
        this.connection = connection;
        this.options = _.extend(DEFAULT_OPTIONS, options);
        // this.requests = new Requests(token, connection);
      }
    } catch (err) {
      throw err;
    }
  }

  dashboardMonitoring() {
    try {
      // if (Auth.connectAndVerify(this)) {
      //   // TODO: check for auth
      // }
      const monitors = new Appmetrics(config, this.options.connectorConfig);
      monitors.init();
      auditor();
    } catch (err) {
      throw err;
    }
  }

  static stackTrace() {
    new Requests("abcd", "http://localhost:9000")
      .sendStackTrace(tracer.stackTrace())
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  static startTimer() {
    tracer.startTimer();
  }

  static endTimer() {
    new Requests("abcd", "http://localhost:9000")
      .sendTimer(tracer.endTimer())
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  }
}

export default SecureBox;
