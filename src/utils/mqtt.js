import mqtt from "mqtt";
import Connector from "./connector";

class MQTT extends Connector {
  constructor(mqttHost = "localhost", mqttPort = 1883) {
    super(mqttHost, mqttPort);
    this.client = mqtt.connect(`mqtt://${mqttHost}:${mqttPort}`);
  }

  publish(topic, message) {
    if (this.client.connected()) {
      this.client.publish(topic, message);
    }
  }

  subscribe() {}
}

export default MQTT;
