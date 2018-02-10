import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { combineReducers, createStore } from 'redux';
import 'bootstrap-sass/assets/stylesheets/_bootstrap.scss';
import AppContainer from './app/containers/App.Container';
import AppReducer from './app/reducers/App.Reducer';

const combinedReducers = combineReducers({
  AppReducer,
});

const store = createStore(combinedReducers);

ReactDOM.render(
  <Provider store={store} >
    <AppContainer />
  </Provider>
  , document.getElementById('root'),
);
