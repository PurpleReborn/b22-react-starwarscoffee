import React, { Component } from 'react'
import {BrowserRouter, Switch, Route} from 'react-router-dom'
import Home from './pages/Home'
import Product from './pages/Product'
import Details from './pages/Details'
import History from './pages/History'
import Login from './pages/Login'
import SignUp from './pages/Signup'
import Navbar from './components/Navbar'
import Payments from './pages/Yourcart'
import PrivateRoute  from './components/PrivateRoute'
import Profile from './pages/Profile'
import HistoryDelete from './pages/HistoryDelete'
import Chat from './pages/Chat'


import {connect} from 'react-redux'

class App extends Component {
    render() {
      // const {onAuth} = this.props.auth
      return (

        <BrowserRouter>
        <Navbar/>
{/*     

        {!onAuth && <Navbar />} */}
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

          <PrivateRoute path="/chat">
            <Chat />
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
