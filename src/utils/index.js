import appmetrics from "./appmetrics";
import perf from "./perf";

class SecureBox {
  constructor(appmetrics, perf) {
    this.appmetrics = appmetrics;
    this.perf = perf;
  }
}

const secureBox = new SecureBox(appmetrics, perf);

export default secureBox;
