import { compose } from "../middleware";
function handleResponse(ctx) {
  console.log(`get ${ctx.request.url}  successfully`, ctx.response);
  return ctx.response;
}
function handleError(ctx, error) {
  console.log(`get ${ctx.request.url} failed`, error);
}

function FetchLib() {
  this.middlewares = [];
  FetchLib.prototype.use = function (fn) {
    this.middlewares.push(fn);
  };
  FetchLib.prototype.request = function (url, params, options) {
    const ctx = {
      request: {
        url,
        params,
        options,
      },
      response: {},
    };
    const fnMiddleware = compose(this.middlewares);
    return fnMiddleware(ctx)
      .then(handleResponse)
      .catch((error) => handleError(ctx, error));
  };
}
export default FetchLib;
