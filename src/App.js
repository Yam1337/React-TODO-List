import "./App.css";
import React from "react";

function App() {
  let [myTasks, setMyTasks] = React.useState([]);
  let [myValue, setMyValue] = React.useState("");
  let inputValue = (e) => {
    setMyValue(e.target.value);
    //console.log(myValue);
  };
  let deleteTask = (e) => {
    setMyTasks(myTasks.filter((x) => x.id !== e));
  };
  let addTask = () => {
    if (myValue.length >= 1) {
      setMyTasks([...myTasks, { value: myValue, id: Math.random() }]);
      setMyValue("");
      console.log(myTasks, myTasks.id);
    }
  };
  return (
    <div className="container">
      <div className="header">TODO-List</div>
      <div className="content">
        <div className="box1">
          <div className="text">
            <input
              className="myInput"
              onChange={inputValue}
              value={myValue}
              maxlength="100"
              placeholder="max 100 letters"
            />
            <button className="myButton1" onClick={addTask}>
              Add
            </button>
          </div>
        </div>
        <div className="box2">
          {
            <div className="text">
              {myTasks.map((x) => (
                <div className="tasks">
                  <ul>
                    <li>
                      <div class="taskval">{x.value}</div>
                    </li>
                  </ul>
                  <button
                    className="myButton2"
                    onClick={() => {
                      deleteTask(x.id);
                    }}
                  >
                    X
                  </button>
                </div>
              ))}
            </div>
          }
        </div>
      </div>
    </div>
  );
}

export default App;
