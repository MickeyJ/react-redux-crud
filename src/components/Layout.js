import React, { Component } from 'react'

import Header from './Header/Header'
import CommentIndex from './Comments/Index'
import Footer from './Footer/Footer'

const Layout = () =>{
  require('../style/main.scss');
  return(
    <div id="layout">
      <Header />
      <CommentIndex />
      <Footer />
    </div>
  )
};

export default Layout