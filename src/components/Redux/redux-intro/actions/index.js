// Simple counter #1 - Thapa
export const incNumber = (num) => {
  return {
    type: "INCREMENT",
    payload: num,
  };
};
export const decNumber = () => {
  return {
    type: "DECREMENT",
  };
};

// Multiply/Divide counter #2 - Thapa
export const multiNumber = (num) => {
  return {
    type: "MULTIPLY",
    payload: num,
  };
};
export const divideNumber = (num) => {
  return {
    type: "DIVIDE",
    payload: num,
  };
};

// Modern React Redux To-Do List Project #4 - Thapa
export const addTodo = (data) => {
  return {
    type: "ADD_TODO",
    payload: {
      id: new Date().getTime().toString(),
      name: data,
    },
  };
};
export const deleteTodo = (id) => {
  return {
    type: "DELETE_TODO",
    id,
  };
};
export const removeAllTodo = () => {
  return {
    type: "REMOVE_ALL_TODO",
  };
};
