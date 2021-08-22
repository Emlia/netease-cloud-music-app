/* eslint-disable import/no-anonymous-default-export */
import { isFunction } from "./data";

function nextTick(fun) {
  requestAnimationFrame(() => {
    requestAnimationFrame(() => {
      isFunction(fun) && fun();
    });
  });
}

function noop() {}

function no() {
  return false;
}

function yes() {
  return true;
}

function requestSuccess(result) {
  return result && result.code === 200;
}

function pageHidden() {
  return document.visibilityState === "hidden";
}

function pageVisible() {
  return document.visibilityState === "visible";
}

export default {
  nextTick,
  noop,
  no,
  yes,
  requestSuccess,
  pageHidden,
  pageVisible
};
