import Config from "../core/config";

class Auth {
  static connectAndVerify({ config, token, connection }) {
    const updatedConfig = Config.loadConfig(config, token, connection);
    if (updatedConfig.status) {
      return updatedConfig.config;
    }
    throw new Error(updatedConfig.message);
  }
}

export default Auth;
