import MQTT from "./mqtt";

class ConnectorFactory {
  static getConnector(type, host, port) {
    switch (type) {
      case "mqtt":
        return new MQTT(host, port);
      case "ws":
        return new WS();
      case "kafka":
        return new Kafka();
      default:
        throw new Error("Type not supported");
    }
  }
}

export default ConnectorFactory;
