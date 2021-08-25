import React, { useEffect } from 'react'
import '../App.css'
import { Link } from 'react-router-dom'
import vector from '../assets/assets3/Vector.png'
import chat from '../assets/assets3/chat.png'
import ujung from '../assets/assets3/ujung.png'
import logo from '../assets/assets1/coffe-icon.png'
import { authLogout } from '../redux/actions/auth'
import { getUser} from '../redux/actions/user'

import {connect} from 'react-redux'

const RightComponent = connect((state) => ({ auth: state.auth }), {authLogout})(({ auth, authLogout: logout }) => {
        if( auth.token !== null ){
            return (
                <div>
                    <button onClick={logout} type="button" className="rounded-lg bg-yellow-400 font-medium text-yellow-900 hover:bg-yellow-300 w-20 h-7"> Logout </button> 
                </div>
            );
        }
        return (
            <div id="navbar2" class="flex text-yellow-900 justify-between space-x-7">

              <div>            
            <Link  to ="/login">
            <button class="bg-yellow-400  hover:bg-yellow-200 font-bold py-2 px-6 rounded-full">
             Login
            </button></Link>
            </div>  

            <Link to="/signUp"><button class="bg-yellow-400 hover:bg-yellow-200 font-bold py-2 px-6 rounded-full">
                Sign Up
            </button></Link>

            </div>
            
        )
    } )


function Navbar  ({  
    auth,
    user,
}) {
        useEffect(() => {
            // console.log(auth);
            getUser(auth.token);
          }, [auth.token]);
    
        return (
                         

            <nav className="bg-white ">
            <div className="flex justify-around items-center py-7">

                <div className="flex justify-between space-x-3">
                    <div>
                    <img src={logo} alt="Logo" />
                    </div>
                    <div id="coffe_shop" className="items-center font-bold" >
                    Starwars Coffee
                    </div>
                </div>

                <div>
                    <ul id="navbar" className=" flex justify-between space-x-7">
                    <Link  className="no-underline" to ="/"><li className="text-black font-medium ">Home  </li></Link>
                        <Link className="no-underline" to ="/product"><li className=" hover:text-yellow-700 font-medium text-black">Product  </li></Link>
                        <Link  className="no-underline" to ="/yourcart"><li className="hover:text-yellow-700 font-medium text-black">Your Cart </li></Link>
                        <Link  className="no-underline" to ="/history"><li className="hover:text-yellow-700 font-medium text-black">History  </li></Link>
                    </ul>
                </div>

                <div id="navbar2" className="flex justify-between space-x-7">
                    
                    {auth.token!==null ? 
                    (       
                    <div id="navbar2" className="flex justify-between space-x-7">
                
                    <img src={vector} alt="search" className="w-7 h-7" />
                    <Link to="/Chat"><img src={chat} alt="chat" className="w-7 h-7" /></Link> 
                    <Link to="/profile"><img alt="" src={user.data.picture === null ? ujung : `http://localhost:8080${user.data.picture}` } className="w-7 h-7 rounded-full" /></Link>

                        <RightComponent />

                        
                    </div> 
                    ):(
                        <div id="navbar2" className="flex justify-between space-x-7">
                            
                        <Link to ="/login"><button className="bg-white hover:bg-yellow-200 font-bold py-2 px-6 rounded-full">
                        Login
                        </button></Link>
            
                        <Link to="/signUp"><button className="bg-yellow-400 hover:bg-yellow-200 font-bold py-2 px-6 rounded-full">
                            Sign Up
                        </button></Link>
            
                        </div>
                    )}

                </div>
                    
                </div>
    </nav>
        )
    }


    const mapStateToProps = state => ({
        auth : state.auth,
        user: state.user
    })
    
    const mapDispatchToProps = {getUser}

export default connect(mapStateToProps,mapDispatchToProps)(Navbar)