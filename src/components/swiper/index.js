import classNames from "classnames";
import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import useInterval from "@hooks/useInterval";
import utils from "@utils";

export default function Swiper({ children, ...others }) {
  const [len] = useState(children.length);
  const [width, setWidth] = useState(0);
  const [canMove, setMove] = useState(true);
  const [currentIndex, setCurrentIndex] = useState(0);
  const swiperRef = useRef(null);

  useInterval(() => {
    const visible = utils.pageVisible();
    if (visible && width) {
      const i = (currentIndex + 1) % (len + 1);
      // console.log(`len:${len},currentIndex:${currentIndex},i:${i}`);
      setCurrentIndex(i);
    }
  }, 2500);

  useEffect(() => {
    if (swiperRef.current) {
      const width = getComputedStyle(swiperRef.current).width;
      setWidth(parseInt(width, 10));
    }
  }, []);

  const handleTransition = useCallback(() => {
    // console.log("++ handleTransition", width, currentIndex, len);
    if (width && currentIndex === len) {
      setMove(false);
      setCurrentIndex(0);
      utils.nextTick(() => {
        setMove(true);
      });
    }
  }, [width, currentIndex, len]);

  const first = useMemo(() => {
    if (children.len < 2) {
      return null;
    }
    return children[0];
  }, [children]);

  return (
    <div {...others} ref={swiperRef} className="overflow-hidden">
      <div
        onTransitionEnd={handleTransition}
        className={classNames(
          "flex",
          "flex-row",
          canMove ? "transition-transform duration-1000" : ""
        )}
        style={{
          width: `${width}px`,
          transform: `translateX(-${width * currentIndex}px)`,
        }}
      >
        {children}
        {first}
      </div>
    </div>
  );
}
