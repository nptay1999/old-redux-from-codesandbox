import { ADD_TODO, DELETE_TODO, GET_TODOS, MARK_COMPLETE } from "./todoType";

const initState = {
  todos: []
};

const reducer = (state = initState, action) => {
  switch (action.type) {
    case GET_TODOS:
      return {
        ...state,
        todos: action.payload
      };
    case MARK_COMPLETE:
      return {
        ...state,
        todos: state.todos.map((todo) => {
          if (todo.id === action.payload)
            return { ...todo, completed: !todo.completed };
          return { ...todo };
        })
      };
    case ADD_TODO:
      return {
        ...state,
        todos: [...state.todos, { ...action.payload }]
      };
    case DELETE_TODO:
      return {
        ...state,
        todos: state.todos.filter((todo) => todo.id !== action.payload)
      };
    default:
      return state;
  }
};

export default reducer;
