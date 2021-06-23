import '../App.css'
import React, { Component } from 'react'
import img1 from '../assets/assets8/img1.png'
import Footer from '../components/Footer'
import { connect } from 'react-redux'



class Payments extends Component {
    render() {
        const {items} = this.props.carts
        return (
            <div>
            
          

            
            <div className ="bg2">

        <div className ="text-white text1 font-bold w-80 pt-14 ml-40">Checkout your item now!

        </div>

        <div className ="flex flex-row justify-between ml-40 mr-32 mt-14  ">

            <div className ="bg-white box6  rounded-2xl flex flex-col">
                <div className ="text-center font-bold text-4xl mt-20 mb-20">Order Summary</div>

                <div className ="flex flex-col ml-11 mr-11 divide-y-4 space-y-4">



                <div className ="flex flex-col">
                {items.map(item => (
                    <div className ="flex flex-row justify-between" key={item.id}>
                        <div><img src={img1} alt="assets8" /></div>
                        <div className ="text2 font-normal text-xl">{item.name} <br/> x 1 Regular</div>
                        <div className ="text-xl">{item.price}</div>
                    </div>
                 ))}
                </div>

                <div className ="flex flex-col pt-4">
                    <div className ="flex flex-row justify-between text-xl mr-2">
                    <div>SUBTOTAL</div>
                    <div>IDR 120.000</div>
                    </div>

                    <div className ="flex flex-row justify-between text-xl mr-4 pt-2">
                    <div>TAX & FEES</div>
                    <div>IDR 20.000</div>
                    </div>

                    <div className ="flex flex-row justify-between text-xl mr-5 pt-2">
                    <div>SHIPPING</div>
                    <div>IDR 10.000</div>
                    </div>

                    <div className ="flex flex-row justify-center space-x-32 pb-4 pt-16 -ml-11  font-bold text-3xl bg-white rounded-2xl boxtotal">
                    <div>TOTAL</div>
                    <div>IDR 150.000</div>
                    </div>

                </div>

                </div>

            </div>

            <div className ="flex flex-col">

            <div className ="flex flex-row justify-between pb-3">
            <div className ="text-white font-bold text-2xl ">Address details</div>
            <div className ="flex flex-col justify-center text-white font-bold text-base mr-2">edit</div>
            </div>
            
            <div className ="bg-white box7 rounded-3xl">
                <div className ="flex flex-col pt-7 pr-10 pl-10 divide-y-2 space-y-1">
                    <div className ="text-2xl font-medium"><span className ="font-bold">Delivery</span> to Iskandar Street</div>
                    <div className ="text-2xl font-normal pt-1">Km 5 refinery road oppsite re
                        public road, effurun, Jakarta</div>
                    <div className ="text-2xl font-normal pt-1">+62 81348287878</div>
                </div>
            </div>

            <div className ="text-white font-bold text-2xl pb-3 pt-12">Payment method</div>

            <div className ="bg-white box8 rounded-3xl">
                <div className ="flex flex-col pt-10 pr-10 pl-10 divide-y-2 space-y-6">

                    <div className ="flex flex-row">
                    <div className ="pr-4 flex flex-col justify-center"><input type="radio" name="card" /></div>
                    <div className ="mr-4 flex flex-col rounded-xl bg-yellow-500 w-10 h-10 text-center justify-center"><i className ="fas  fa-credit-card"></i></div>
                    <div className ="text-2xl font-normal">Card</div>
                    </div>

                    <div className ="flex flex-row pt-2">
                    <div className ="pr-4 flex flex-col justify-center"><input type="radio" name="card" /></div>
                    <div className ="mr-4 flex flex-col rounded-xl bg-yellow-900 w-10 h-10 text-center justify-center text-lg"><i className ="fas fa-university "></i></div>
                    <div className ="text-2xl font-normal">Bank account</div>
                    </div>

                    <div className ="flex flex-row pt-2">
                    <div className ="pr-4 flex flex-col justify-center"><input type="radio" name="card" /></div>
                    <div className ="mr-4 flex flex-col rounded-xl bg-yellow-300 w-10 h-10 text-center justify-center text-lg"><i className ="fas fa-shipping-fast"></i></div>
                    <div className ="text-2xl font-normal">Cash on delivery</div>
                    </div>
                    
                </div>
            </div>

            <div className ="pt-12"><button className ="btn bg-yellow-900 text-white font-bold text-xl text-center hover:bg-yellow-700 rounded-3xl ">Confirm and Pay

            </button></div>

            </div>

        </div>

        </div>


        <Footer />

        </div>





)
}
}

const mapStateToProps = state => ({
    carts:state.carts
})

export default connect(mapStateToProps)(Payments)
