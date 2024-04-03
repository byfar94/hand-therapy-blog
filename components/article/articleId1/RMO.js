"use client";
import styles from "./RMO.module.css";
import Digit from "./Digit";
import PositionButton from "./PositionButton";
import { useState } from "react";

export default function RMO() {
  const initialDigitsStates = [
    { isActive: false, position: "neutral", splintDecoration: "none" },
    { isActive: false, position: "neutral", splintDecoration: "none" },
    { isActive: false, position: "neutral", splintDecoration: "none" },
    { isActive: false, position: "neutral", splintDecoration: "none" },
  ];
  const [digitsStates, setDigitsStates] = useState(initialDigitsStates);
  const [activePosition, setActivePosition] = useState("flexion");

  function toggleActive(index) {
    let newState = [...initialDigitsStates];
    newState[index].isActive = true;
    newState[index].position = activePosition;
    setDigitsStates(newState);
  }

  function togglePosition() {
    let newPosition;
    if (activePosition === "flexion") {
      newPosition = "extension";
    } else {
      newPosition = "flexion";
    }
    setActivePosition(newPosition);

    const newState = digitsStates.map((digit) => {
      if (digit.isActive) {
        return { ...digit, position: newPosition };
      }
      return digit;
    });
    setDigitsStates(newState);
  }

  return (
    <>
      <section id={styles.RMOContainer}>
        <div id={styles.hand}>
          {digitsStates.map((state, index) => (
            <Digit
              key={index + 2}
              digitNum={index + 2}
              isActive={state.isActive}
              position={state.position}
              splintDecoration={state.splintDecoration}
              clickHandler={() => {
                toggleActive(index);
              }}
            ></Digit>
          ))}
        </div>
        <PositionButton
          activePosition={activePosition}
          handlePositionBtnClick={togglePosition}
        ></PositionButton>
      </section>
    </>
  );
}
