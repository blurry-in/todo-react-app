import React from 'react';
import './Header.Component.scss';

const HEADER_LABEL = 'TODO REACT APP';
const HeaderComponent = () => (
  <div className="header">
    <div className="title text-center">{HEADER_LABEL}</div>
  </div>
);

export default HeaderComponent;
