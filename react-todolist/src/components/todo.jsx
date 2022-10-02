import react, { useState } from "react";
import "./todo.css";
import { AiTwotoneDelete } from "react-icons/ai";
import { IconContext } from "react-icons";

const Todo = () => {
  const [inputData, setInputData] = useState("");
  const [items, setItems] = useState([]);
  const [completeItems, setCompleteItems] = useState([]);

  const addit = () => {
    if (!inputData) {
    } else {
      setItems([...items, inputData]);
      setInputData("");
    }
  };

  const deleteItem = (id) => {
    const updatedItems = items.filter((elem, ind) => {
      return ind !== id;
    });
    setItems(updatedItems);
    const updateItems = items.filter((elem, ind) => {
      return ind === id;
    });
    setCompleteItems([...completeItems, updateItems]);
  };

  const showC = () => {
    const completed = document.getElementsByClassName("completed");
    const active = document.getElementsByClassName("display");
    for (var i = 0; i < completed.length; i += 1) {
      completed[i].style.display = "block";
      active[i].style.display = "none";
    }
  };
  const showA = () => {
    const completed = document.getElementsByClassName("completed");
    const active = document.getElementsByClassName("display");
    for (var i = 0; i < active.length; i += 1) {
      completed[i].style.display = "none";
      active[i].style.display = "block";
    }
  };
  return (
    <div className="todolist">
      <div className="todo-1">
        <div className="todo">
          <h1>#todo</h1>
          <div className="states">
            <button onClick={showA}>active</button>
            <button onClick={showC}>completed</button>
          </div>
          <hr />
          <div className="adding">
            <input
              type="text"
              id="input-add"
              value={inputData}
              onChange={(e) => {
                setInputData(e.target.value);
              }}
            />
            <button className="add" onClick={addit}>
              add
            </button>
          </div>
          <div className="display">
            {items.map((elem, index) => {
              return (
                <div className="box">
                  <p>{elem}</p>
                  <IconContext.Provider value={{ className: "trash" }}>
                    <AiTwotoneDelete onClick={() => deleteItem(index)} />
                  </IconContext.Provider>
                </div>
              );
            })}
          </div>
          <div className="completed">
            {completeItems.map((elem, key) => {
              return (
                <div className="box">
                  <p>{elem}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};
export default Todo;
