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

export function addTodoStart(todo) {
  return {
    type: TODO_ACTION_TYPES.ADD_TODO_START,
    payload: todo,
  };
}

export function addTodoSuccess(todo) {
  return {
    type: TODO_ACTION_TYPES.ADD_TODO_SUCCESS,
    payload: todo,
  };
}

export function addTodoFail(todo) {
  return {
    type: TODO_ACTION_TYPES.ADD_TODO_FAIL,
    payload: todo,
  };
}

export function removeTodoStart(todo) {
  return {
    type: TODO_ACTION_TYPES.REMOVE_TODO_START,
    payload: todo,
  };
}

export function removeTodoSuccess(todo) {
  return {
    type: TODO_ACTION_TYPES.REMOVE_TODO_SUCCESS,
    payload: todo,
  };
}

export function removeTodoFail(todo) {
  return {
    type: TODO_ACTION_TYPES.REMOVE_TODO_FAIL,
    payload: todo,
  };
}

export function toggleTodoStatusStart(todo) {
  return {
    type: TODO_ACTION_TYPES.TOGGLE_TODO_STATUS_START,
    payload: todo,
  };
}

export function toggleTodoStatusSuccess(todo) {
  return {
    type: TODO_ACTION_TYPES.TOGGLE_TODO_STATUS_SUCCESS,
    payload: todo,
  };
}

export function toggleTodoStatusFail(todo) {
  return {
    type: TODO_ACTION_TYPES.TOGGLE_TODO_STATUS_FAIL,
    payload: todo,
  };
}
