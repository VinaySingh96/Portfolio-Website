class ConfigHandler {
  constructor(env) {
    if (ConfigHandler.instance) {
      return ConfigHandler.instance;
    }
    ConfigHandler.instance = this;
    this.config = this.generateConfig(env);
  }

  generateConfig(env) {
    switch (env) {
      case 'production':
        return this.buildNestedConfig();
      default:
        return require('../config/localDevelopment.json');
    }
  }

  getConfig() {
    return this.config;
  }

  buildNestedConfig() {
    Object.entries(process.env).filter(([key, value]) => key.startsWith('portfolio'));
    let flatConfig = Object.entries(process.env).filter(([key, value]) => key.startsWith('portfolio'));
    flatConfig = Object.fromEntries(flatConfig);

    const nestedConfig = this.unFlattenObject(flatConfig);

    return nestedConfig.portfolio;
  }

  unFlattenObject(flatObject) {
    const result = {};
  
    for (const key in flatObject) {
      const keys = key.split('.');
      keys.reduce((acc, curKey, index, arr) => {
        if (index === arr.length - 1) {
          acc[curKey] = flatObject[key];
        } else if (!acc[curKey]) {
          acc[curKey] = /^[0-9]+$/.test(arr[index + 1]) ? [] : {};
        }
        return acc[curKey];
      }, result);
    }
  
    return result;
  }
}

module.exports = ConfigHandler;