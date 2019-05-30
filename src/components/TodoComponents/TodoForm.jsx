import React from 'react';
// import './Todo.css';
export default function TodoForm({ todoItem, changeHandler, addItem, enterBtn }) {
  return (
    <div>
      <input
        className="todo-item"
        value={todoItem}
        onChange={changeHandler}
        onKeyDown={enterBtn}
        type="text"
        />

      <button onCLick={addItem}>Add Todo</button>
      <button>Clear Completed</button>

    </div>
  );
}
