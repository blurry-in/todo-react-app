import React from 'react';
import './Footer.Component.scss';

const FOOTER_LABEL = 'Copyright and Stuff';
const FooterComponent = () => (
  <div className="footer">
    <div className="title text-center">{FOOTER_LABEL}</div>
  </div>
);

export default FooterComponent;
