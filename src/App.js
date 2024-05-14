import {Component} from 'react'
import {Route, Switch, Redirect} from 'react-router-dom'

import Login from './components/Login'
import Home from './components/Home'
import Jobs from './components/Jobs'

import JobItemDetails from './components/JobItemDetails'
import NotFound from './components/NotFound'
import  ProtectedRoute from './components/ProtectedRoute'

import './App.css'

class App extends Component{
  render() {
    return(
     <Switch>
     <Route exact path="/login" Component={Login} />
     <ProtectedRoute exact path = "/" Component={Home} />
     <ProtectedRoute exact path ="/jobs" Component={Jobs} />
     <ProtectedRoute exact path="/jobs/:id" component={JobItemDetails} />
     <Route path ="/not-found" component={NotFound} />
     <Redirect to="not-found" />
     </Switch>
    )
  }
}

export default App
