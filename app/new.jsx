import React from "react";
import { Component } from "react";

class New extends Component{
    
    constructor(){
        super()
        this.state = {
            name : "",
            email : "",
            password: "",
            admin : ""
        }
        this.handlechange = this.handlechange.bind(this)
    }

    handleChange(event){
        const { name, email, password, admin } = event.target 
        this.setState({
            [name] : value
        })
    }
    render(){
        return(
          <div className="form">
      <label>choose a role</label>
      <select>
        <option value = "admin">admin</option>
        <option value = "subadmin">sub admin</option>
      </select><br></br>

      Email* <input type="email"  
      onChange = {handleChange()} 
      name = "email"
      placeholder="Enter your email" 
      />
      <br></br>

      Name* <input type="text"  
      onChange = {handleChange()} 
      name = "name"
      placeholder="Enter your name" 
      />
      <br></br>

      password* <input type="password" 
      onChange = {handleChange()} 
      placeholder="password" 
      name = "password"
      /><br></br>

      <button onSubmit = {handleSubmit()} >submit</button>
    </div>
  )};
};
            