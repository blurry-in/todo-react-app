import React from 'react';
import PropTypes from 'prop-types';
import './App.Component.scss';


const AppComponent = props => (
  <div className="app-component">
    The App Component
    <button className="btn btn-primary">The Button</button>
    {`${props.data.dataVisible}`}
  </div>
);

AppComponent.propTypes = {
  data: PropTypes.shape({
    dataVisible: PropTypes.bool,
  }).isRequired,
};

export default AppComponent;
