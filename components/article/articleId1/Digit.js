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
    <div
      className={`${styles.digit} ${isActive ? styles.active : ""} ${
        styles.position
      } ${styles.splintDecoration}`}
      onClick={clickHandler}
    >
      <p>{digitNum}</p>
      <p>{position}</p>
    </div>
  );
}
