import mqtt from "mqtt";
import _ from "underscore";

export default (appmetrics, params, host = "localhost", port = "1883") => {
  const mqttClient = mqtt.connect(`mqtt://${host}:${port}`, { clientId: "arc" });
  mqttClient.on("connect", () => {
    console.log("connected on mqtt");
    _.each(params, (param) => {
      appmetrics.on(param, (data) => {
        console.log(param, data);
        mqttClient.publish(param, JSON.stringify(data));
      });
    });
  });
};
