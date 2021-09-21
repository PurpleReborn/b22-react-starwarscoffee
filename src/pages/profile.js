import React, { Component } from 'react'
import Footer from '../components/Footer'
import '../App.css'
import ujung from '../assets/assets3/ujung.png'
import { connect } from 'react-redux'
import Swal from 'sweetalert2';
import { getUser,updateUser } from '../redux/actions/user'
// const { APP_UPLOAD_ROUTE } = process.env


class Profile extends Component {
    constructor(props) {
        super(props);
        this.state = {
          email: null,
          picture: '',
          number: '',
          address: '',
          name: '',
          firstName: '',
          lastName: '',
          Update: false,
        };
      }
    

    componentDidMount(){ 
        this.detailsUser();
    }

    detailsUser = () => {
        const { token } = this.props.auth;
        this.props.getUser(token)
          .then(() => {
            this.setState({
              email: this.props.user.data.email,
              picture: this.props.user.data.picture,
              number: this.props.user.data.number,
              address: this.props.user.data.address,
              name: this.props.user.data.name,
              firstName: this.props.user.data.firstName,
              lastName: this.props.user.data.lastName,
            });
          });
    }

    changeUser = () => {
        Swal.fire({
          title: 'Update data?',
          text: 'your data will be updated',
          icon: 'warning',
          showCancelButton: true,
          confirmButtonColor: '#6A4029',
          cancelButtonColor: '#d33',
          confirmButtonText: 'Yes',
          iconColor:'#6A4029',
        }).then((result) => {
          if (result.value) {
            if (this.state.picture === '') {
              const data = {
                email: this.state.email,
                number: this.state.number,
                address: this.state.address,
                name: this.state.name,
                firstName: this.state.firstName,
                lastName: this.state.lastName,
              };
              const { token } = this.props.auth;
              this.props.updateUser(token, data)
                .then(async () => {
                  await Swal.fire({
                    position: 'center',
                    icon: 'info',
                    title: 'Data User Updated!',
                    showConfirmButton: false,
                    timer: 2000,
                    iconColor:'#6A4029',
                  }).then(() => {
                    this.setState({
                      forUpdate: !this.state.Update
                    });
                  });
                }).catch((err) => {
                  console.log(err);
                  Swal.fire({
                    icon: 'error',
                    title: 'error',
                    text: 'Updated failed',
                    iconColor:'#6A4029',
                  });
                });
            } else {
              const data = {
                email: this.state.email,
                picture: this.state.picture,
                number: this.state.number,
                address: this.state.address,
                name: this.state.name,
                firstName: this.state.firstName,
                lastName: this.state.lastName,
              };
              const { token } = this.props.auth;
              this.props.updateUser(token, data)
                .then(async () => {
                  await Swal.fire({
                    position: 'center',
                    icon: 'info',
                    title: 'Profile Updated!',
                    showConfirmButton: false,
                    timer: 2000,
                    iconColor:'#6A4029',
                  })
                    .then(() => {
                      this.setState({
                        Update: !this.state.Update
                      });
                    });
                }).catch((err) => {
                  console.log(err);
                  Swal.fire({
                    icon: 'error',
                    title: 'Oops...',
                    text: 'Something went wrong',
                    iconColor:'#6A4029',
                  });
                });
            }
          }
        });
      }

