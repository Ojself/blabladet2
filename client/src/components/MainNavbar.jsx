import React from 'react'


import { NavLink } from 'react-router-dom'
import { withRouter } from 'react-router'

function MainNavbar(props) {
  return (
    <nav className="App-header">

      <h1 className="App-title">Blabladet</h1>
      <NavLink to="/" exact>
        Spill
      </NavLink>
      <NavLink to="/extension">Extension</NavLink>
    </nav>
  )
}

export default withRouter(MainNavbar)
