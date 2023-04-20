import React, { useState } from "react";
import { FaTrashAlt, FaPlus } from "react-icons/fa";
import { MdAssignmentAdd } from "react-icons/md";
import "./Todo.css";
import { useDispatch, useSelector } from "react-redux";
import { addTodo, deleteTodo, removeAllTodo } from "../actions/index";

// Thapa Technical #4 Todo List App Project with Redux
const Todo = () => {
  const [inputData, setInputData] = useState("");
  const list = useSelector((state) => state.todoReducer.list);
  const dispatch = useDispatch();
  return (
    <>
      <div className="main-div">
        <div className="child-div">
          <figure>
            <MdAssignmentAdd className="img" />
            <figcaption>~ Add Your List Here ~</figcaption>
          </figure>

          <div className="addItems">
            <input
              type="text"
              placeholder="Add Items..."
              value={inputData}
              onChange={(e) => setInputData(e.target.value)}
            />
            <FaPlus
              className="add-btn"
              title="Add Item"
              onClick={() => dispatch(addTodo(inputData), setInputData(""))}
            />
          </div>

          {list.map((curElem) => {
            const { id, name } = curElem;
            return (
              <div className="showItems" key={id}>
                <div className="eachItem">
                  <h3>{name}</h3>
                  <FaTrashAlt
                    className="deleteItem"
                    title="Delete Item"
                    onClick={() => dispatch(deleteTodo(id))}
                  />
                </div>
              </div>
            );
          })}

          <div className="showItems">
            <button className="btn" onClick={() => dispatch(removeAllTodo())}>
              Remove All
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Todo;
