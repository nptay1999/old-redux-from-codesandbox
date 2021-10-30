import React, { useEffect } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import classnames from "classnames";
import {
  markComplete,
  deleteTodo,
  getTodos
} from "../store/actions/todoActions";

const TodosComponent = ({ todos, markComplete, deleteTodo, getTodos }) => {
  useEffect(() => {
    getTodos();
  }, [getTodos]);

  return (
    <div className="todo-list">
      {todos.map((todo) => (
        <div key={todo.id} className={classnames({ active: todo.completed })}>
          <span>
            <input
              type="checkbox"
              checked={todo.completed}
              onChange={markComplete.bind(this, todo.id)}
            />{" "}
            {todo.title}
          </span>
          <button onClick={deleteTodo.bind(this, todo.id)}>Delete</button>
        </div>
      ))}
    </div>
  );
};

TodosComponent.propTypes = {
  todos: PropTypes.array.isRequired,
  markComplete: PropTypes.func.isRequired,
  deleteTodo: PropTypes.func.isRequired,
  getTodos: PropTypes.func.isRequired
};

const mapStateToProps = (state) => ({
  todos: state.todoReducer.todos
});

export default connect(mapStateToProps, { markComplete, deleteTodo, getTodos })(
  TodosComponent
);
