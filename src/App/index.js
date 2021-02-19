import React, {
  ChangeEvent,
  FormEvent,
  useEffect,
  useRef,
  useState,
} from "react";
import { todos } from "./data";
import { v1 as uuid } from "uuid";

import "./App.css";

const selectedTodoId = todos[1].id;
const editedCount = 0;

function App() {
  const [newTodoInput, setNewTodoInput] = useState("");
  const [editTodoInput, setEditTodoInput] = useState("");
  const [isEditMode, setIsEditMode] = useState(false);
  const editInput = useRef(null);
  const selectedTodo =
    (selectedTodoId && todos.find((todo) => todo.id === selectedTodoId)) ||
    null;

  const handleNewInputChange = (e) => {
    setNewTodoInput(e.target.value);
  };

  const handleEditInputChange = (e) => {
    setEditTodoInput(e.target.value);
  };

  const handleCreateNewTodo = (e) => {
    e.preventDefault();
  };

  const handleSelectTodo = (todoId) => () => {};

  const handleEdit = () => {
    if (!selectedTodo) return;

    setEditTodoInput(selectedTodo.desc);
    setIsEditMode(true);
  };
  const handleUpdate = (e) => {
    e.preventDefault();
  };
  //Used to cancel out of the edit mode
  const handleCancelUpdate = (e) => {
    e.preventDefault();
    setIsEditMode(false);
    setEditTodoInput("");
  };

  const handleToggle = () => {
    if (!selectedTodoId || !selectedTodo) return;
  };
  //UseEffect

  useEffect(() => {
    if (isEditMode) {
      editInput?.current?.focus();
    }
  }, [isEditMode]);

  const handleDelete = () => {
    if (!selectedTodoId) return;
  };
  return (
    <div className='App'>
      <div className='App__counter'>Todos Updated Count: {editedCount}</div>
      <div className='App__header'>
        <h1>Todo: Redux vs RTK Edition</h1>
        <form onSubmit={handleCreateNewTodo}>
          <label htmlFor='new-todo'>Add new:</label>
          <input
            onChange={handleNewInputChange}
            id='new-todo'
            value={newTodoInput}
          />
          <button type='submit'>Create</button>
        </form>
      </div>
      <div className='App__body'>
        <ul className='App__list'>
          <h2>My Todos:</h2>
          {todos.map((todo, i) => (
            <li
              className={`${todo.isComplete ? "done" : ""} ${
                todo.id === selectedTodoId ? "active" : ""
              }`}
              key={todo.id}
              onClick={handleSelectTodo(todo.id)}
            >
              <span className='list-number'>{i + 1})</span> {todo.desc}
            </li>
          ))}
        </ul>
        <div className='App_todo-info'>
          <h2>Selected Todo:</h2>
          {selectedTodo === null ? (
            <span className='empty-state'>No Todo Selected</span>
          ) : !isEditMode ? (
            <>
              <span
                className={`todo-desc ${
                  selectedTodo?.isComplete ? "done" : ""
                }`}
              >
                {selectedTodo.desc}
              </span>
              <div className='todo-actions'>
                <button onClick={handleEdit}>Edit</button>
                <button onClick={handleToggle}>Toggle</button>
                <button onClick={handleDelete}>Delete</button>
              </div>
            </>
          ) : (
            <form onSubmit={handleUpdate}>
              <label htmlFor='edit-todo'>Edit:</label>
              <input
                ref={editInput}
                onChange={handleEditInputChange}
                value={editTodoInput}
              />
              <button type='submit'>Update</button>
              <button onClick={handleCancelUpdate}>Cancel</button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}

export default App;
