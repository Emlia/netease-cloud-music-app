import { useEffect } from "react";

export default function useMount(fun) {
  useEffect(() => {
    fun && fun();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
}
