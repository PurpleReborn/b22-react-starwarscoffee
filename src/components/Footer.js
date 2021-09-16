import React, { Component } from 'react'
import '../App.css'
import logo from '../assets/assets1/coffe-icon.png'
import fb from '../assets/assets1/fb.png'
import tweet from '../assets/assets1/twit.png'
import instagram from '../assets/assets1/ig.png'

export default class Footer extends Component {
    render() {
        return (
            
        <div className="bg-gray-100 footer">

        <div className="flex flex-col mx-4 md:mx-0 md:flex-row justify-around pt-24 md:-ml-40 ">
        <div>
            <div className="flex space-x-3">
                <div>
                <img src={logo} alt="Logo" />
                </div>
                <div id="coffe_shop" className="items-center font-bold md:text-xl" >
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
            
            <div className="pt-7 md:pb-0 pb-4" >©2020CoffeeStore</div>
        </div>

        <div className="flex -mr-44 md:pb-0 pb-10">
        <div className="leading-10 text-sm md:text-lg pr-32" >
            <span className="font-medium text-black"> Product </span> <br />
            Download <br />
            Pricing <br />
            Locations <br />
            Countries <br />
            Blog <br />
        </div>

        <div className="leading-10 text-sm md:text-lg" >
            <span className="font-medium text-black"> Engage </span> <br />
            Coffe Shop ?  <br />
            FAQ <br />
            About Us <br />
            Privacy Policy <br />
            Terms of Service <br />
        </div>
        </div>

        </div>

        </div>
        )
    }
}
