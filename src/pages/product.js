import '../App.css'
import React, { Component } from 'react'
import imgLeft from '../assets/assets3/img-left.png'
import img2 from '../assets/assets3/img-2.png'
import Footer from '../components/Footer'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'

import { getItems} from '../redux/actions/items'




class Product extends Component {
constructor(props) {
       super(props);
       this.state = {
         search: '',
         page: '',
        sort: '',
        order: ''
    };
}


    componentDidMount() {
        this.props.getItems();
    }

    // loadMore =()=>{
    //     const {nextLink} = this.props.items
    //     this.props.getItems(nextLink)
    // }



    render() {
        const {data} = this.props.items
        return (
            <div className="flex flex-col divide-y-2">
                
                

            
            <div className="flex flex-row divide-x-2 ">

        <div className="flex-col flex-2 pr-16" >
            <div className="font-bold text-2xl text-yellow-900 mt-6 mb-10 text-center">Promo for you</div>
            <div className="mb-10 text-center font-medium">Coupons will be updated every weeks. <br /> Check them out! </div>
                <div className="flex flex-row ">

                    <div className="flex flex-col divide-y-2 divide-black space-y-5 divide-dashed box1 bg-yellow-200  rounded-3xl ml-20 text-center" >

                        <div className="flex-1">
                            <div className="flex  justify-center pt-16">
                            <img src={imgLeft} alt="img-left" className="rounded-full" />
                            </div>
                            <div className="mt-2 text-xl font-bold text-black">Beef Spaghetti <br />20% OFF</div>
                            <div className="w-64 ml-auto mr-auto ">Buy 1 Choco Oreo and get 20% off for Beef Spaghetti</div>
                        </div>

                        <div className="flex-1 pt-4">
                            <div className="text-base">COUPON CODE</div>
                            <div className="font-bold text-3xl mb-3 mt-3">FNPR15RG</div>
                            <div className="text-xs">Valid untill October 10th 2020</div>
                        </div>


                    </div>

                    <div className="box2 bg-black rounded-r-3xl mt-auto mb-auto"  ></div>
                    <div className="box3 bg-yellow-800  rounded-r-3xl mt-auto mb-auto"  ></div>
                </div>
                <div className="flex mr-auto ml-auto text-center flex flex-row justify-center" >
                    <button className="text-xl font-bold bg-yellow-800 text-white hover:bg-yellow-200 font-bold rounded-2xl btn2 mt-10">
                        Apply Coupon
                    </button>
                </div>
                <div className="mt-24 ml-14 leading-6 pb-10">
                    <span className="font-semibold">Terms and Condition </span> <br />
                    1. You can only apply 1 coupon per day <br />
                    2. It only for dine in <br />
                    3. Buy 1 get 1 only for new user <br />
                    4. Should make member card to apply coupon 
                </div>
        </div>

        <div className=" flex-1">
            <div className="flex justify-around ml-28 mr-28 mt-8 mb-10" >
                <div className="hover:text-yellow-900">Favorite Product</div>
                <div className="hover:text-yellow-900">Coffee</div>
                <div className="hover:text-yellow-900">Non Coffee</div>
                <div className="hover:text-yellow-900">Foods</div>
                <div className="hover:text-yellow-900">Add-on</div>
            </div>

            <div className="pt-5 flex-1">
                        <div className="relative">
                        <i className="fas fa-search text-black mt-3 ml-5 absolute"></i>
                            <input 
                            type="text" placeholder="Search" 
                            className="rounded-full h-10 w-60 pl-12 ml-20 bg-gray-200 hover:bg-gray-300" 
                            />
                        </div>
                    </div>

        

            
            <div className="grid grid-cols-4 gap-20 mr-20 ml-20 mt-28 ">

            {data.map(items => {
            return(

            <Link  className="no-underline" to={`/product/${items.id}`}>
            <div key={items.id.toString()} className="item1 border-2 border-transparent border-3xl rounded-3xl hover:border-yellow-400">
            <div className=" w-40  h-52 bg-white rounded-3xl shadow-2xl ">
            <div>
                <img src={img2} alt="img2" className="rounded-full -mt-10 ml-4 absolute" />
            </div>

            <div className="text-center pt-24 w-20 mx-auto leading-5 font-black text-black no-underline text-xl ">{items.name}</div>

            <div className="text-center mt-1 text-yellow-900 text-base font-bold">IDR.{items.price.toLocaleString('en')}</div>

            </div>
            </div>
            </Link>
            )

            })}



            </div>

            {/* <button className="bg-yellow-400 px-11 py-2 rounded-md" onClick={this.loadMore}>Load More</button> */}



        </div>
        </div>


            <Footer />

            </div>
        )
    }
}

const mapStateToProps = state => ({
    items: state.items
})

const mapDispatchToProps = {getItems}

export default connect(mapStateToProps, mapDispatchToProps)(Product)
