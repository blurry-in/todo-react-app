import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import AppComponent from '../components/App.Component';

class AppContainer extends React.Component {
  componentWillMount() {
    console.log(this.props.AppReducer);
  }

  render() {
    return <AppComponent data={this.props.AppReducer} />;
  }
}

const mapStateToProps = state => ({
  AppReducer: state.AppReducer,
});

AppContainer.propTypes = {
  AppReducer: PropTypes.shape({}).isRequired,
};

export default connect(mapStateToProps)(AppContainer);
