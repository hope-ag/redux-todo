import { v1 as uuid } from "uuid";
const CREATE = "CREATE_TODO";
const EDIT = "EDIT_TODO";
const DELETE = "DELETE_TODO";
const TOGGLE = "TOGGLE_TODO";
const SELECT = "SELECT_TODO";

export const createTodoActionCreator = (data) => {
  const { desc } = data;
  return {
    type: CREATE,
    payload: {
      id: uuid(),
      desc,
      isComplete: false,
    },
  };
};
export const editTodoActionCreator = (data) => {
  const { desc, id } = data;
  return {
    type: EDIT,
    payload: {
      id,
      desc,
    },
  };
};
export const deleteTodoActionCreator = (data) => {
  const { id } = data;
  return {
    type: DELETE,
    payload: {
      id,
    },
  };
};
export const toggleTodoActionCreator = (data) => {
  const { id, isComplete } = data;
  return {
    type: TOGGLE,
    payload: {
      id,
      isComplete,
    },
  };
};
export const selectTodoActionCreator = (data) => {
  const { id } = data;
  return {
    type: SELECT,
    payload: {
      id,
    },
  };
};
