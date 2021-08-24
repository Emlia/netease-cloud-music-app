import { useState } from "react";
import Drawer from "../../components/drawer";
import ErrorBoundary from "../../components/error";
import Banner from "../../modules/banner";
import Header from "../../modules/header";

export default function Home() {
  const [showPopup, togglePopup] = useState(false);

  const showSideBar = () => {
    togglePopup(!showPopup);
  };

  return (
    <ErrorBoundary>
      <Header showSideBar={showSideBar} customClassName="mt-2"></Header>
      <Banner customClassName="mt-2 white-space-5"></Banner>
      <Drawer show={showPopup} onClickMask={showSideBar}>
        <div className="bg-white w-6/12 h-screen"></div>
      </Drawer>
    </ErrorBoundary>
  );
}
