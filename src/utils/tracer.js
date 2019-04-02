import Stack from "stack-utils";
import now from "performance-now";
import callsites from "callsites";
import _ from "underscore";
import moment from "moment";

let instance = null;
class Tracer {
  constructor() {
    if (!instance) {
      instance = this;
    }
    this.stack = new Stack({ cwd: process.cwd(), internals: Stack.nodeInternals() });
    this.timer = now;
    this.calls = callsites;
    this.start = 0;
    this.end = 0;
    return instance;
  }

  startTimer() {
    this.start = this.timer();
  }

  endTimer() {
    this.end = this.timer();
    return {
      total_time: (this.end - this.start).toFixed(3),
      metadata: {
        filename: callsites()[2].getFileName(),
        methodName: callsites()[2].getMethodName(),
        functionName: callsites()[2].getFunctionName(),
        lineNumber: callsites()[2].getLineNumber(),
        columnNumber: callsites()[2].getColumnNumber()
      },
      time: moment().format("MM-DD-YY, h:mm:ss a"),
      trace: _.rest(this.stack.clean(new Error().stack).split("\n"), 2)
    };
  }

  stackTrace() {
    return {
      trace: _.rest(this.stack.clean(new Error().stack).split("\n"), 2),
      time: moment().format("MM-DD-YY, h:mm:ss a")
    };
  }
}

export default new Tracer();
