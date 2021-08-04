import { all } from 'redux-saga/effects';
import {
  onAddTodo,
  onChangeStatusTodo,
  onLoadTodo,
  onRemoveTodo,
} from './todo.saga';

function* helloSaga() {
  yield console.log('Hello Sagas!');
}

// single entry point to start all Sagas at once
export default function* rootSaga() {
  yield all([
    helloSaga(),
    onLoadTodo(),
    onAddTodo(),
    onRemoveTodo(),
    onChangeStatusTodo(),
  ]);
}
