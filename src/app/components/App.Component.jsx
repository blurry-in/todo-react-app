import React from 'react';
import HeaderComponent from './Header.Component';
import FooterComponent from './Footer.Component';
import BodyComponent from './Body.Component';
import './App.Component.scss';

const AppComponent = () => (
  <div className="container">
    <HeaderComponent />
    <BodyComponent />
    <FooterComponent />
  </div>
);

export default AppComponent;
