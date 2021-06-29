import React, { Component } from 'react'
import {BrowserRouter, Switch, Route} from 'react-router-dom'
import Home from './pages/home'
import Product from './pages/product'
import Details from './pages/details'
import History from './pages/history'
import Login from './pages/login'
import SignUp from './pages/signup'
import Navbar from './components/Navbar'
import Payments from './pages/yourcart'
import PrivateRoute  from './components/PrivateRoute'
import Profile from './pages/profile'
import HistoryDelete from './pages/HistoryDelete'


import {connect} from 'react-redux'

class App extends Component {
    render() {
      const {onAuth} = this.props.auth
      return (

        <BrowserRouter>

        {!onAuth && <Navbar />}
          <Switch>
            

          <Route path="/" exact component={Home} />
          <Route path="/product" exact component={Product} />
          <Route path="/product/:id"  component={Details} />
          <Route path="/login"  component={Login} />
          <Route path="/signUp"  component={SignUp} />
          <Route path="/history"  component={History} />
  

          <PrivateRoute path="/profile">
            <Profile />
          </PrivateRoute>


          <PrivateRoute path="/yourcart">
            <Payments />
          </PrivateRoute>



          <PrivateRoute path="/delete">
            <HistoryDelete />
          </PrivateRoute>
          

          </Switch>
        </BrowserRouter>

        )
      }
    }

const mapStateToProps = state => ({
  auth: state.auth
})

export default connect(mapStateToProps)(App)
