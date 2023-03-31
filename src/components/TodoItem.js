import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { toggleComplete, deleteTodo, editTodo } from "../redux/todoSlice";

const TodoItem = ({ id, title, completed }) => {
  const dispatch = useDispatch();

  const [editTitle, setEditTitle] = useState(title); // add state for the edited title
  const [showEditModal, setShowEditModal] = useState(false); // add state to control modal visibility

  const handleCompleteClick = () => {
    dispatch(toggleComplete({ id: id, completed: !completed }));
  };

  const handleDeleteClick = () => {
    dispatch(deleteTodo({ id: id }));
  };

  const handleEditSubmit = () => {
    dispatch(editTodo({ id: id, title: editTitle }));
    setShowEditModal(false);
  };

  return (
    <li className="list-group-item" key={id}>
      <div className="d-flex justify-content-between">
        <span className="d-flex align-items-center">
          <input
            type="checkbox"
            className="mr-3"
            checked={completed}
            onChange={handleCompleteClick}
          />
          <h4 className="ml-10">{title}</h4>
        </span>
        <span className="d-flex gap-20">
        <button className="btn btn-info m-20" onClick={() => setShowEditModal(true)}>
          Edit
        </button>
        <button className="btn btn-danger" onClick={handleDeleteClick}>
          Delete
        </button>
        </span>
      </div>

      <div
        className="modal"
        tabIndex="-1"
        role="dialog"
        style={{ display: showEditModal ? "block" : "none" }}
      >
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">Edit Todo</h5>
              <button
                type="button"
                className="close"
                data-dismiss="modal"
                aria-label="Close"
                onClick={() => setShowEditModal(false)}
              >
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div className="modal-body">
              <input
                type="text"
                className="form-control"
                value={editTitle}
                onChange={(e) => setEditTitle(e.target.value)}
              />
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                onClick={() => setShowEditModal(false)}
              >
                Cancel
              </button>
              <button
                type="button"
                className="btn btn-primary"
                onClick={handleEditSubmit}
              >
                Save
              </button>
            </div>
          </div>
        </div>
      </div>
    </li>
  );
};

export default TodoItem;
