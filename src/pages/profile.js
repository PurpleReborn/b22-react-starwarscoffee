import React, { Component } from 'react'
import Footer from '../components/Footer'
import '../App.css'
import ujung from '../assets/assets3/ujung.png'
import { connect } from 'react-redux'

import { getUser } from '../redux/actions/user'


class Profile extends Component {
    // state = {
    //     name : '',
    //     file : null
    //   }
    

    componentDidMount(){
        
        this.props.getUser(this.props.auth.token)
    }

    render() {

 
        const {details} = this.props.user

        return (
        <div >

            <div class="flex flex-col divide-y-2">

                
    <div class="bg-profile ">
        <div class="text-white text-4xl font-medium pt-14 pb-12 pl-32"> User Profil</div>
        <div class="flex flex-row space-x-6 justify-center ">
            <div class="flex flex-col">
            <div class="flex flex-col bg-white box-profile-1 rounded-t-xl text-center space-y-6 ">
                
                <div class="relative pt-12">
                <img alt="" src={ujung} class="w-20 h-20 mr-auto ml-auto rounded-full" />

                <div class="w-6 h-6 rounded-full bg-yellow-900 absolute ml-44 -mt-6 text-center hover:bg-yellow-400 ">
                    <i class="fas fa-pen text-xs text-white "></i></div>
                
                </div>

                <div class="">
                <div class="font-bold text-xl">{details?.display_name}</div>
                <div class="text-lg pt-3 text-black" >{details?.email}</div>
                </div>

                <div >Has been ordered - products</div>
            </div>
            <div class="bg-yellow-900 profile-1-2 rounded-b-xl"></div>
            </div>

            <div class="flex flex-col">
            <div class="bg-white box-profile-2 rounded-t-xl">
                <div class="flex justify-between ml-7 mr-5 pt-4 pb-5">
                <div class="font-bold text-2xl" >Contacts</div> 
                
                <div class="bg-yellow-900 w-10 h-10 rounded-full text-center hover:bg-yellow-400">
                    <i class="fas fa-pen text-xl mt-2 text-white "></i>
                </div>
                </div>

                
                    <div class="flex flex-row justify-between ml-8 mr-8">
                        <div class="flex  flex-col w-80">
                            <label for="email" class="mb-4">Email adress :</label>
                            <input placeholder={details?.email} type="email" name="email" class=" bg-transparent border-0 border-b-2 appearance-none focus:outline-none focus:ring-0 focus:border-yellow-400 border-black" />
                        </div>
                        <div class="flex flex-col w-80">
                            <label for="email" class="mb-4">Mobile number : </label>
                            <input  placeholder={details?.number} type="text" nama="number" class=" bg-transparent border-0 border-b-2 appearance-none focus:outline-none focus:ring-0 focus:border-yellow-400 border-black" />
                        </div>
                    </div>
                   
                        <div class="flex  flex-col w-80 ml-8 pt-12">
                            <label for="email" class="mb-4">Delivery adress :</label>
                            <input placeholder={details?.address} type="text" name="email" class=" bg-transparent border-0 border-b-2 appearance-none focus:outline-none focus:ring-0 focus:border-yellow-400 border-black" />
                        </div>
                    

 
                

            </div>
            <div class="bg-yellow-900 profile-1-3 rounded-b-xl"></div>
            </div>
        </div>

        <div class="flex flex-row justify-center mt-24 space-x-20">
            <div class="flex flex-col">

            <div class="bg-white box-profile-3 rounded-t-xl">
                <div class="font-bold text-2xl pl-8 pt-7"  >Details</div> 
                <div class="flex flex-row">
                <div class="">
                <div class="flex  flex-col w-80 ml-8 pt-8">
                    <label for="email" class="mb-4">Display name :</label>
                    <input placeholder={details?.display_name} type="text" name="email" class=" bg-transparent border-0 border-b-2 appearance-none focus:outline-none focus:ring-0 focus:border-yellow-400 border-black" />
                </div>

                <div class="flex  flex-col w-80 ml-8 pt-8">
                    <label for="email" class="mb-4">First name :</label>
                    <input placeholder={details?.first_name} type="text" name="email" class=" bg-transparent border-0 border-b-2 appearance-none focus:outline-none focus:ring-0 focus:border-yellow-400 border-black" />
                </div>

                <div class="flex  flex-col w-80 ml-8 pt-8">
                    <label for="email" class="mb-4">Last name :</label>
                    <input placeholder={details?.last_name} type="text" name="email" class=" bg-transparent border-0 border-b-2 appearance-none focus:outline-none focus:ring-0 focus:border-yellow-400 border-black" />
                </div>
                </div>

                <div class="pl-20">
                    <div class="flex  flex-col w-80 ml-8 pt-8 pb-6">
                        <label for="email" class="mb-4">DD/MM/YY</label>
                        <input type="date" name="email" class=" bg-transparent border-0 border-b-2 appearance-none focus:outline-none focus:ring-0 focus:border-yellow-400 border-black w-52" />
                    </div>
                    <div class="pl-8">
                        <div class="rounded-full pb-6">
                            <input  type="radio" name="gender" id="male" value="male"/>
                            <label>Male</label>
                        </div>
                        <div class="rounded-full">
                            <input   type="radio" name="gender" id="female" value="female"/>
                            <label >Female</label>
                        </div>
                    </div>
                </div>
                </div>

            </div>

            <div class="bg-yellow-900 profile-2-1 rounded-b-xl"></div>
            </div>

            <div class="flex flex-col ">
                <div class="text-2xl font-bold text-white w-80 text-center mb-12">Do you want to save the change?</div>
                <div class="flex flex-col space-y-8">
                    <div class="flex flex-col space-y-6">
                    <button class="text-xl w-72 h-14 font-bold bg-yellow-900 text-white hover:bg-yellow-700 font-bold rounded-2xl ">
                        Save Change
                    </button>
                    <button class="text-xl w-72 h-14 font-bold bg-yellow-400 text-yellow-900 hover:bg-yellow-200 font-bold rounded-2xl ">
                        Cancel
                    </button>
                    </div>

                    <div class="flex flex-col space-y-6">                       
                        <button class="text-xl w-72 h-14 font-bold bg-white text-yellow-900 hover:bg-gray-300 font-bold rounded-2xl flex flex-row  space-x-36 justify-center ">
                            <div class="mt-auto mb-auto mr-2">Log out </div>
                            
                            
                        </button>
                    <button class="text-xl w-72 h-14 font-bold bg-white text-yellow-900 hover:bg-gray-300 font-bold rounded-2xl flex flex-row  space-x-24 justify-center ">
                        <div class="mt-auto mb-auto"> Edit Password </div>
                        
                        
                    </button>
                    </div>

                </div>
            </div>
        </div>
    </div>

            </div>

        <Footer />
        </div>
        )
    }
}



const mapStateToProps = state => ({
    auth : state.auth,
    user: state.user
})

const mapDispatchToProps = {getUser}

export default connect(mapStateToProps, mapDispatchToProps)(Profile)