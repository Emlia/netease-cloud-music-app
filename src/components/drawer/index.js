import classNames from "classnames";
import { useCallback, useEffect, useRef, useState } from "react";
import moduleCss from "./index.module.css";
import Mask from "../mask";
import { transitionEvents } from "../../constant";

const ExpandState = {
  TODO: 1,
  DOING: 2,
  DONE: 3,
};

export default function Drawer({ show, onClickMask, children }) {
  // todo -> doing -> done
  const [expandState, changeExpandState] = useState(ExpandState.TODO);

  const layoverRef = useRef(null);
  const expandStateRef = useRef(ExpandState.TODO);

  useEffect(() => {
    if (show && expandState === ExpandState.TODO) {
      // console.log("++ ref", show, expandState);
      requestAnimationFrame(() => {
        changeExpandState(ExpandState.DOING);
        expandStateRef.current = ExpandState.DOING;
      });
    }
  }, [show, expandState]);

  useEffect(() => {
    if (show && layoverRef.current && expandState === ExpandState.DOING) {
      const handleTransition = (e) => {
        if (expandStateRef.current === ExpandState.DONE) {
          // console.log("layoverRef", layoverRef);
          transitionEvents.forEach((name) => {
            layoverRef.current.removeEventListener(name, handleTransition);
          });
          onClickMask && onClickMask();
          changeExpandState(ExpandState.TODO);
          expandStateRef.current = ExpandState.TODO;
          // console.log("++ expandState", expandState);
          // console.log("++ handleTransition", e);
        }
      };
      transitionEvents.forEach((name) => {
        layoverRef.current.addEventListener(name, handleTransition);
      });
      return () => {};
    }
  }, [show, expandState, onClickMask]);

  const clickMask = useCallback(() => {
    changeExpandState(ExpandState.DONE);
    expandStateRef.current = ExpandState.DONE;
  }, []);

  return (
    <Mask show={show} onClickMask={clickMask}>
      <div
        ref={layoverRef}
        className={classNames(moduleCss.layover)}
        style={{
          transform:
            expandState === ExpandState.DOING
              ? "translateX(0)"
              : "translateX(-100%)",
        }}
      >
        {children}
      </div>
    </Mask>
  );
}
