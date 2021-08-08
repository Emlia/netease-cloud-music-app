import { isFunction } from "./data";

export function nextTick(fun) {
  requestAnimationFrame(() => {
    requestAnimationFrame(() => {
      isFunction(fun) && fun();
    });
  });
}
