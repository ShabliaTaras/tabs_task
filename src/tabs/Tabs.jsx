import React, { useState } from "react";
import "../tabs/tabs.css";

export const Tabs = () => {
  const [toggleState, setToggleState] = useState(1);

  const toggleTab = (index) => {
    setToggleState(index);
  };

  return (
    <>
      <div className="container">
        <div className="wrapper__tabs">
          <div className="inner__tabs">
            <div className="background" />
            <div
              className={
                toggleState === 1 ? "inner__item active" : "inner__item"
              }
              onClick={() => toggleTab(1)}
            >
              Soft Skills
            </div>
            <div
              className={
                toggleState === 2 ? "inner__item active" : "inner__item"
              }
              onClick={() => toggleTab(2)}
            >
              Technical Skills
            </div>
            <div
              className={
                toggleState === 3 ? "inner__item active" : "inner__item"
              }
              onClick={() => toggleTab(3)}
            >
              Job Focus
            </div>
            <div
              className={
                toggleState === 4 ? "inner__item active" : "inner__item"
              }
              onClick={() => toggleTab(4)}
            >
              Functional Expertise
            </div>
            <div
              className={
                toggleState === 5 ? "inner__item active" : "inner__item"
              }
              onClick={() => toggleTab(5)}
            >
              Domain Expertise
            </div>
            <div
              className={
                toggleState === 6 ? "inner__item active" : "inner__item"
              }
              onClick={() => toggleTab(6)}
            >
              Patent Expertice
            </div>
            <div
              className={
                toggleState === 7 ? "inner__item active" : "inner__item"
              }
              onClick={() => toggleTab(7)}
            >
              Personal Expertise
            </div>
            <div
              className={
                toggleState === 8 ? "inner__item active" : "inner__item"
              }
              onClick={() => toggleTab(8)}
            >
              Hard Expertise
            </div>
            <div
              className={
                toggleState === 9 ? "inner__item active" : "inner__item"
              }
              onClick={() => toggleTab(9)}
            >
              Domain Expertise
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
