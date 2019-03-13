/**
 * @file Main SecureBox Class
 * @author Archit <archit5793@gmail.com>
 */
import _ from "underscore";
// import Auth from "../utils/auth";
import Appmetrics from "../utils/appmetrics";
import config from "./config";

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
    } catch (err) {
      throw err;
    }
  }
}

export default SecureBox;
