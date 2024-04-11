// extension RMO

function displayRmeD2(newState, index) {
  newState[index].splintDecoration = "circle";
  newState[index + 1].splintDecoration = "overline";
  newState[index + 2].splintDecoration = "overline";
  newState[index + 3].splintDecoration = "circle";
  newState[index + 3].position = "extension";
}

function displayRmeD3D4(newState, index) {
  newState[index].splintDecoration = "underline";
  newState[index - 1].splintDecoration = "circle";
  newState[index + 1].splintDecoration = "circle";
}

function displayRmeD5(newState, index) {
  newState[index].splintDecoration = "circle";
  newState[index - 1].splintDecoration = "overline";
  newState[index - 2].splintDecoration = "overline";
  newState[index - 3].splintDecoration = "circle";
  newState[index - 3].position = "extension";
}

//flexion RMO

function displayRmfD2(newState, index) {
  newState[index].splintDecoration = "circle";
  newState[index + 1].splintDecoration = "underline";
  newState[index + 2].splintDecoration = "underline";
  newState[index + 3].splintDecoration = "circle";
  newState[index + 3].position = "flexion";
}

function displayRmfD3D4(newState, index) {
  newState[index].splintDecoration = "overline";
  newState[index - 1].splintDecoration = "circle";
  newState[index + 1].splintDecoration = "circle";
}

function displayRmfD5(newState, index) {
  newState[index].splintDecoration = "circle";
  newState[index - 1].splintDecoration = "underline";
  newState[index - 2].splintDecoration = "underline";
  newState[index - 3].splintDecoration = "circle";
  newState[index - 3].position = "flexion";
}

export {
  displayRmeD2,
  displayRmeD3D4,
  displayRmeD5,
  displayRmfD2,
  displayRmfD3D4,
  displayRmfD5,
};
