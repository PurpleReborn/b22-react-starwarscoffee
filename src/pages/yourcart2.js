import '../App.css'
import React, { Component } from 'react'
import img1 from '../assets/assets8/img1.png'
import Footer from '../components/Footer'
import { connect } from 'react-redux'
import { getUser } from '../redux/actions/user'
import { createTransaction } from '../redux/actions/transaction'
import Swal from 'sweetalert2';


class Payments extends Component {
  componentDidMount() {
    const {token} = this.props.auth
    console.log(token)
    this.props.getUser(token)
  }

  onCheckout = () => {
    const { items } = this.props.carts
    const { token } = this.props.auth
    this.props.createTransaction(items, token)
  };


  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     item_id: [],
  //     item_amount: 1,
  //     item_additional_price: 0,
  //     subTotal: '',
  //     total: '',
  //     payment_method: '',
  //   };
  // }


  // componentDidMount() {
  //   if (this.props.carts.items.length > 0) {
  //     this.setData();
  //   } else {
  //     this.setState({
  //       subTotal: 0,
  //       total: 0
  //     });
  //   }
  // }

  // setData = () => {
  //   const item_id = [];
  //   // const item_amount = [];
  //   // const item_additional_price = [];
  //   this.props.carts.items.map((element) => item_id.push(element.id));
  //   // this.props.carts.items.map((element) => item_amount.push(element.amount));
  //   this.setState({
  //     item_id: this.state.item_id.concat(item_id),
  //     // item_amount: this.state.item_amount.concat(item_amount),
  //   }, () => {
  //     const subTotal = this.props.carts.items.map((element, idx) => element.price * this.state.item_amount[idx]).reduce((acc, curr) => acc + curr);
  //     this.setState({
  //       subTotal,
  //       total: subTotal  + (subTotal * (10 / 100))
  //     });
  //   });
  // }

  // createTransaction = () => {
  //   Swal.fire({
  //     title: 'Create Transaction?',
  //     text: 'Transaction',
  //     icon: 'warning',
  //     showCancelButton: true,
  //     confirmButtonColor: '#6A4029',
  //     cancelButtonColor: '#d33',
  //     confirmButtonText: 'Yes'
  //   }).then((result) => {
  //     if (result.value) {
  //       const { token } = this.props.auth;
  //       const {
  //         item_id, item_amount, item_additional_price, payment_method
  //       } = this.state;
  //       this.setState({
  //         subTotal: 0,
  //         total: 0
  //       });
  //       this.props.createTransaction(item_id, item_amount, item_additional_price, payment_method, token)
  //         .then(() => {
  //           Swal.fire({
  //             position: 'center',
  //             icon: 'success',
  //             title: 'Payment Successfully!',
  //             showConfirmButton: false,
  //             timer: 1500
  //           });
  //         }).catch((err) => {
  //           console.log(err);
  //           Swal.fire({
  //             icon: 'error',
  //             title: 'error',
  //             text: 'Payment failed'
  //           });
  //         });
  //     }
  //   });
  // }

