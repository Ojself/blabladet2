import React from 'react'
import { Route, Switch } from 'react-router-dom'
import MainNavbar from './MainNavbar'
import Home from './pages/Home'
import Extension from './pages/Extension'

export default function App() {
  return (
    <div className="App">
      <MainNavbar />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/extension" exact component={Extension} />
        <Route render={() => <h2>404</h2>} />
      </Switch>
    </div>
  )
}
