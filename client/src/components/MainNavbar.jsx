import React, { useState, useEffect } from 'react'

import logo from '../logo.svg'
import { NavLink } from 'react-router-dom'
import { withRouter } from 'react-router'

function MainNavbar(props) {
  return (
    <nav className="App-header">
      <img src={logo} className="App-logo" alt="logo" />
      <h1 className="App-title">Blabladet</h1>
      <NavLink to="/" exact>
        Home
      </NavLink>
      <NavLink to="/extension">Extension</NavLink>
    </nav>
  )
}

export default withRouter(MainNavbar)
