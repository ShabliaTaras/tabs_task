import React, { useState } from "react";
import "../tabs/tabs.css";
import { Tab } from "../tabs/Tab";

const tabsArray = [
  { index: 1, label: "Soft Skills" },
  { index: 2, label: "Technical Skills" },
  { index: 3, label: "Job Focus" },
  { index: 4, label: "Functional Expertise" },
  { index: 5, label: "Domain Expertise" },
  { index: 6, label: "Patent Expertice" },
  { index: 7, label: "Personal Expertise" },
  { index: 8, label: "Hard Expertise" },
  { index: 9, label: "Domain Expertise" },
];

export const Tabs = () => {
  const [currentIndex, setCurrentIndex] = useState(1);

  return (
    <>
      <div className="container">
        <div className="background" />

        <div className="wrapper__tabs">
          {tabsArray.map((item) => (
            <Tab
              isActive={currentIndex === item.index}
              toggleTab={() => setCurrentIndex(item.index)}
              label={item.label}
            />
          ))}
        </div>
      </div>
    </>
  );
};
