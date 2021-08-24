import {
  AlignLeftOutlined,
  SearchOutlined,
  AppleOutlined,
} from "@ant-design/icons";
import classNames from "classnames";

export default function Header({ showSideBar, customClassName }) {
  return (
    <div
      className={classNames(
        "flex",
        "justify-between",
        "items-center",
        "white-space-5",
        customClassName
      )}
    >
      <AlignLeftOutlined
        className="no-outline"
        style={{ fontSize: "5vw" }}
        onClick={showSideBar}
      ></AlignLeftOutlined>
      <div
        className="flex flex-1 justify-center items-center align-middle bg-white ml-2 mr-2 pt-1.5 pb-1.5"
        style={{ borderRadius: "6vw" }}
      >
        <SearchOutlined
          style={{ fontSize: "3.8vw", color: "#9CA3AF" }}
        ></SearchOutlined>
        <span className="ml-1" style={{ fontSize: "3.5vw", color: "#9CA3AF" }}>Aimer</span>
      </div>
      <AppleOutlined style={{ fontSize: "6vw" }}></AppleOutlined>
    </div>
  );
}
