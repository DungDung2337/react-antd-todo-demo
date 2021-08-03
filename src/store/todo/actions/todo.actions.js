import { TODO_ACTION_TYPES } from '../constants';

export function loadTodoStart(params) {
  return {
    type: TODO_ACTION_TYPES.LOAD_TODO_START,
    params,
  };
}

export function loadTodoSuccess(todo) {
  return {
    type: TODO_ACTION_TYPES.LOAD_TODO_SUCCESS,
    payload: todo,
  };
}

export function loadTodoFail(todo) {
  return {
    type: TODO_ACTION_TYPES.LOAD_TODO_FAIL,
    payload: todo,
  };
}

export function addTodo(todo) {
  return {
    type: TODO_ACTION_TYPES.ADD_TODO_SUCCESS,
    payload: todo,
  };
}

export function removeTodo(todo) {
  return {
    type: TODO_ACTION_TYPES.REMOVE_TODO_SUCCESS,
    payload: todo,
  };
}

export function toggleTodoStatus(todo) {
  return {
    type: TODO_ACTION_TYPES.TOGGLE_TODO_STATUS_SUCCESS,
    payload: todo,
  };
}
