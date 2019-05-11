import readPackageJson from "read-package-json";

const DEFAULT_PARAMS = {
  main: {
    cpu: true,
    eventloop: true,
    gc: true,
    environment: true,
    loop: false,
    memory: true,
    profiling: false
  },
  probe: {
    http: true,
    "http-outbound": false
  },
  requests: {
    request: false
  }
};

readPackageJson();

function readFromFile() {}

export default function loadConfig() {}
