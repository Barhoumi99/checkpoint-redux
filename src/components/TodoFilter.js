import React from "react";

const TodoFilter = ({ filter, setFilter }) => {
  const handleFilterChange = (event) => {
    setFilter(event.target.value);
  };

  return (
    <div className="form-group">
      <label htmlFor="todo-filter ">Filter by:</label>
      <select
        className="form-control w-25"
        id="todo-filter"
        value={filter}
        onChange={handleFilterChange}
      >
        <option value="all">All</option>
        <option value="completed">Completed</option>
        <option value="pending">Pending</option>
      </select>
    </div>
  );
};

export default TodoFilter;
