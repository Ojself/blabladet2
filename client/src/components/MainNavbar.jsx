import React from 'react'
import api from '../api'
import logo from '../logo.svg'
import { Link, NavLink } from 'react-router-dom'
import { withRouter } from 'react-router'

function MainNavbar(props) {
  function handleLogoutClick(e) {
    api.logout()
  }
  return (
    <nav className="App-header">
      <img src={logo} className="App-logo" alt="logo" />
      <h1 className="App-title">Blabladet</h1>
      <NavLink to="/" exact>
        Home
      </NavLink>
      <NavLink to="/blabladet">extension</NavLink>
      <NavLink to="/">Home</NavLink>
      {/* <Link to="/" onClick={handleLogoutClick}>
          Logout
        </Link> */}
    </nav>
  )
}

export default withRouter(MainNavbar)
