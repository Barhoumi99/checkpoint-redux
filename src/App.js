import "./App.css";
import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import AddTodoForm from "./components/AddTodoForm";
import TodoList from "./components/TodoList";
import TotalCompleteItems from "./components/TotalCompleteItems";
import { useState } from "react";
import TodoFilter from "./components/TodoFilter";

function App() {
  const [filter, setFilter] = useState('all');

  return (
    <div className="App d-flex flex-column justify-content-between gap-30">
      <h1>My Todo List</h1>
      <AddTodoForm />
      <TodoFilter filter={filter} setFilter={setFilter}/>
      <TodoList filter={filter}/>
      <TotalCompleteItems />
    </div>
  );
}

export default App;
