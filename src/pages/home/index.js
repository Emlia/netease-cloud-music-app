import { useCallback, useState } from "react";
import Drawer from "@comp/drawer";
import ErrorBoundary from "@comp/error";
import Banner from "@modules/banner";
export default function Home() {
  const [showPopup, togglePopup] = useState(false);

  const tap = useCallback(() => {
    togglePopup(!showPopup);
    // console.log("showPopup", showPopup);
  }, [showPopup]);

  const onClickMask = () => {
    togglePopup(false);
  };

  return (
    <ErrorBoundary>
      <div onClick={tap}>click</div>
      <div>showPopup:{`${showPopup}`}</div>
      <Drawer show={showPopup} onClickMask={onClickMask}>
        <div className="bg-white w-6/12 h-screen"></div>
      </Drawer>
      <Banner></Banner>
    </ErrorBoundary>
  );
}
