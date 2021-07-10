/* eslint-disable import/no-anonymous-default-export */
import FetchLib from "./fetch";
import axios from "axios";

const defaultOptions = {
  timeout: 2000,
  responseType: "json",
  responseEncoding: "utf8",
};
const fetchLib = new FetchLib();

fetchLib.use(async (ctx, next) => {
  await next();
  return ctx;
});

fetchLib.use(async (ctx, next) => {
  const { headers = {} } = ctx.request;
  ctx.request.headers = {
    ...headers,
    //   "x-uid": "",
    //   "x-ua": "",
    //   "device-id": "",
    //   "app-version": "",
  };
  await next();
});

fetchLib.use(async (ctx) => {
  const { url, params, method = "get", headers, options = {} } = ctx.request;
  //   console.log("++", url, params, headers, options);
  ctx.response = await axios.request({
    url,
    method,
    headers,
    data: params,
    ...options,
  });
  //   console.log("ctx.response", ctx.response);
});

export default (url, params, options) => {
  return fetchLib.request(url, params, { ...defaultOptions, ...options });
};
