function loadConfig() {
  /** @todo Load config from database or send defaultConfig */
  const defaultConfig = {
    main: {
      cpu: true,
      eventloop: true,
      gc: false,
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
}

export default loadConfig();
