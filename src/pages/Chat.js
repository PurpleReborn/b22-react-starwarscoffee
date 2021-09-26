import '../App.css'
import React, { Component } from 'react'
import Footer from '../components/Footer'
import { connect } from 'react-redux'
import { io } from "socket.io-client";
// import { Row,Col } from 'react-bootstrap'
// import styled from 'styled-components'
// import {REACT_APP_BACKEND_URL as URL} from '@env'
import {chatList, chatAll, sendChat, searchUser, deleteChat} from '../redux/actions/chat'
import { getUser} from '../redux/actions/user'
import Swal from 'sweetalert2';
import trash from '../assets/assets9/trash.png'

const { REACT_APP_BACKEND_URL : URL } = process.env
const socket = io(`${URL}`)



class Chat extends Component {
  state = {
    search: '',
    column: 'name',
    chatList: [],
    allChat: [],
    logged: {},
    chatData: '',
    searchData: [],
    userSelected: [],
    picture:''
  }

      componentDidMount () {
        this.onChatList()
        this.onLogged()
        this.detailsUser()
        // this.scrollToBottom()
        const {number} = this.props.user.data
        socket.on(number, (data) => {
          console.log(socket.id, data);
          this.onChatList()
          this.onDetailChat(data.sender)
        });
     
      }

      componentDidUpdate () {
        // this.scrollToBottom()
        const {number} = this.props.user.data
        socket.on(number, (data) => {
          console.log(socket.id, data);
          this.onChatList()
          this.onDetailChat(data.sender)
        });
      }

      onChatList = () => {
        const {token} = this.props.auth
        this.props.chatList(token).then(() => {
          this.setState({
            chatList: this.props.chat.data
          })
        })
      }

      onLogged = () => {
        const {token} = this.props.auth
        this.props.getUser(token).then(() => {
          this.setState({
            logged: this.props.user.data,
          })
        })
      }

      detailsUser = () => {
        const { token } = this.props.auth;
        this.props.getUser(token)
          .then(() => {
            this.setState({
              picture: this.props.user.data.picture,
            });
          });
    }

      onDetailChat = (number) => {
        const {token} = this.props.auth
        this.props.chatAll(token,number).then(() => {
          this.setState({
            allChat: this.props.chat.allData
          })
        })
      }

      onSend = (e) => {
        if (e.keyCode === 13) {
          const {token} = this.props.auth
          const message = this.state.chatData
          const recipient = this.state.userSelected.number
          this.props.sendChat(token,recipient, message).then(() => {
            this.onDetailChat(recipient)
            this.setState({
              chatData: ''
            })
            this.onChatList()
          })
        }
      }

      onSearch = (e) => {
        if(e.keyCode === 13) {
        const column = this.state.column
        const search = this.state.search
        const {token} = this.props.auth
        this.props.searchUser(token,column, search ).then(() => {
          this.setState({
            searchData: this.props.chat.userData
          })
        })
        }
        // setTimeout(
        //   () => this.setState({ searchData: [] }), 
        //   9000
        // );
      }
      onSearchButton = (e) => {
        e.preventDefault()
        const column = this.state.column
        const search = this.state.search
        const {token} = this.props.auth
        this.props.searchUser(token,column, search ).then(() => {
          this.setState({
            searchData: this.props.chat.userData
          })
        })
      }

      onRedirect = async (dataSearch) => {
        const {token} = this.props.auth
        await this.setState({
          userSelected: dataSearch,
          allChat: []
        })
        const number = await this.state.userSelected?.number
       await this.props.chatAll(token, number).then(() => {
          this.setState({
            allChat: this.props.chat.allData
          })
        })
      }

