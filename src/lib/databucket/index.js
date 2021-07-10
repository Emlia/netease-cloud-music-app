function noop(result) {
  return result;
}

export class DataBucket {
  _fetch;
  constructor(fetchLib) {
    this._fetch = fetchLib;
  }
  // config.api config.params config.method
  // options.type options.mock options.mockPath options.useCache options.duration
  // options.withCredentials options.login options.location
  getData(config = {}, options = {}) {
    const {
      mock,
      mockData = {},
      mockDuration = 200,
      withCredentials = true,
    } = options;
    if (mock) {
      const adaptor = options.adaptor || noop;
      return new Promise((resolve) => {
        setTimeout(() => {
          resolve(adaptor(mockData));
        }, mockDuration);
      });
    } else {
      let requestConfig = {};
      if (withCredentials) {
        requestConfig.withCredentials = true;
      }
      return this._fetch(config.api, config.params, requestConfig).then(
        (result) => {
          const adaptor = options.adaptor || noop;
          return adaptor(result);
        }
      );
    }
  }
}
