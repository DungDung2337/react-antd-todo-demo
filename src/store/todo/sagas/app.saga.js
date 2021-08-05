import { all } from 'redux-saga/effects';
import {
  onAddTodo,
  onChangeStatusTodo,
  onLoadTodo,
  onRemoveTodo,
} from './todo.saga';

// single entry point to start all Sagas at once
export default function* rootSaga() {
  yield all([onLoadTodo(), onAddTodo(), onRemoveTodo(), onChangeStatusTodo()]);
}
