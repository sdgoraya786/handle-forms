import React, { useState, useEffect } from "react";
import { FaEdit, FaTrashAlt, FaPlus } from "react-icons/fa";
import { MdAssignmentAdd } from "react-icons/md";

// Thapa Technical #27 Updated TODO LIST App with Add, Delete, Edit, LocalStorage using React and Hooks
// GET DATA FROM LOCAL STORAGE
const getLocalItems = () => {
  const list = localStorage.getItem("LISTS");
  if (list) {
    return JSON.parse(list);
  } else {
    return [];
  }
};

const Todo3 = () => {
  const [item, setitem] = useState("");
  const [allItems, setAllItems] = useState(getLocalItems());
  const [toggleAddBtn, setToggleAddBtn] = useState(true);
  const [isEditItemId, setIsEditItemId] = useState(null);

  // ADD SINGLE ITEM
  const addItem = () => {
    const newItem = { id: new Date().getTime().toString(), name: item };
    if (!item) {
      alert("Plz fill the field.");
    } else if (item && !toggleAddBtn) {
      const updatedItem = allItems.map((curElem) => {
        if (curElem.id === isEditItemId) {
          return { ...curElem, name: item };
        }
        return curElem;
      });
      setAllItems(updatedItem);
      setToggleAddBtn(true);
      setIsEditItemId(null);
    } else {
      setAllItems([...allItems, newItem]);
    }
    setitem("");
  };

  // DELETE SINGLE ITEM
  const deleteItem = (id) => {
    const remainingItems = allItems.filter((curElem) => curElem.id !== id);
    setAllItems(remainingItems);
    // console.log(remainingItems);
    // filter return a new array
  };

  // EDIT SIGLE ITEM
  const editItem = (id) => {
    // WE USE BOTH METHODS [Find method return new object]
    // const newEditItem = allItems.find((curElem) => {
    //   return curElem.id === id;
    // });
    const newEditItem = allItems.find((curElem) => curElem.id === id);
    // console.log(newEditItem);
    setToggleAddBtn(false);
    setitem(newEditItem.name);
    setIsEditItemId(id);
  };

  // FOR DELETE ALL ITEMS
  const deleteAll = () => {
    setAllItems([]);
  };

  // ADD DATA LOCAL STORAGE
  useEffect(() => {
    // ALWAY sTRING STOR IN LOCAL STORAGE
    // CONVERT INTO JSON.stringify FORMAT
    localStorage.setItem("LISTS", JSON.stringify(allItems));
  }, [allItems]);

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
              value={item}
              onChange={(e) => setitem(e.target.value)}
            />
            {/* FOR ADD OR EDIT */}
            {toggleAddBtn ? (
              <FaPlus className="add-btn" title="Add Item" onClick={addItem} />
            ) : (
              <FaEdit
                className="oldEditItem"
                title="Update Item"
                onClick={addItem}
              />
            )}
          </div>

          <div className="showItems">
            {allItems.map((curElem) => {
              const { id, name } = curElem;
              return (
                <div className="eachItem" key={id}>
                  <h3>{name}</h3>
                  <div>
                    <FaEdit
                      className="editItem"
                      title="Edit Item"
                      onClick={() => editItem(id)}
                    />
                    <FaTrashAlt
                      className="deleteItem"
                      title="Delete Item"
                      onClick={() => deleteItem(id)}
                    />
                  </div>
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

export default Todo3;

// Edit item when user click on edit button
// 1: Get the id and name of the data which the user clicked to edit
// 2: Set the toggle mode to change the submit button into edit button
// 3: Now update the value of the allItems with the new updated value to edit
// 4: To pass the current element id to new state variable for reference
