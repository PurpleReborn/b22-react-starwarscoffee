import '../App.css'
import React, { Component } from 'react'

import Footer from '../components/Footer'
import { connect } from 'react-redux'
import Swal from 'sweetalert2';
import { getHistory,deleteTrx  } from '../redux/actions/transaction'
import { Link } from 'react-router-dom'




class History extends Component {

  componentDidMount () {
    const { token } = this.props.auth
    if (token !== null) {
      this.props.getHistory(token)
    } else {
      console.log('cannot access')
    }
  }

  // componentDidUpdate () {
  //   const { token } = this.props.auth
  //   this.props.getHistory(token)
  // }

  onDelete = () => {
    console.log('delete')
    const {token} = this.props.auth
    Swal.fire({
      title: 'Delete this message ?',
      text: "Delete permanently",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#FFB600',
      cancelButtonColor: '#784212',
      confirmButtonText: 'Yes, delete',
      iconColor: '#F1C40F',
    }).then((result) => {
      if (result.isConfirmed) {
        this.props.deleteTrx(token).then(() => {
          this.props.getHistory(token)
        })
        
        Swal.fire(
          // 'Deleted!',
          // 'Your message has been deleted.',
          // 'success'
          {
            title: 'Deleted',
            text: "Your message has been deleted",
            icon: 'success',
            iconColor: '#784212',
            confirmButtonColor: '#784212',
          }
        )
      }
    })
    
  }

    render() {
        const {data} = this.props.transaction
        return (
<div>

           
            

    <div className="bg4">

    <div className="text-white  font-bold md:text-4xl text-xl pt-28 text-center ">Let’s see what you have bought! <br />
        <span className="text-lg font-normal "> Select item to delete </span>

    </div>

    <div className="flex flwx-row justify-between kanan">
    {/* <Link to="/delete"> */}
      <button onClick={this.onDelete}  className="font-bold text-white ">Delete All</button>
      {/* </Link> */}
    <div className="font-bold text-white">Select All</div>
    </div>

    <div className="flex flex-col space-y-7">


        <div className="grid md:grid-cols-4 grid-cols-2  justify-between gap-2 md:gap-4 md:px-32 px-2">
        {data.map(items => {
        return(

            <div key={items.id} className=" bg-white rounded-2xl " >
                
                <div className="flex flex-col md:flex-row space-x-2 md:space-x-5  mx-10 my-4 md:mr-10 md:ml-6 mt-6">
                    
                    <div  className="md:w-16 md:h-16 w-10 h-10 -mt-5 bg-yellow-900 rounded-full  md:pr-3"></div>
                    <div className="flex flex-col">
                        <div  className="font-bold text-bg-gray-900 ">{items.code}</div>
                        <div>IDR.{items.total}</div>
                        <div>Delivered</div>

                        <div className="absolute md:pl-24 pl-20">
                            <label className="inline-flex items-center mt-10 md:mt-3">
                            <input type="checkbox" className="form-checkbox md:ml-5 -mt-15 h-5 w-5 text-yellow-600" />
                            <span className="ml-2 text-gray-700"></span>
                            </label>
                        </div>
                    </div>
                    
                </div>
            </div>

        )

        })}





        </div>
    

        
    </div>


    </div>

            <Footer />

</div>

)
}
}

const mapStateToProps = state => ({
    items: state.items,
    transaction: state.transaction,
    auth : state.auth
})

const mapDispatchToProps = {getHistory,deleteTrx }

export default connect(mapStateToProps, mapDispatchToProps)(History)
