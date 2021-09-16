import React from 'react'
import '../App.css'

class Counts extends React.Component {
    state = {
      num: 1
    }
  
    plus = () => {
      if( this.state.num < 10){    
        this.setState(({ num }) => ({
        num: num + 1
      }))}
      else{window.alert('maximum')}
  
    }
  
    minus = () => {
      if( this.state.num > 0){    
        this.setState(({ num }) => ({
        num: num - 1
      }))}
      else{window.alert('minimum')}
  
    }
  
  
    render(){
      return(
  
  
  

        <div className= "App2 space-x-2 md:space-x-8">    
          <button className="flex flex-col pl-2 hover:bg-yellow-300 font-bold w-5 h-5 justify-center bg-yellow-100 rounded-full text-yellow-800" onClick={this.minus}> -</button>
          <div className="font-bold"> {this.state.num} </div>
          <button className="flex flex-col pl-1 hover:bg-yellow-300 font-bold w-5 h-5 justify-center bg-yellow-100 rounded-full text-yellow-800" onClick={this.plus} >+</button>
        </div>
 
  
    
      )
    }
  }

  export default Counts