    render() {

      const {items} = this.props.carts
      const { user } = this.props.user
  
      // const price = items.map((data) =>
      //   data
      //     // .filter((item) => item.amount !== 0)
      //     .map((item) => parseInt(item.price) * parseInt(item.amount))
      // )
      // const itemTotal = price.reduce((acc, curr) => parseInt(acc) + parseInt(curr), 0)
      // const tax = itemTotal * (10 /100)
      // const shippingFee = 10000
      // const grandPrice = itemTotal+tax+shippingFee
 
        return (
            <div>
            
          

            
            <div className ="bg2">

        <div className ="px-10 md:px-0 text-white text-xl md:text-4xl font-bold w-64 md:w-80 pt-14 md:ml-40">Checkout your item now!

        </div>

        <div className ="flex flex-col md:flex-row justify-between md:ml-40 md:mr-32 mt-14 md:mx-0 mx-6 ">

            <div className ="bg-white   rounded-2xl flex flex-col">
                <div className ="text-center font-bold text-2xl md:text-4xl my-6 md:my-20">Order Summary</div>
                {items.length < 1 ? (
                    <h4 className="md:px-16 text-gray-500 text-2xl font-bold text-center">
                       You don't have any orders
                    </h4>
                ):(
                  <div className ="flex flex-col mx-11 divide-y-4 space-y-4">



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
                      <div className ="flex flex-row justify-between md:text-xl mr-2">
                      <div>SUBTOTAL</div>
                      {/* <div>{itemTotal}</div> */}
                      </div>
  
                      <div className ="flex flex-row justify-between md:text-xl mr-4 pt-2">
                      <div>TAX & FEES</div>
                      {/* <div>{tax}</div> */}
                      </div>
  
                      <div className ="flex flex-row justify-between md:text-xl mr-5 pt-2">
                      <div>SHIPPING</div>
                      {/* <div>{shippingFee}</div> */}
                      </div>
  
                      <div className ="flex flex-row justify-center space-x-8 md:space-x-32 pb-4 pt-16 -ml-11  font-bold text-xl md:text-3xl bg-white rounded-2xl px-32">
                      <div>TOTAL</div>
                      {/* <div>{grandPrice}</div> */}
                      </div>
  
                  </div>
  
                  </div>
  

                  
                )
                }

             
            </div>

            <div className ="flex flex-col">

            <div className ="flex flex-row justify-between pb-3">
            <div className ="text-white font-bold md:text-2xl text-xl">Address details</div>
            <div className ="flex flex-col justify-center text-white font-bold text-base mr-2">edit</div>
            </div>

            <div className ="bg-white rounded-3xl">
                <div className ="flex flex-col pt-7 pr-10 pl-10 divide-y-2 space-y-1">
                    <div className ="md:text-2xl text-xl font-medium"><span className ="font-bold">Delivery</span> to </div>
                    <div className ="md:text-2xl text-xl font-normal pt-1">{this.props.user.data.address}</div>
                    <div className ="md:text-2xl text-xl pb-4  font-normal pt-1">+62 81348287878</div>
                </div>
            </div>

            <div className ="text-white font-bold text-xl md:text-2xl pb-3 pt-12">Payment method</div>

            <div className ="bg-white rounded-3xl">
                <div className ="flex flex-col pt-10 pr-10 pl-10 divide-y-2 space-y-6">

                    <div className ="flex flex-row">
                    <div className ="pr-4 flex flex-col justify-center">
                        <input type="radio" onChange={(e) => this.setState({ payment_method: e.target.value, button: false })} name="payment" value="Credit Card" /></div>
                    <div className ="mr-4 flex flex-col rounded-xl bg-yellow-500 w-10 h-10 text-center justify-center"><i className ="fas  fa-credit-card"></i></div>
                    <div className ="text-xl md:text-2xl font-normal">Card</div>
                    </div>

                    <div className ="flex flex-row pt-2">
                    <div className ="pr-4 flex flex-col justify-center">
                        <input type="radio" onChange={(e) => this.setState({ payment_method: e.target.value, button: false })} name="payment" value="Bank"/></div>
                    <div className ="mr-4 flex flex-col rounded-xl bg-yellow-900 w-10 h-10 text-center justify-center text-lg"><i className ="fas fa-university "></i></div>
                    <div className ="text-xl md:text-2xl font-normal">Bank account</div>
                    </div>

                    <div className ="flex flex-row pt-2">
                    <div className ="pr-4 flex flex-col justify-center">
                        <input type="radio" onChange={(e) => this.setState({ payment_method: e.target.value, button: false })} name="payment" value="Cod"  /></div>
                    <div className ="mr-4 flex flex-col rounded-xl bg-yellow-300 w-10 h-10 text-center justify-center text-lg"><i className ="fas fa-shipping-fast"></i></div>
                    <div className ="text-xl md:text-2xl font-normal  pb-10">Cash on delivery</div>
                    </div>
                    
                </div>
            </div>

            <div className ="pt-12">
                <button  type="button"  onClick={this.onCheckout} className ="w-44 md:w-96 h-20 bg-yellow-900 text-white font-bold text-base md:text-xl text-center hover:bg-yellow-700 rounded-3xl ">Confirm and Pay
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
    auth: state.auth,
    carts: state.carts,
    user: state.user
})

const mapDispatchToProps = {
    getUser,
    createTransaction
  };

export default connect(mapStateToProps,mapDispatchToProps)(Payments)
