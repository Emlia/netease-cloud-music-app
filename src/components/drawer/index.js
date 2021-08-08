import classNames from "classnames";
import { useCallback, useEffect, useMemo, useState } from "react";
import moduleCss from "./index.module.css";
import Mask from "../mask";

const ExpandState = {
  TODO: 1,
  DOING: 2,
  DONE: 3,
};

export default function Drawer({ show, onClickMask, children }) {
  // todo -> doing -> done
  const [expandState, changeExpandState] = useState(ExpandState.TODO);

  useEffect(() => {
    if (show && expandState === ExpandState.TODO) {
      requestAnimationFrame(() => {
        changeExpandState(ExpandState.DOING);
      });
    }
  }, [show, expandState]);

  const clickMask = useCallback(() => {
    changeExpandState(ExpandState.DONE);
  }, []);

  const handleTransition = useCallback(() => {
    if (expandState === ExpandState.DONE) {
      onClickMask && onClickMask();
      changeExpandState(ExpandState.TODO);
    }
  }, [expandState, onClickMask]);

  const transformState = useMemo(() => {
    return {
      transform:
        expandState === ExpandState.DOING
          ? "translateX(0)"
          : "translateX(-100%)",
    };
  }, [expandState]);

  return (
    <Mask show={show} onClickMask={clickMask}>
      <div
        className={classNames(moduleCss.layover)}
        onTransitionEnd={handleTransition}
        style={transformState}
      >
        {children}
      </div>
    </Mask>
  );
}
