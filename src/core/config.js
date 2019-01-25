class Config {
  static loadConfig(config) {
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
}

export default Config;
