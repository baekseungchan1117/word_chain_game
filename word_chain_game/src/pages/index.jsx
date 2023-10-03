import React from "react";
import "./index.css";
import TimerCheck from "../components/TimerCheck";
import Keyword from "../components/Keyword";
import TextBox from "../components/TextBox";

const Main = () => {
  return (
    <div className="mainBox">
      <div className="mainBox__detail">
        {/* <Keyword /> */}
        <TextBox />
        <TimerCheck />
      </div>
    </div>
  );
};

export default Main;
