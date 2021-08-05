import { message } from 'antd';
import todoApi from 'api/todo';
import { call, put, takeLatest } from 'redux-saga/effects';
import {
  addTodoFail,
  addTodoSuccess,
  loadTodoFail,
  loadTodoStart,
  loadTodoSuccess,
  removeTodoFail,
  toggleTodoStatusFail,
  toggleTodoStatusSuccess,
} from '../actions';
import { TODO_ACTION_TYPES } from '../constants';

// Wait for the action to start to get a todo list
export function* onLoadTodo() {
  yield takeLatest(TODO_ACTION_TYPES.LOAD_TODO_START, onLoadTodoStartAsync);
}

// Load todo list from server
function* onLoadTodoStartAsync(action) {
  const { params } = action;
  try {
    const response = yield call(todoApi.getAll, params);
    yield put(loadTodoSuccess(response));
  } catch (error) {
    yield put(loadTodoFail(error));
    yield call(message.error('Something went wrong!'));
  }
}

// Wait for the action to add a todo
export function* onAddTodo() {
  yield takeLatest(TODO_ACTION_TYPES.ADD_TODO_START, onAddTodoAsync);
}

// Call api - add todo item
function* onAddTodoAsync(action) {
  const { payload } = action;
  try {
    const response = yield call(todoApi.addTodoItem, payload);
    yield put(addTodoSuccess(response));
    yield call(message.success('Todo added!'));
  } catch (error) {
    yield put(addTodoFail(error));
    yield call(message.error('Something went wrong!'));
  }
}

// Wait for the action to remove a todo
export function* onRemoveTodo() {
  yield takeLatest(TODO_ACTION_TYPES.REMOVE_TODO_START, onRemoveTodoAsync);
}

// Call api - remove todo item
function* onRemoveTodoAsync(action) {
  const { payload } = action;
  try {
    yield call(todoApi.deleteTodoItem, payload.todo.id);
    yield call(message.success('Todo removed!'));
    yield call(getTodoList, payload.pagination);
  } catch (error) {
    yield put(removeTodoFail(error));
    yield call(message.error('Something went wrong!'));
  }
}

// Load todo list from the server with new pagination
function* getTodoList(pagination) {
  yield put(loadTodoStart(pagination));
}

// Wait for the action to change status a todo
export function* onChangeStatusTodo() {
  yield takeLatest(
    TODO_ACTION_TYPES.TOGGLE_TODO_STATUS_START,
    onChangeStatusTodoAsync
  );
}

// Call api - change status todo item
function* onChangeStatusTodoAsync(action) {
  const { payload } = action;
  const body = { ...payload, completed: !payload.completed };
  try {
    const response = yield call(todoApi.updateTodoItem, payload.id, body);
    yield put(toggleTodoStatusSuccess(response));
    yield call(message.success('Todo state updated!'));
  } catch (error) {
    yield put(toggleTodoStatusFail(error));
    yield call(message.error('Something went wrong!'));
  }
}
