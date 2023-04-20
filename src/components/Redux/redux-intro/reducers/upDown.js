// Counter Reducer #1 - Thapa
const initialState = 0;
const chengeTheNumber = (state = initialState, action) => {
  switch (action.type) {
    case "INCREMENT":
      return state + action.payload;
    case "DECREMENT":
      return state - 1;
    default:
      return state;
  }
};
export default chengeTheNumber;
