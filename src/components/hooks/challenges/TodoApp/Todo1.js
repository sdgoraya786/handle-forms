import React, { useState } from "react";

// Thapa Technical #24 Todo List App Project with Hooks
const Todo1 = () => {
  const [item, setitem] = useState("");
  const [allItems, setAllItems] = useState([]);
  // ADD SINGLE ITEM
  const addItem = () => {
    const newItem = { id: new Date().getTime().toString(), item };
    if (item) {
      setAllItems([...allItems, newItem]);
      setitem("");
    } else {
      alert("Plz fill tha data");
    }
  };
  // DELETE SINGLE ITEM
  const deleteItem = (id) => {
    const remainingItems = allItems.filter((curElem) => curElem.id !== id);
    setAllItems(remainingItems);
    // console.log(remainingItems);
    // filter return a new array
  };
  // FOR DELETE ALL ITEMS
  const deleteAll = () => {
    setAllItems([]);
  };
  return (
    <>
      <div className="main-div">
        <div className="child-div">
          <figure>
            <img src="" alt="NotPad" />
            <figcaption>~ Add Your List Here ~</figcaption>
          </figure>

          <div className="addItems">
            <input
              type="text"
              placeholder="Add Items..."
              value={item}
              onChange={(e) => setitem(e.target.value)}
            />
            <i
              className="fa fa-plus add-btn"
              title="Add Item"
              aria-hidden="true"
              onClick={addItem}
            ></i>
          </div>

          <div className="showItems">
            {allItems.map((curElem) => {
              const { id, item } = curElem;
              return (
                <div className="eachItem" key={id}>
                  <h3>{item}</h3>
                  <i
                    className="fa fa-trash deleteItem"
                    title="Delete Item"
                    aria-hidden="true"
                    onClick={() => deleteItem(id)}
                  ></i>
                </div>
              );
            })}
          </div>

          <div className="showItems">
            <button className="btn" onClick={deleteAll}>
              Remove All
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Todo1;
