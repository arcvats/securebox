/**
 * @file Main SecureBox Class
 * @author Archit <archit5793@gmail.com>
 */
import _ from "underscore";
import Auth from "../utils/auth";
import Appmetrics from "../utils/appmetrics";

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
        this.options = options;
      }
    } catch (err) {
      throw err;
    }
  }

  dashboardMonitoring(cli = false) {
    try {
      const config = Auth.connectAndVerify(this);
      const monitors = new Appmetrics(config, cli);
      monitors.init();
    } catch (err) {
      throw err;
    }
  }

  static consoleMonitoring(config, cli = true) {
    const monitors = new Appmetrics(config, cli);
    monitors.init();
  }
}

export default SecureBox;
