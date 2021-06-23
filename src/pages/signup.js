import React, { Component } from 'react'
import '../App.css'
import { Link } from 'react-router-dom'
import bg5 from '../assets/assets2/bg2.png'
import logo from '../assets/assets1/coffe-icon.png'
import google from '../assets/assets2/google.png'
import fb from '../assets/assets1/fb.png'
import tweet from '../assets/assets1/twit.png'
import instagram from '../assets/assets1/ig.png'

export default class SignUp extends Component {
    render() {
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
                <Link to ="/login"><button className="bg-yellow-400 text-yellow-900 hover:bg-yellow-200 font-bold py-3 px-16 rounded-full ">
                        Login
                        </button></Link>
                </div>
            </div>

            <div className="text-4xl font-bold text-yellow-900 text-center pt-16 pb-20">Sign Up</div>
            <div className="flex justify-center">
            <form action="">
                
                    <label className="block text-gray-700 text-sm font-bold mb-3.5 font-bold text-xl" for="email">
                        Email Adress :
                    </label>
                    <input className="border border-gray-400 rounded-2xl py-2 px-10 text-gray-700 leading-tight focus:outline-none  text-xl " id="email" type="text" placeholder="Enter your email adress" />

                    <label className="block text-gray-700 text-sm font-bold mb-3.5 font-bold text-xl mt-7" for="passowrd">
                        Password :
                    </label>
                    <input className="border border-gray-400 rounded-2xl py-2 px-10 text-gray-700 leading-tight focus:outline-none  text-xl pb-3.5" id="email" type="text" placeholder="Enter your password" />

                    <label className="block text-gray-700 text-sm font-bold mb-3.5 font-bold text-xl mt-7" for="phone number">
                        Phone Number :
                    </label>
                    <input className="border border-gray-400 rounded-2xl py-2 px-10 text-gray-700 leading-tight focus:outline-none  text-xl pb-3.5" id="email" type="text" placeholder="Enter your phone number" />
                
            </form>


            </div>

                <div className="flex justify-center">
                <button className="text-xl font-bold bg-yellow-400 text-yellow-900 hover:bg-yellow-200 font-bold py-3 px-16 rounded-2xl btn2 mt-14 btn-google">
                    Sign Up
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

            </div>


            </div>


            <div className="bg-gray-100 footer">

                <div className="flex ">
                <div id="rect2" className="flex justify-between items-center shadow-2xl bg-white h-48 rounded-md px-20 ">
                    <div className="leading-10">Get your member <br/> card now! <br/> 
                    <span className="text-base font-normal" >Let's see the deals and pick yours!</span></div>

                    <div><button className=" mt-5 mx-auto text-base font-bold bg-yellow-400 hover:bg-yellow-200 text-yellow-700 font-semibold py-4 px-20 border border-yellow-400 rounded-lg shadow-2xl ">
                        Create Now
                </button></div>
                </div>
                </div>

                <div className="flex justify-around pt-24 -ml-40">
                <div>
                    <div className="flex space-x-3">
                        <div>
                        <img src={logo} alt="Logo" />
                        </div>
                        <div id="coffe_shop" className="items-center" >
                            Coffee Shop
                        </div>
                    </div>

                    <div id="text9" className="w-80 font-medium text-base pb-7 pt-7">Coffee Shop is a store that sells some good meals, and especially coffee. We provide high quality beans 
                    </div>

                    <div className="flex">
                    <img src={fb} alt="fb" className="mr-2 w-10 h-10" />
                    <img src={tweet} alt="tweet" className="mx-2 w-10 h-10" />
                    <img src={instagram} alt="instagram" className="mx-2 w-10 h-10" />
                    </div>
                    
                    <div className="pt-7" >©2020CoffeeStore</div>
                </div>

                <div className="flex -mr-44">
                <div className="leading-10 text-lg pr-32" >
                    <span className="font-medium text-black"> Product </span> <br/>
                    Download <br/>
                    Pricing <br/>
                    Locations <br/>
                    Countries <br/>
                    Blog <br/>
                </div>

                <div className="leading-10 text-lg" >
                    <span className="font-medium text-black"> Engage </span> <br/>
                    Coffe Shop ?  <br/>
                    FAQ <br/>
                    About Us <br/>
                    Privacy Policy <br/>
                    Terms of Service <br/>
                </div>
                </div>

                </div>

            </div>


            </main>
                
            </div>
        )
    }
}
