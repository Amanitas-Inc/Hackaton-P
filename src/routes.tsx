import React from 'react'
import { BrowserRouter as Router, Route,Switch} from 'react-router-dom'
import { MainPage }  from './pages/MainPage'

export const Routes = () => {
  return (
    <Router>
      <Route exact path='/' component={MainPage} />
    </Router>
  )
}