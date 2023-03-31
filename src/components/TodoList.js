import React from "react";
import TodoItem from "./TodoItem";
import { useSelector } from "react-redux";

const TodoList = ({ filter }) => {
  const todos = useSelector((state) => {
    switch (filter) {
      case "completed":
        return state.todos.filter((todo) => todo.completed);
      case "pending":
        return state.todos.filter((todo) => !todo.completed);
      default:
        return state.todos;
    }
  });

  return (
    <ul className="list-group">
      {todos.map((todo) => (
        <TodoItem 
          key={todo.id}
          id={todo.id} 
          title={todo.title} 
          completed={todo.completed} />
      ))}
    </ul>
  );
};

export default TodoList;
