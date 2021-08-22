import { useEffect, useRef } from "react";
import utils from "../utils";

export default function useInterval(
  fun,
  delay = 1000,
  options = { immediate: false }
) {
  const funRef = useRef(null);
  const immediate = options.immediate;

  useEffect(() => {
    funRef.current = fun;
  });

  useEffect(() => {
    if (!utils.data.isFunction(funRef.current)) {
      return;
    }
    if (immediate) {
      funRef.current();
    }
    const timer = setInterval(() => {
      funRef.current();
    }, delay);
    return () => {
      clearInterval(timer);
    };
  }, [delay, immediate]);
}
