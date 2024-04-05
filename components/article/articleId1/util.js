function displayRmeD3(newState, index) {
  newState[index].splintDecoration = "underline";
  newState[index - 1].splintDecoration = "circle";
  newState[index + 1].splintDecoration = "circle";
}

export { displayRmeD3 };
