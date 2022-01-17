import React, { Component } from 'react'

export class signIn extends Component {
    state ={

    }
    handleChange = (e)=>{
        console.log(e)
    }
    handleSubmit = (e)=>{
        console.log(e)
    }
    render() {
        return (
            <div className="container">
               <form onSubmit={this.handleSubmit} action="" className="white">
                   <h5 className="grey-text">
                       <div className="input-field">
                           <lable htmlFor="email">Email</lable>
                           <input type="email" id="email" onChange={this.handleChange}/>
                           </div>
                           </h5>
                           </form> 
                           <div className="input-field">
                           <lable htmlFor="password">Password</lable>
                           <input type="email" id="password" onChange={this.handleChange}/>
                           </div>
                           <div className="input-field">
                               <button className="btn">
                                   Login
                               </button>
                           </div>
                
            </div>
        )
    }
}

export default signIn
