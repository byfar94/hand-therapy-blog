"use client";
import styles from "./RMO.module.css";
import Digit from "./Digit";
import PositionButton from "./PositionButton";
import { useState } from "react";
import { displayRmeD3 } from "./util";

export default function RMO() {
  // initial states of all digits, isActive = true means it is the active digit you are focusing on for the RMO, position can be in neutral, flexion, or extension pertaining to the position of each digits, for RMOs a digit can be within a closed loop, resting on a flat surface of the splint or below the flat surface of a split. The combination of the splint decorations will be the visualization of the splint. It can be a circle, underline, or overline.
  const initialDigitsStates = [
    { isActive: false, position: "neutral", splintDecoration: "none" },
    { isActive: false, position: "neutral", splintDecoration: "none" },
    { isActive: false, position: "neutral", splintDecoration: "none" },
    { isActive: false, position: "neutral", splintDecoration: "none" },
  ];
  const [digitsStates, setDigitsStates] = useState(initialDigitsStates);

  //Position of the active digit (digit you are focusing on for treatment with RMO) can be set to flexion or extension. Toggled using the PositionButton
  const [activePosition, setActivePosition] = useState("flexion");

  //will toggle the active digit. Will first create a new state with initialdigitsstates so that the previous active state is reset. Then will set the digit you clicked on to the active digit. Then will set the position of that digit to the current activePosition state.
  function toggleActive(index) {
    let newState = [...initialDigitsStates];
    newState[index].isActive = true;
    newState[index].position = activePosition;
    if (index === 1 && activePosition === "extension") {
      displayRmeD3(newState, index);
    }
    setDigitsStates(newState);
  }

  //Will set activePosition state and change the active digits state to the correct position
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
