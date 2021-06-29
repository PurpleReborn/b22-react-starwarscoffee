import '../App.css'
import React, { Component } from 'react'

import Footer from '../components/Footer'
import { connect } from 'react-redux'

import { getHistory } from '../redux/actions/history'
import { Link } from 'react-router-dom'




class History extends Component {

    componentDidMount() {
        this.props.getHistory(this.props.auth.token)
    }

    render() {
        const {data} = this.props.history
        return (
<div>

           
            

    <div className="bg4">

    <div className="text-white  font-bold text-4xl  pt-28 text-center ">Let’s see what you have bought! <br />
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

            <div className=" bg-white rounded-2xl " key={items.id}>
                
                <div className="flex flex-row space-x-5  mr-10 ml-6 mt-6">
                    
                    <div className="w-16 h-16 bg-yellow-900 rounded-full pr-3"></div>
                    <div className="flex flex-col">
                        <div className="font-bold text-xl">{items.name}</div>
                        <div>IDR.{items.price.toLocaleString('en')}</div>
                        <div>Delivered</div>

                        <div className="absolute pl-24 pt-10">
                            <label class="inline-flex items-center mt-3">
                            <input type="checkbox" class="form-checkbox h-5 w-5 text-yellow-600" />
                            <span class="ml-2 text-gray-700"></span>
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
    history: state.history,
    auth : state.auth
})

const mapDispatchToProps = {getHistory}

export default connect(mapStateToProps, mapDispatchToProps)(History)