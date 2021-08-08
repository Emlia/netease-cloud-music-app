import classNames from "classnames";
import { useCallback, useMemo, useState } from "react";
import { useInterval } from "../../hooks";
import { nextTick } from "../../utils/other";

const colors = ["red", "green", "blue", "yellow"];
const len = colors.length;
export default function Swiper({ width = 200 }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [canMove, setMove] = useState(true);

  useInterval(() => {
    const i = (currentIndex + 1) % (len + 1);
    setCurrentIndex(i);
    console.log("++ i", i);
  }, 2000);

  const handleTransition = useCallback(() => {
    if (currentIndex === len) {
      setMove(false);
      setCurrentIndex(0);
      nextTick(() => {
        setMove(true);
      });
    }
  }, [currentIndex]);

  const listRender = useMemo(() => {
    const first = colors[0];
    return (
      <>
        {colors.map((item, idx) => (
          <div
            key={item + idx}
            style={{
              width: `${width}px`,
              height: "100px",
              backgroundColor: item,
            }}
            className="flex-none"
          >
            {idx}
          </div>
        ))}
        <div
          key={first + len}
          style={{
            width: `${width}px`,
            height: "100px",
            backgroundColor: first,
          }}
          className="flex-none"
        >
          -1
        </div>
      </>
    );
  }, [width]);

  return (
    <div style={{ width: `${width}px` }} className="overflow-hidden">
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
        {listRender}
      </div>
    </div>
  );
}
