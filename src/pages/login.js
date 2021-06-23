import '../App.css'
import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import logo from '../assets/assets1/coffe-icon.png'
import bg5 from '../assets/assets2/bg2.png'
import google from '../assets/assets2/google.png'
import Footer from '../components/Footer'
import { connect } from 'react-redux'
import { toggleAuth,authLogin } from '../redux/actions/auth'

class Login extends Component {
    state ={
        email: '',
        password:''
    }

    componentDidMount(){
        this.props.toggleAuth()
    }
    onLogin = (e)=>{
        e.preventDefault()
        const {email, password}= this.state
        this.props.authLogin(email, password)

    }
    componentDidUpdate(){
        const {token} = this.props.auth
        if(token!==null){
            this.props.toggleAuth()
            this.props.history.push('/')
        }
    }
    render() {
        const {errMessage} = this.props.auth
        return (
            <div>
                
            
    <main>


            <div className="flex">

            <div className="flex">
            <img src={bg5} alt="bg5" />
            </div>

            <div className="flex-1 pt-16 ">

                <div className="flex  justify-between ml-14 mr-28">
                <div className="flex space-x-3 ">
                    <div>
                        <img src={logo} alt="Logo" />
                    </div>
                    <Link to ="/"><div id="coffe_shop" className="items-center text-xl font-bold" >
                        Coffee Shop
                    </div></Link>
                </div>

                <div className="flex">
                    <Link to="/signUp"><button className="bg-yellow-400 text-yellow-900 hover:bg-yellow-200 font-bold py-3 px-16 rounded-full ">
                        Sign Up
                        </button></Link>
                </div>
            </div>

            <div className="text-4xl font-bold text-yellow-900 text-center pt-16 pb-20">Login</div>
            <div className="flex justify-center">
                

            <form onSubmit={this.onLogin}>
                
            {errMessage!=='' && <div className="pl-3 bg-red-300 text-red-600 mb-10  pt-2 pb-2">{errMessage}</div>}

                    <label className="block text-gray-700 text-sm font-bold mb-3.5 font-bold text-xl" >
                        Email Adress :
                    </label>
                    <input onChange={e=>this.setState({email: e.target.value})} className="border border-gray-400 rounded-2xl py-2 px-10 text-gray-700 leading-tight focus:outline-none  text-xl " id="email" type="email" placeholder="Enter your email adress" />

                    <label className="block text-gray-700 text-sm font-bold mb-3.5 font-bold text-xl mt-7" for="passowrd">
                        Password :
                    </label>
                    <input onChange={e=>this.setState({password: e.target.value})} className="border border-gray-400 rounded-2xl py-2 px-10 text-gray-700 leading-tight focus:outline-none  text-xl pb-3.5" id="password" type="text" placeholder="Enter your password" />

                    <a href="forgot.html"><label className="block text-gray-700 text-sm font-bold mb-3.5 font-bold text-xl mt-7" for="phone number">
                        Forgot password?
                    </label></a>

                


                <div className="flex justify-center">
                <button className="text-xl font-bold bg-yellow-400 text-yellow-900 hover:bg-yellow-200 font-bold py-3 px-16 rounded-2xl btn2 mt-14 btn-google" type="submit">
                    Login
                </button>
                </div>

                <div className="flex justify-center">
                    
                
                <button className="flex justify-center text-xl font-bold bg-white shadow-2xl text-black hover:bg-yellow-200 font-bold py-3 px-16 rounded-2xl btn-google mt-6">
                    <div className="flex mt-auto mb-auto">
                    <img src={google} alt="google" className="py-auto pr-5" />
                    Sign up with Google
                    </div>
                </button>
                
                </div>

                </form>


            </div>

            </div>


            </div>

            <div>

            <div className="flex justify-center">
                <div id="rect2" className="flex justify-between items-center shadow-2xl bg-white h-48 rounded-md px-20 ">
                    <div className="leading-10">Get your member <br/> card now! <br/> 
                    <span className="text-base font-normal" >Let's see the deals and pick yours!</span></div>

                    <div><button className=" mt-5 mx-auto text-base font-bold bg-yellow-400 hover:bg-yellow-200 text-yellow-700 font-semibold py-4 px-20 border border-yellow-400 rounded-lg shadow-2xl ">
                        Create Now
                </button></div>
                </div>
                </div>


                <div className="pb-20 bg-gray-100"></div>
                <Footer/>

            </div>

            </main>

            </div>
        )
    }
}

const mapStateToProps = state => ({
    auth: state.auth
})

const mapDispatchToProps = {toggleAuth, authLogin}

export default connect(mapStateToProps, mapDispatchToProps)(Login)