    render() {


        return (
        <div >

            <div className="flex flex-col divide-y-2">

                
    <div className="bg-profile ">
        <div className="text-white text-2xl md:text-4xl font-medium pt-14 pb-12 md:pl-32 text-center md:text-left"> User Profil</div>
        <div className="flex md:space-y-0 space-y-8 flex-col md:flex-row md:mx-0 mx-4 md:space-x-6 justify-center ">
            <div className="flex flex-col">
              {/* {.box-profile-1{
  width: 310px;
  height: 358px;
}} */}
            <div className="flex flex-col bg-white px-10 md:h-96 h-48 rounded-t-xl text-center space-y-6 ">
                
                <div className="relative pt-2 mb:pt-12">
                <img alt="profile pict" src={this.state.picture === null ? ujung : `http://localhost:8080${this.state.picture}` } className="w-20 h-20 mr-auto ml-auto rounded-full" />

                <input name="image" onChange={e=>this.setState({picture:e.target.files})} type="file"  accept="image/*" className="w-6 h-6 rounded-full bg-yellow-900 absolute ml-10 -mt-6 text-center hover:bg-yellow-400 " />
                
                </div>

                <div className="">
                <div className="font-bold text-xl">{this.state.name}</div>
                <div className="text-lg md:pt-2 text-black" >{this.state.email}</div>
                </div>

                <div >Has been ordered - products</div>
            </div>
            <div className="bg-yellow-900 w-full h-4  rounded-b-xl"></div>
            </div>

            <div className="flex flex-col">
              {/* {
                .box-profile-2{
                  width: 802px;
                  height: 358px;
                }
              } */}
            <div className="bg-white h-96 md:px-20 rounded-t-xl">
                <div className="flex md:flex-row flex-col  justify-between ml-7 mr-5 pt-4 pb-4">
                <div className="font-bold text-2xl md:pt-10" >Contacts</div> 
                
                <div className="bg-yellow-900 w-10 h-10 rounded-full text-center hover:bg-yellow-400">
                    <i className="fas fa-pen text-xl mt-2 text-white "></i>
                </div>
                </div>

                
                    <div className="flex flex-col md:flex-row justify-between ml-8 mr-8">
                        <div className="flex  flex-col w-60 md:w-80">
                            <label htmlFor="email" className="mb-4">Email adress :</label>
                            <input value={this.state.email} onChange={(e) => { this.setState({ email: e.target.value }); }} type="email" name="email" className="px-3 py-3 placeholder-blueGray-300 text-blueGray-600 relative bg-white bg-white rounded text-sm border-0 shadow outline-none focus:outline-none focus:ring w-full"/>
                        </div>
                        <div className="flex flex-col w-60 md:w-80">
                            <label htmlFor="email" className="mb-4">Mobile number : </label>
                            <input  value={this.state.number} onChange={(e) => { this.setState({ number: e.target.value }); }} type="text"  className="px-3 py-3 placeholder-blueGray-300 text-blueGray-600 relative bg-white bg-white rounded text-sm border-0 shadow outline-none focus:outline-none focus:ring w-full"/>
                        </div>
                    </div>
                   
                        <div className="flex  flex-col w-60 md:w-80    ml-8 pt-6 ">
                            <label htmlFor="email" className="mb-4 ">Delivery adress :</label>
                            <input value={this.state.address} onChange={(e) => { this.setState({ address: e.target.value }); }} type="text" name="email" className="px-3 py-3 placeholder-blueGray-300 text-blueGray-600 relative bg-white bg-white rounded text-sm border-0 shadow outline-none focus:outline-none focus:ring w-full"/>
                        </div>
                    

 
                

            </div>

            <div className="bg-yellow-900  w-full h-4  rounded-b-xl"></div>
            </div>
        </div>

        <div className="flex flex-col md:flex-row justify-center mt-24 md:space-x-20">
            <div className="flex flex-col">

            <div className="bg-white mx-4 md:mx-0 rounded-t-xl">
                <div className="font-bold text-2xl pl-8 pt-7"  >Details</div> 
                <div className="flex flex-col md:flex-row">
                <div className="">
                <div className="flex  flex-col w-60 md:w-80 ml-8 pt-4">
                    <label htmlFor="email" className="mb-2">Display name :</label>
                    <input value={this.state.name} onChange={(e) => { this.setState({ name: e.target.value }); }} type="text" name="email" className="px-3 py-3 placeholder-blueGray-300 text-blueGray-600 relative bg-white bg-white rounded text-sm border-0 shadow outline-none focus:outline-none focus:ring w-full"/>
                </div>

                <div className="flex  flex-col w-60 md:w-80 ml-8 pt-4">
                    <label htmlFor="email" className="mb-2">First name :</label>
                    <input value={this.state.firstName} onChange={(e) => { this.setState({ firstName: e.target.value }); }} type="text" name="email" className="px-3 py-3 placeholder-blueGray-300 text-blueGray-600 relative bg-white bg-white rounded text-sm border-0 shadow outline-none focus:outline-none focus:ring w-full"/>
                </div>

                <div className="flex  flex-col w-60 md:w-80 ml-8 pt-4">
                    <label htmlFor="email" className="mb-2">Last name :</label>
                    <input value={this.state.lastName} onChange={(e) => { this.setState({ lastName: e.target.value }); }} type="text" name="email" className="px-3 py-3 placeholder-blueGray-300 text-blueGray-600 relative bg-white bg-white rounded text-sm border-0 shadow outline-none focus:outline-none focus:ring w-full"/>
                </div>
                </div>

                <div className="md:pl-20 md:pb-0 pb-10">
                    <div className="flex  flex-col w-80 ml-8 pt-8 pb-6">
                        <label htmlFor="email" className="mb-4">DD/MM/YY</label>
                        <input type="date" name="email" className=" bg-transparent border-0 border-b-2 appearance-none focus:outline-none focus:ring-0 focus:border-yellow-400 border-black w-52" />
                    </div>
                    <div className="pl-8">
                        <div className="rounded-full pb-6">
                            <input  type="radio" name="gender" id="male" value="male"/>
                            <label>Male</label>
                        </div>
                        <div className="rounded-full">
                            <input   type="radio" name="gender" id="female" value="female"/>
                            <label >Female</label>
                        </div>
                    </div>
                </div>
                </div>

            </div>

            {/* <div className="bg-yellow-900 items-center ml-5 mr-5 h-4 w-full rounded-b-xl"></div> */}
            </div>

            <div className="flex flex-col items-center md:mt-0 mt-10 ">
                <div className="text-2xl font-bold text-white w-80 text-center mb-12">Do you want to save the change?</div>
                <div className="flex flex-col space-y-4 md:space-y-8">
                    <div className="flex flex-col space-y-6">
                    <button onClick={this.changeUser} className="text-lg md:text-xl md:w-72 w-60 md:h-14 h-10 font-bold bg-yellow-900 text-white hover:bg-yellow-700 font-bold rounded-2xl ">
                        Save Change
                    </button>
                    <button className="text-lg md:text-xl md:w-72 w-60 md:h-14 h-10 font-bold bg-yellow-400 text-yellow-900 hover:bg-yellow-200 font-bold rounded-2xl ">
                        Cancel
                    </button>
                    </div>

                    <div className="flex flex-col space-y-6">                       
                        <button className="text-lg md:text-xl md:w-72 w-60 md:h-14 h-10 font-bold bg-white text-yellow-900 hover:bg-gray-300 font-bold rounded-2xl flex flex-row  space-x-36 justify-center ">
                            <div className="mt-auto mb-auto mr-2">Log out </div>
                            
                            
                        </button>
                    <button className="text-lg md:text-xl md:w-72 w-60 md:h-14 h-10 font-bold bg-white text-yellow-900 hover:bg-gray-300 font-bold rounded-2xl flex flex-row  space-x-24 justify-center ">
                        <div className="mt-auto mb-auto"> Edit Password </div>
                        
                        
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

const mapDispatchToProps = {getUser,updateUser}

export default connect(mapStateToProps, mapDispatchToProps)(Profile)