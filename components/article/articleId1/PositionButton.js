import styles from "./RMO.module.css";

export default function PositionButton({
  activePosition,
  handlePositionBtnClick,
}) {
  return (
    <>
      <button className={styles.btn} onClick={handlePositionBtnClick}>
        {activePosition === "flexion" ? "RMF" : "RME"}
      </button>
    </>
  );
}
