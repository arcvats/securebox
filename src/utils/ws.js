import Connector from "./connector";

class WS extends Connector {
  constructor(wsHost = "localhost", wsPort = 1883) {
    super(wsHost, wsPort);
    this.client = null; // mqtt.connect(`mqtt://${mqttHost}:${mqttPort}`);
  }

  publish(topic, message) {
    if (this.client.connected()) {
      this.client.publish(topic, message);
    }
  }

  subscribe() {}
}

export default WS;
