// Multiply/Divide counter #2 - Thapa
const initialState = 1;
const multDivTheNumber = (state = initialState, action) => {
  switch (action.type) {
    case "MULTIPLY":
      return state * action.payload;
    case "DIVIDE":
      return state / 5;
    default:
      return state;
  }
};
export default multDivTheNumber;
