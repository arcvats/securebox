import _ from "underscore";
import Auth from "../utils/auth";

/**
 * @class SecureBox
 * @classdesc Facade interface to provide configuration and monitoring function
 * @example const securebox = new SecureBox(token, connectionString)
 */
class SecureBox {
  constructor(token, connection) {
    try {
      if (_.isUndefined(token) || _.isUndefined(connection)) {
        throw new Error("Missing Arguments");
      } else if (!_.isString(token) || !_.isString(connection)) {
        throw new Error("Invalid Arguments");
      } else {
        this.token = token;
        this.connection = connection;
      }
    } catch (err) {
      throw err;
    }
  }

  dashboardMonitoring() {
    try {
      const config = Auth.connectAndVerify(this);
    } catch (err) {
      throw err;
    }
  }

  static consoleMonitoring(config) {}
}

export default SecureBox;
