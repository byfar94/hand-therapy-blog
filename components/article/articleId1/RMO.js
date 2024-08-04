"use client";
import styles from "./RMO.module.css";
import Digit from "./Digit";
import PositionButton from "./PositionButton";
import { useState } from "react";
import {
  displayRmeD2,
  displayRmeD3D4,
  displayRmeD5,
  displayRmfD2,
  displayRmfD3D4,
  displayRmfD5,
} from "./util";

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

    //extension orthosis
    if (index === 0 && activePosition === "extension") {
      displayRmeD2(newState, index);
    }
    if ((index === 1 || index === 2) && activePosition === "extension") {
      displayRmeD3D4(newState, index);
    }
    if (index === 3 && activePosition === "extension") {
      displayRmeD5(newState, index);
    }

    //flexion orthosis
    if (index === 0 && activePosition === "flexion") {
      displayRmfD2(newState, index);
    }
    if ((index === 1 || index === 2) && activePosition === "flexion") {
      displayRmfD3D4(newState, index);
    }
    if (index === 3 && activePosition === "flexion") {
      displayRmfD5(newState, index);
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

    /*
    let  newState = digitsStates.map((digit) => {
      if (digit.isActive) {
        return { ...digit, position: newPosition };
      }
      return digit;
    });
*/

    let newState = initialDigitsStates;
    setDigitsStates(newState);
  }

  return (
    <>
      <section id={styles.RMOContainer}>
        <div
          className={styles.RMOContainerPositionReference}
          id={styles.dorsal}
        >
          <p>Dorsal</p>
        </div>
        <div className={styles.RMOContainerPositionReference} id={styles.volar}>
          <p>Volar</p>
        </div>
        <div
          className={styles.RMOContainerPositionReference}
          id={styles.radial}
        >
          <p>R</p>
        </div>
        <div className={styles.RMOContainerPositionReference} id={styles.ulnar}>
          <p>U</p>
        </div>
        <div id={styles.hand}>
          {digitsStates.map((state, index) => (
            <Digit
              key={index}
              digitNum={`D${index + 2}`}
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
