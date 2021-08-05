import { TODO_ACTION_TYPES } from '../constants';

export const initialState = {
  loading: false,
  loadingForm: false,
  todos: {
    data: [],
    pagination: {
      _page: 1,
      _limit: 10,
      _totalRows: 0,
    },
  },
  errors: null,
};

export const todoReducer = (state = initialState, action) => {
  const { pagination, data } = state.todos;
  switch (action.type) {
    // Todo list
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

    // Add a todo item
    case TODO_ACTION_TYPES.ADD_TODO_START:
      return {
        ...state,
        loadingForm: true,
      };
    case TODO_ACTION_TYPES.ADD_TODO_FAIL:
      return {
        ...state,
        loadingForm: false,
      };
    case TODO_ACTION_TYPES.ADD_TODO_SUCCESS:
      pagination._totalRows += 1;
      const totalPages = Math.ceil(pagination._totalRows / pagination._limit);
      return Object.assign({}, state, {
        todos: {
          data:
            pagination._page === totalPages && data.length < pagination._limit
              ? [...data, action.payload]
              : [...data],
          pagination,
        },
        loadingForm: false,
      });

    // Change status a todo item
    case TODO_ACTION_TYPES.TOGGLE_TODO_STATUS_START:
      return {
        ...state,
        loading: true,
      };
    case TODO_ACTION_TYPES.TOGGLE_TODO_STATUS_FAIL:
      return {
        ...state,
        loading: false,
      };
    case TODO_ACTION_TYPES.TOGGLE_TODO_STATUS_SUCCESS:
      return Object.assign({}, state, {
        todos: {
          data: data.map((todo) =>
            todo.id === action.payload.id
              ? { ...todo, completed: !todo.completed }
              : todo
          ),
          pagination,
        },
        loading: false,
      });

    // Remove a todo item
    case TODO_ACTION_TYPES.REMOVE_TODO_START:
      return {
        ...state,
        loading: true,
      };
    case TODO_ACTION_TYPES.REMOVE_TODO_FAIL:
      return {
        ...state,
        loading: false,
      };
    default:
      return state;
  }
};
