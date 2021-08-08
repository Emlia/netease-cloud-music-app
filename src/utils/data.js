const toString = Object.prototype.toString;

export function isString(data) {
  return typeof data === "string";
}

export function isNumber(data) {
  return typeof data === "number";
}

export function isBoolean(data) {
  return typeof data === "boolean";
}

export function isUndefined(data) {
  return typeof data === "undefined";
}

export function isNull(data) {
  return toString.call(data) === "[object Null]";
}

export function isNil(data) {
  // eslint-disable-next-line eqeqeq
  return data == undefined;
}

export function isOject(data) {
  return toString.call(data) === "[object Object]";
}

export function isFunction(data) {
  return typeof data === "function";
}