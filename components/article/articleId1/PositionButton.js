export default function PositionButton({
  activePosition,
  handlePositionBtnClick,
}) {
  return (
    <>
      <button onClick={handlePositionBtnClick}>
        {activePosition === "flexion" ? "RMF" : "RME"}
      </button>
    </>
  );
}
