export default {
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
