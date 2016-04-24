import React from 'react'

const Footer = props => (
  <footer>
    <h6 style={{color: 'red', display: 'inline'}}>
      {process.env.NODE_ENV.toUpperCase()}
    </h6>
  </footer>
);

export default Footer