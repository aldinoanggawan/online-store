import React from 'react'
import { Switch, Route } from 'react-router-dom'

import NavBar from './components/Navbar'
import HomePage from './pages/HomePage'

const App = () => {
  return (
    <>
      <NavBar/>
      <Switch>
        <Route path='/'>
          <HomePage/>
        </Route>
      </Switch>
    </>
  )
}

export default App