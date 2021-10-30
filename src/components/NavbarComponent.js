import React from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";

const NavbarComponent = ({ todos }) => {
  const length = todos.length;
  return (
    <div className="navbar">
      <div>Home</div>
      <div>About</div>
      <div>Total todos: {length}</div>
    </div>
  );
};

NavbarComponent.propTypes = {
  todos: PropTypes.array.isRequired
};

const mapStateToProps = (state) => ({
  todos: state.todoReducer.todos
});

export default connect(mapStateToProps, {})(NavbarComponent);
