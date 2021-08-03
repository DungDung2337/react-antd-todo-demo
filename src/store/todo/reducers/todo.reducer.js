import { TODO_ACTION_TYPES } from '../constants';
import { v1 as uuidV1 } from 'uuid';

export const initialState = {
  loading: false,
  todos: [],
  errors: null,
};

export const todoReducer = (state = initialState, action) => {
  console.log(action);
  switch (action.type) {
    case TODO_ACTION_TYPES.LOAD_TODO_START:
      return {
        ...state,
        loading: true,
      };
    case TODO_ACTION_TYPES.LOAD_TODO_SUCCESS:
      return {
        ...state,
        loading: false,
        todos: action.payload,
      };
    case TODO_ACTION_TYPES.LOAD_TODO_FAIL:
      return {
        ...state,
        loading: false,
        errors: action.payload,
      };
    case TODO_ACTION_TYPES.ADD_TODO_SUCCESS:
      return Object.assign({}, state, {
        todos: state.todos.concat({
          ...action.payload,
          ...{
            id: action.payload.id ?? uuidV1(),
          },
        }),
      });
    case TODO_ACTION_TYPES.TOGGLE_TODO_STATUS_SUCCESS:
      return Object.assign({}, state, {
        todos: state.todos.map((todo) =>
          todo.id === action.payload.id
            ? { ...todo, completed: !todo.completed }
            : todo
        ),
      });
    case TODO_ACTION_TYPES.REMOVE_TODO_SUCCESS:
      return {
        todos: state.todos.filter((todo) => todo.id !== action.payload.id),
      };
    default:
      return state;
  }
};
