import React from "react";

const TodoList = ({ todos, handleDelete, handleEdit }) => {
  return (
    <ul className="allTodos">
      {todos.length === 0 ? (
        <p>No items added in the todo list</p>
      ) : (
        todos.map((t) => (
          <li className="singleTodo" key={t.id}>
            <span className="todoText">{t.todo}</span>
            <button onClick={() => handleEdit(t.id)}>Edit</button>
            <button onClick={() => handleDelete(t.id)}>Delete</button>
          </li>
        ))
      )}
    </ul>
  );
};

export default TodoList;
