import React from "react";
import { useState } from "react";

const TodoList = () => {
  const [list, setList] = useState("");
  const [todo, setTodo] = useState([]);

  const change = (data) => {
    setList(data.target.value);
  };
  const click = (et) => {
    console.log("hy");
    setTodo((e) => {
      return [...e, list];
    });
    setList(" ");
  };

  let listclick = (key) => {
    return setTodo(
      todo.filter((data, index) => {
        return key !== index;
      })
    );
  };  

  const delall=(e)=>{
    return(
      setList("")
    )
  }
  return (
    <>
      <div>
        <form>
          <div>
            <h1>Todo App</h1>
          </div>
          <div className="inputfield">
            <input
              type="text"
              placeholder="Enter your name"
              value={list}
              onChange={change}
            />
            <i className="fa-solid fa-plus" onClick={click}></i>  

            <div className="showlist">
              <ol>
                {todo.map((para, index) => {
                  return (
                    <li key={index} style={{ listStyleType: "none" }}>
                      {para}&nbsp;&nbsp;
                      <i
                        className="fa-solid fa-xmark"
                        onClick={() => listclick(index)}
                      ></i>
                    </li>
                  );
                })}
              </ol>
            </div>
            <button onClick={delall}>Delete All</button>
          </div>
        </form>
      </div>
    </>
  );
};

export default TodoList;
