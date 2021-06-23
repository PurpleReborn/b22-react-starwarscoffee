import React, { Component } from 'react'
import {BrowserRouter, Switch, Route} from 'react-router-dom'
import Home from './pages/home'
import Product from './pages/product'
import Details from './pages/details'
import Yourcart from './pages/yourcart'
import History from './pages/history'
import Login from './pages/login'
import SignUp from './pages/signup'
import Navbar from './components/Navbar'
import Payments from './pages/yourcart'


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
          <Route path="/yourcart" exact component={Yourcart} />
          <Route path="/history" exact component={History} />
          <Route path="/login" exact component={Login} />
          <Route path="/signUp" exact component={SignUp} />
          <Route path="/carts" component={Payments} />
          

          </Switch>
        </BrowserRouter>

        )
      }
    }

const mapStateToProps = state => ({
  auth: state.auth
})

export default connect(mapStateToProps)(App)
