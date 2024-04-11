"use client";
import styles from "./RMO.module.css";

export default function Digit({
  isActive,
  position,
  splintDecoration,
  clickHandler,
  digitNum,
}) {
  return (
    <div className="digit-contain">
      <div
        className={`${styles.digit} ${isActive ? styles.active : ""} ${
          styles[position]
        } ${splintDecoration === "circle" ? styles[splintDecoration] : null}`}
        onClick={clickHandler}
      >
        <p>{digitNum}</p>
        {/* if splint decoration equals underline or overline then the lineRMO will be displayed and the css style of the overline or underline will be applied to it*/}
        {splintDecoration === "underline" || splintDecoration === "overline" ? (
          <div
            className={`${styles.lineRMO} ${styles[splintDecoration]}`}
          ></div>
        ) : null}
      </div>
    </div>
  );
}
