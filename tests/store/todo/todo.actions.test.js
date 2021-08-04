import {
  addTodoSuccess,
  loadTodoFail,
  loadTodoStart,
  loadTodoSuccess,
  removeTodoSuccess,
  toggleTodoStatusSuccess,
} from '../../../src/store/todo/actions';
import { TODO_ACTION_TYPES } from '../../../src/store/todo/constants';

describe('actions', () => {
  let targetTodo;
  let params;

  beforeAll(() => {
    targetTodo = {
      name: 'Schedule a meeting for 2:00 PM',
      completed: false,
    };
    params = {
      _page: 1,
      _limit: 10,
    };
  });

  it('should create an action to start load todo list', () => {
    const expectedAction = {
      type: TODO_ACTION_TYPES.LOAD_TODO_START,
      params,
    };
    expect(loadTodoStart(params)).toEqual(expectedAction);
  });

  it('should create an action to load todo list success', () => {
    const expectedAction = {
      type: TODO_ACTION_TYPES.LOAD_TODO_SUCCESS,
      payload: params,
    };
    expect(loadTodoSuccess(params)).toEqual(expectedAction);
  });

  it('should create an action to load todo list fail', () => {
    const expectedAction = {
      type: TODO_ACTION_TYPES.LOAD_TODO_FAIL,
      payload: params,
    };
    expect(loadTodoFail(params)).toEqual(expectedAction);
  });

  it('should create an action to add a todo', () => {
    const expectedAction = {
      type: TODO_ACTION_TYPES.ADD_TODO_SUCCESS,
      payload: targetTodo,
    };
    expect(addTodoSuccess(targetTodo)).toEqual(expectedAction);
  });

  it('should create an action to remove a todo', () => {
    const expectedAction = {
      type: TODO_ACTION_TYPES.REMOVE_TODO_SUCCESS,
      payload: targetTodo,
    };
    expect(removeTodoSuccess(targetTodo)).toEqual(expectedAction);
  });

  it('should create an action to toggle a todo status', () => {
    const expectedAction = {
      type: TODO_ACTION_TYPES.TOGGLE_TODO_STATUS_SUCCESS,
      payload: targetTodo,
    };
    expect(toggleTodoStatusSuccess(targetTodo)).toEqual(expectedAction);
  });
});
