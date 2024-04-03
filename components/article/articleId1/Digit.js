"use client";
import styles from "./RMO.module.css";

export default function Digit({
  isActive,
  position,
  splintDecoration,
  clickHandler,
  digitText,
}) {
  return (
    <div
      className={`${styles.digit} ${isActive ? styles.active : ""} ${
        styles.position
      } ${styles.splintDecoration}`}
      onClick={clickHandler}
    >
      <p>text</p>
    </div>
  );
}
