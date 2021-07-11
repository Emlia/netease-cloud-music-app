import { useCallback, useState } from "react";
import Drawer from "../../components/drawer";
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
    <div>
      <div onClick={tap}>click</div>
      <div>showPopup:{`${showPopup}`}</div>
      <Drawer show={showPopup} onClickMask={onClickMask}>
        <div className="bg-white w-6/12 h-screen"></div>
      </Drawer>
    </div>
  );
}
