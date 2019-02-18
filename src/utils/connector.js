import _ from "underscore";

let instance = null;
class Connector {
  constructor(host, port) {
    if (!instance) {
      instance = this;
    }
    this.host = host;
    this.port = port;
    this.client = null;
    return instance;
  }

  publish() {
    if (_.isNull(this.client)) {
      throw new Error("Unsupported publish");
    }
  }

  subscribe() {
    if (_.isNull(this.client)) {
      throw new Error("Unsupported subscribe");
    }
  }
}

export default Connector;
