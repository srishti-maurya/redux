import React from "react";
import "./App.css";
import Input from "./components/Input";
import TodoItem from "./components/TodoItem";
import { useSelector } from "react-redux";
import { selectTodoList } from "./features/todoSlice";
// const todoList = [
//   { item: "todo", done: false, id: 23423432 },
//   { item: "todo2", done: true, id: 54534543 },
// ];

function App() {
  const todoList = useSelector(selectTodoList);
  return (
    <div className="App">
      <div className="app__container">
        <div className="app__todoContainer">
          {todoList.map((item) => {
            return <TodoItem name={item.item} done={item.done} id={item.id} />;
          })}
        </div>

        <Input />
      </div>
    </div>
  );
}

export default App;
