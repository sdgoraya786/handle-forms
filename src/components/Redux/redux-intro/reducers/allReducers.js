/**------- Reducer holds your state and actions -------- */

// Counter Reducer #1 - Thapa
const initialState = 0;
export const chengeTheNumber = (state = initialState, action) => {
  switch (action.type) {
    case "INCREMENT":
      return state + action.payload;
    case "DECREMENT":
      return state - 1;
    default:
      return state;
  }
};

// Multiply/Divide counter #2 - Thapa
const initialState2 = 1;
export const multDivTheNumber = (state = initialState2, action) => {
  switch (action.type) {
    case "MULTIPLY":
      return state * action.payload;
    case "DIVIDE":
      return state / action.payload;
    default:
      return state;
  }
};

// -----------------------------------------------------
// Modern React Redux To-Do List Project #4 - Thapa
const initialData = {
  list: [],
};
export const todoReducer = (state = initialData, action) => {
  switch (action.type) {
    case "ADD_TODO":
      if (action.payload.name.length > 2) {
        return {
          ...state,
          list: [...state.list, action.payload],
        };
      }
      return state;
    case "DELETE_TODO":
      const newList = state.list.filter((curElem) => curElem.id !== action.id);
      return { ...state, list: newList };
    case "REMOVE_ALL_TODO":
      return { ...state, list: [] };
    default:
      return state;
  }
};
