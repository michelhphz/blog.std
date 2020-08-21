import React, {Component} from 'react'
import {BrowserRouter, Switch, Route} from 'react-router-dom'
import firebase from './firebase'

import Header from './components/Header'
import Home from './components/Home'
import Login from './components/Login'
import Dashboard from './components/Dashboard'
import Register from './components/Register'
import './global.css'

class App extends Component{
  
  state = {
    firebaseInitalized: false
  }

  componentDidMount(){
    firebase.isInitialized().then(resultado => {
      this.setState({firebaseInitalized: resultado})
    })
  }

  render(){
    return this.state.firebaseInitalized !== false ? (
      <BrowserRouter>
        <Header/>
        <Switch>
            <Route exact path='/' component={Home} />
            <Route exact path='/login' component={Login} />
			<Route exact path='/dashboard' component={Dashboard}/>
			<Route exact path='/register' component={Register}/>
        </Switch>
      </BrowserRouter>
    ) : (
      <h1>Carregando...</h1>
    )
  }
}

export default App;
