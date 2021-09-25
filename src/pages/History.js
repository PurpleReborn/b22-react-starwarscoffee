import '../App.css'
import React, { Component } from 'react'

import Footer from '../components/Footer'
import { connect } from 'react-redux'

import { getHistory } from '../redux/actions/transaction'
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

    render() {
        const {data} = this.props.transaction
        return (
<div>

           
            

    <div className="bg4">

    <div className="text-white  font-bold md:text-4xl text-xl pt-28 text-center ">Let’s see what you have bought! <br />
        <span className="text-lg font-normal "> Select item to delete </span>

    </div>

    <div className="flex flwx-row justify-between kanan">
    <Link to="/delete"><div className="font-bold text-white ">Delete All</div></Link>
    <div className="font-bold text-white">Select All</div>
    </div>

    <div className="flex flex-col space-y-7">


        <div className="grid grid-cols-4  justify-between gap-4 pl-32 pr-32">
        {data.map(items => {
        return(

            <div key={items.id} className=" bg-white rounded-2xl " >
                
                <div className="flex flex-row space-x-5  mr-10 ml-6 mt-6">
                    
                    <div  className="w-16 h-16 -mt-5 bg-yellow-900 rounded-full pr-3"></div>
                    <div className="flex flex-col">
                        <div  className="font-bold text-bg-gray-900 ">{items.code}</div>
                        <div>IDR.{items.total}</div>
                        <div>Delivered</div>

                        <div className="absolute pl-24 ">
                            <label className="inline-flex items-center mt-3">
                            <input type="checkbox" className="form-checkbox ml-5 -mt-15 h-5 w-5 text-yellow-600" />
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

const mapDispatchToProps = {getHistory}

export default connect(mapStateToProps, mapDispatchToProps)(History)
