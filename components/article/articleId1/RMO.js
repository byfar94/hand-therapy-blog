"use client";
import styles from "./RMO.module.css";

import Digit from "./Digit";
import { useState } from "react";

export default function RMO() {
  const initialDigitsStates = [
    { isActive: false, position: "neutral", splintDecoration: "none" },
    { isActive: false, position: "neutral", splintDecoration: "none" },
    { isActive: false, position: "neutral", splintDecoration: "none" },
    { isActive: false, position: "neutral", splintDecoration: "none" },
  ];
  const [digitsStates, setDigitsStates] = useState(initialDigitsStates);

  function toggleActive(index) {
    let newState = [...initialDigitsStates];
    newState[index].isActive = true;
    setDigitsStates(newState);
  }

  return (
    <>
      <div id={styles.hand}>
        {digitsStates.map((state, index) => (
          <Digit
            key={index + 2}
            isActive={state.isActive}
            position={state.position}
            splintDecoration={state.splintDecoration}
            clickHandler={() => {
              toggleActive(index);
            }}
          ></Digit>
        ))}
      </div>
    </>
  );
}