      onDelete = (id) => {
        const {token} = this.props.auth
        const recipient = this.state.userSelected.number
       
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
            this.props.deleteChat(token, recipient, id).then(() => {
              this.onChatList()
              this.onDetailChat()
              // this.onRedirect()
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
      const {allData} = this.props.chat
        return (
    <div>
        <div className="bg19">
            <div className="mx-5 md:mx-40 flex flex-col md:flex-row justify-center">

              <div className="rounded-2xl md:rounded-bl-2xl md:rounded-tl-2xl mt-16 bg-chat-1  md:w-96 ">
                    <div className="pt-5 mx-4 md:mx-16">
                        <div className="relative">
                        <i className="fas fa-search text-black mt-3 ml-5 absolute"></i>
                        <input onKeyDown={(e) => this.onSearch(e)} value={this.state.search} onChange={e=>this.setState({search:e.target.value})} type="text" placeholder="Searchhh" className="rounded-full h-10 w-60 pl-14 hover:bg-gray-200" />
                        </div>
                    </div>
                    <div className="flex flex-row">
                         <select className="text-center w-28 rounded-lg mx-4 md:ml-16 my-2 bg-gray-50 md:text-base text-xs" value={this.state.column} onChange={e=>this.setState({column:e.target.value})} id="column">
                          <option className="md:text-base text-xs" value="name">Name</option>
                          <option className="md:text-base text-xs" value="number">Phone</option>
                        </select>

                        <div className="mx-4 my-2">
                        <button onClick={this.onSearchButton} className="bg-yellow-400 text-yellow-900 rounded-md hover:bg-yellow-200 focus:outline-none w-28  h-8 flex items-center justify-center">
                        {/* <i className="fas fa-search text-md " ></i> */}
                        Search
                        </button>
                      </div>
                    </div>


                    { this.state.search !== '' ? (
            
            <div className="bg-search flex flex-col flex-initial absolute md:mt-20 md:px-0 px-12 md:w-96 rounded-2xl md:rounded-b-2xl overflow-y-scroll overscroll-none h-60">
              {this.state.searchData.map(dataSearch => {
              return dataSearch.name !== this.props.user.data.name  ?
              <div key={dataSearch.id} onClick={() => this.onRedirect(dataSearch)} className="flex flex-row cursor-pointer pt-8 p-3">
              <img alt="" src={dataSearch.picture} className="rounded-full w-16 h-16" />
                <div className="flex flex-col px-5">
                  <h2 className="text-white font-bold">{dataSearch.name}</h2>
                  <h3 className="text-white text-sm">{dataSearch.number}</h3>
                </div>
              </div>
              :
              <div></div>
              })}
          </div>
            
            
          ) : (
            <div></div>
            
          )}


                    <div className="py-10 text-center text-white">Choose a staff you want to talk with</div>

                    <div className="flex flex-col  w-full">
          {this.state.chatList.map(chat => {
            return chat.name !== this.props.user.data.name  ?
            <div key={chat.id} onClick={() => this.onRedirect(chat)} className="flex flex-row border-b cursor-pointer pt-8 w-full border-white p-3">
              <img alt="" src={chat.picture} className="rounded-full w-16 h-16" />
              <div className="flex flex-col px-5">
                <h2 className="text-white font-bold">{chat.name}</h2>
                <h3 className="text-white text-sm">{chat.message}</h3>
              </div>
            </div>
          :
          <div></div>
          })}
          </div>

              </div>

              <div className="rounded-br-2xl rounded-tr-2xl mt-16 px-9 py-7 bg-white flex-auto">
                  <div className="text-2xl font-semibold">Room Chat</div>


                  {this.state.userSelected.length === 0 ? (
                <React.Fragment>
                
                {this.props.chat.allData.length > 0 ? (
                  <React.Fragment>
                    <h2 className="font-bold text-2xl text-gray-600 pb-12">{allData[0].userName}</h2>
                 
                 <div className="flex flex-col flex-1 overflow-y-scroll overscroll-none max-h-72" >
                   {this.state.allChat.map(data => {
                     return data.sender !== this.props.user.data.number  ?
                     <React.Fragment key={data.id}>
                                        
                       <div key={data.id} className="flex flex-row border-b justify-start mb-8 border-yellow-900 p-3">
                       {data.picture !== null ? (
            <img alt="" src={data.picture} className="rounded-full w-10 h-10" />
                          ):(
            <div>ini gamv=bar</div>
                          )}
                         <div className="flex flex-col px-8 justify-center">
                             <h3 className="text-gray-600 text-base">{data.message}</h3>
                         </div>
                       </div>
                       
                     </React.Fragment>
                     
                   :
                   <React.Fragment>
                     <div className="flex flex-row justify-end border-b mb-8 border-yellow-900 p-3">
                     <div className="flex flex-col px-8 justify-center">
                       <h3 className="text-gray-600 text-base text-right">{data.message}</h3>
                     </div>
                     <img alt="" src={this.props.user.data.picture} className="rounded-full w-10 h-10" />
                   </div>
                   
                   </React.Fragment>
                   })}
                  
                   

                   
                 </div>
                 

                 <div className="flex justify-center mt-12">
                   <input onKeyDown={(e) => this.onSend(e)} value={this.state.chatData} onChange={e=>this.setState({chatData:e.target.value})} className="bg-gray-100 p-4 w-full text-sm rounded-xl" type="text" placeholder="Type a message..."/>
                 </div>
                  </React.Fragment>
                ) : (
                  <React.Fragment>
              
                <div className="flex flex-col flex-1 justify-center">
                  <h2 className="pt-20 text-xl text-gray-600 text-center">You have no conversation, start chat other staff! </h2>
                  <h2 className="text-xl text-gray-600 text-center">Or click on chat list to see your conversation Have a good day!</h2>
                </div>
                

              </React.Fragment>
                )}
                
              </React.Fragment>
              ) : (
                <React.Fragment>
                
                <h2 className="font-bold text-2xl text-gray-600 pb-12">{this.state.userSelected.userName}</h2>
                 
                  <div className="flex flex-col flex-1 overflow-y-scroll overscroll-none max-h-72" >
                    {this.state.allChat.length > 0 ? (
                      <React.Fragment>
                              {/* <div>cek</div> */}
                        {this.state.allChat.map(data => {
                      return data.sender !== this.props.user.data.number  ?
                      <React.Fragment key={data.id}>
                        <div key={data.id} className="flex flex-row justify-between border-b justify-start mb-8 border-yellow-900 p-3">

                          <div className="flex flex-row">
                          {data.picture !== null ? (
            <img alt="" src={data.picture} className="rounded-full w-10 h-10" />
                          ):(
            <div>ini gamv=bar</div>
                          )}
              

                          <div className="flex flex-col px-8 justify-center">
                              <h3 className="text-gray-600 text-base">{data.message}</h3>
                          </div>
                          </div>

                          <button key={data.id} onClick={() => this.onDelete(data.id)}>
                          <img alt="" src={trash} className="rounded-full w-8 h-8" />
                          </button>
                        </div>
                        
                      </React.Fragment>
                      
                    :
                    <React.Fragment>
                      <div className="flex flex-row justify-between border-b mb-8 border-yellow-900 p-3">

                      <button key={data.id} onClick={() => this.onDelete(data.id)}>
                          <img alt="" src={trash} className="rounded-full w-8 h-8" />
                      </button>
                      <div className="justify-end flex flex-row">
                      <div className="flex flex-col px-8 justify-center">
                        <h3 className="text-gray-600 text-base text-right">{data.message}</h3>
                      </div>
                      <img alt="" src={`http://localhost:8080${this.state.picture}`} className="rounded-full w-10 h-10" />
                      </div>
                    </div>
                    
                    </React.Fragment>
                    })}
                      </React.Fragment>
                    ) :  (
                      <div></div>
                    )}
                   
                    

                    
                  </div>
                  

                  <div className="flex inset-x-0 bottom-0 justify-center text-xl mt-12">
                    <input onKeyDown={(e) => this.onSend(e)} value={this.state.chatData} onChange={e=>this.setState({chatData:e.target.value})} className="bg-gray-100 p-4 w-full text-sm rounded-xl" type="text" placeholder="Type a message..."/>
                  </div>
                  
                
              </React.Fragment>
              )}


  
              </div>

            </div>
        </div>
        <Footer/>
    </div>
        )
    }
}

const mapStateToProps = state => ({
    auth : state.auth,
    user: state.user,
    chat: state.chat
  })
  
  const mapDispatchToProps = { getUser, chatList, chatAll, sendChat, searchUser,deleteChat }
  
  export default connect(mapStateToProps, mapDispatchToProps)(Chat)
