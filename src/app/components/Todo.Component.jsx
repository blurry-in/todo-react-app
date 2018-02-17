import React from 'react';
import PropTypes from 'prop-types';
import './Todo.Component.scss';

const TodoComponent = props => (
  <div className="todo">
    <div className="todo-container">
      <div className="title">{props.title}</div>
      <div className="author">- {props.author}</div>
    </div>
  </div>
);

TodoComponent.propTypes = {
  title: PropTypes.string.isRequired,
  author: PropTypes.string,
};

TodoComponent.defaultProps = {
  author: 'Unknown',
};

export default TodoComponent;
