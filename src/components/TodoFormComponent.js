import React, { useState } from "react";
import { connect } from "react-redux";
import { addTodo } from "../store/actions/todoActions";
import { v4 as uuidv4 } from "uuid";
import PropTypes from "prop-types";

const TodoFormComponent = ({ addTodo }) => {
  const [title, setTitle] = useState("");
  const handleSubmit = (event) => {
    event.preventDefault();
    const newTitle = title.trim();
    if (newTitle.length !== 0) {
      addTodo({ id: uuidv4(), title: newTitle, completed: false });
      setTitle("");
    }
  };
  return (
    <form className="todo-form" onSubmit={handleSubmit}>
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
    </form>
  );
};

TodoFormComponent.propTypes = {
  addTodo: PropTypes.func.isRequired
};

const mapStateToProps = () => ({});

export default connect(mapStateToProps, { addTodo })(TodoFormComponent);
