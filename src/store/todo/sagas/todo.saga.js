import todoApi from 'api/todo';
import { call, put, takeLatest } from 'redux-saga/effects';
import { loadTodoFail, loadTodoSuccess } from '../actions';
import { TODO_ACTION_TYPES } from '../constants';

export function* onLoadTodoStartAsync(action) {
  const { params } = action;
  try {
    const response = yield call(todoApi.getAll, params);
    yield put(loadTodoSuccess(response));
  } catch (error) {
    yield put(loadTodoFail(error));
  }
}

export function* onLoadTodo() {
  yield console.log('We will start load the todo list');
  yield takeLatest(TODO_ACTION_TYPES.LOAD_TODO_START, onLoadTodoStartAsync);
}
