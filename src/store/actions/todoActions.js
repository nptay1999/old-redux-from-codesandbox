import axios from "axios";
import {
  ADD_TODO,
  DELETE_TODO,
  GET_TODOS,
  MARK_COMPLETE
} from "../reducer/todoType";

export const markComplete = (id) => (dispatch) => {
  dispatch({
    type: MARK_COMPLETE,
    payload: id
  });
};

export const addTodo = (newTodo) => async (dispatch) => {
  try {
    await axios("https://jsonplaceholder.typicode.com/todos", newTodo);
    dispatch({
      type: ADD_TODO,
      payload: newTodo
    });
  } catch (error) {
    console.log(error);
  }
};

export const deleteTodo = (id) => (dispatch) => {
  dispatch({
    type: DELETE_TODO,
    payload: id
  });
};

export const getTodos = () => async (dispatch) => {
  try {
    const response = await axios.get(
      "https://jsonplaceholder.typicode.com/todos?_limit=5"
    );
    dispatch({
      type: GET_TODOS,
      payload: response.data
    });
  } catch (error) {
    console.log(error);
  }
};
