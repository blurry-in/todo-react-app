import React from 'react';
import TodoComponent from './Todo.Component';
import './Body.Component.scss';

const BodyComponent = () => (
  <div className="body">
    <TodoComponent author="Author Name" title="The title" />
    <TodoComponent author="Author Name" title="The title" />
    <TodoComponent author="Author Name" title="The title" />
  </div>
);

export default BodyComponent;
