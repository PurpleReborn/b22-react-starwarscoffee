import React from 'react'
import '../App.css'
import { Link } from 'react-router-dom'
import vector from '../assets/assets3/Vector.png'
import chat from '../assets/assets3/chat.png'
import ujung from '../assets/assets3/ujung.png'
import logo from '../assets/assets1/coffe-icon.png'

import {connect} from 'react-redux'

const Navbar = ({auth}) => {
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
                    <ul id="navbar" className="flex justify-between space-x-7">
                        <li className="hover:text-yellow-700 font-medium text-gray-600"><Link to ="/">Home </Link> </li>
                        <li className="hover:text-yellow-700 font-medium text-gray-600"><Link to ="/product">Product </Link> </li>
                        <li className="hover:text-yellow-700 font-medium text-gray-600"><Link to ="/yourcart">Your Cart </Link> </li>
                        <li className="hover:text-yellow-700 font-medium text-gray-600"><Link to ="/history">History </Link> </li>
                    </ul>
                </div>

                <div id="navbar2" className="flex justify-between space-x-7">
                    
                    {auth.token!==null ? 
                    (       
                    <div id="navbar2" class="flex justify-between space-x-7">
                
                    <img src={vector} alt="search" class="w-7 h-7" />
                    <img src={chat} alt="chat" class="w-7 h-7" />
                    <img src={ujung} alt="people" class="w-7 h-7 rounded-full" />

                    </div> 
                    ):(
                        <>
                        <div id="navbar2" class="flex justify-between space-x-7">
                        
                        <Link to ="/login"><button class="bg-white hover:bg-yellow-200 font-bold py-2 px-6 rounded-full">
                        Login
                        </button></Link>

                        <Link to="/signUp"><button class="bg-yellow-400 hover:bg-yellow-200 font-bold py-2 px-6 rounded-full">
                            Sign Up
                        </button></Link>

                        </div>
                        </>
                    )}

                </div>
                    
                </div>
    </nav>
        )
    }


const mapStateToProps = state => ({
    auth: state.auth
})

export default connect(mapStateToProps)(Navbar)