import React from 'react';
// import './Todo.css';
export default function TodoForm({ todoItem, changeHandler, addItem, enterBtn, clearCompleted }) {
  return (
    <div>
      <input
        className="todo-item"
        value={todoItem}
        onChange={changeHandler}
        onKeyDown={enterBtn}
        type="text"
        />

      <button onClick={addItem}>Add Todo</button>
      <button onClick={clearCompleted}>Clear Completed</button>

    </div>
  );
}
