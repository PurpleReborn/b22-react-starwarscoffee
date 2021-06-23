import React, { Component } from 'react' 
import { connect } from 'react-redux'
import Footer from '../components/Footer'
import Counts from '../components/Count'
import '../App.css'

import { getDetails } from '../redux/actions/items'
import { addItems } from '../redux/actions/carts'

class Details extends Component {
    componentDidMount(){
        this.props.getDetails(this.props.match.params.id)
    }
    render() {
        const {details} = this.props.items
        return (
            <div>

                <div className="flex flex-row mb-20 justify-center space-x-20 mt-20">

                    <div className="flex flex-col text-center">
                        <div className="pt-7 font-bold mb-10"> {details?.name}</div>
                        <div className="w-80 h-80 bg-yellow-900 rounded-full mb-10"></div>
                        <div className="text-5xl uppercase font-black mb-4">{details?.name}</div>
                        <div className="text-4xl uppercase font-medium mb-10">{details?.price}</div>
                        <button className="w-80 h-20 bg-yellow-900 hover:bg-yellow-600  rounded-lg text-white mb-4" onClick={()=>this.props.addItems(details)}>Add to Cart</button>
                        <button className="w-80 h-20 bg-yellow-400 hover:bg-yellow-200  rounded-lg">Ask a Staff</button>
                    </div>

                    <div >

                    <div className="desc bg-gray-100 rounded-lg"> 
                    
                    <div className="pt-20 pl-20 text-2xl text-yellow-900">Delivery only on Monday to friday at  1 - 7 pm</div>

                    <div className="pt-11 pl-20 text-2xl text-yellow-900 pr-20">{details?.description}</div>

                    <div className="pt-14 pl-28  text-2xl text-black ml-32 font-bold ">Choose a size</div>

                        <div className="flex flex-row justify-between mr-48 ml-48 pt-11">
                        <div className="flex  font-bold text-3xl hover:bg-yellow-900 bg-yellow-400 w-14 h-12 flex flex-col justify-center text-center rounded-full">R
                        </div>

                        <div className="flex font-bold text-3xl hover:bg-yellow-900 bg-yellow-400 w-14 h-12 flex flex-col justify-center text-center rounded-full">L
                        </div>

                        <div className="flex font-bold text-3xl hover:bg-yellow-900 bg-yellow-400 w-14 h-12 flex flex-col justify-center text-center rounded-full">XL
                        </div>
                        </div>

                    </div> 

                    <div class="text-center pt-8 text-xl font-bold">Choose Delivery Methods</div>
                    <div class="flex justify-between pt-7 pl-32 pr-32">
                        <div> <button class="bg-gray-100 w-24 h-12 text-gray-500 rounded-xl text-base font-bold focus:bg-yellow-900 focus:text-white">
                            Dine in</button> 
                        </div>

                        <div> <button class="bg-gray-100 w-36 h-12 text-gray-500 rounded-xl text-base font-bold focus:bg-yellow-900 focus:text-white">
                            Door Delivery</button> 
                        </div>

                        <div> <button class="bg-gray-100  w-24 h-12 text-gray-500 rounded-xl text-base font-bold  focus:bg-yellow-900 focus:text-white">
                            Pick up</button> 
                        </div>
                        
                    </div>
                    <div class="flex  flex-row justify-center pt-10 ">
                        <label for="email" class="mr-4 text-xl">Set time :</label>
                        <input type="text" name="email" class="  bg-transparent border-0 border-b-2 appearance-none focus:outline-none focus:ring-0 focus:border-yellow-900 border-yellow-900 w-72 "/>
                    </div>

                    </div>


                </div>

                
                
                <div className="flex flex-row space-x-12 justify-center  -mb-20"> 


                    <div className="bg-white flex flex-row justify-between box-detail h-40 shadow-lg pt-10 pl-10 pr-10">
                        <div className="flex flex-row space-x-10">
                        <div className="bg-yellow-900 w-20 h-20 rounded-full"></div>
                        <div className="flex flex-col">
                            <div className="pt-7 font-bold uppercase">{details?.name}</div>
                        </div>
                        </div>

                        <div className="pt-7" >
                        <Counts />
                        </div>

                    </div>

                    <div> <button className="bg-yellow-400 hover:bg-yellow-200 rounded-md w-60 h-40 font-bold ">CHECKOUT</button> </div>

                </div>

                
                <Footer/>
                
            </div>
        )
    }
}

const mapStateToProps = state => ({
    items: state.items
})

const mapDispatchToProps = {getDetails,addItems}

export default connect(mapStateToProps, mapDispatchToProps)(Details)