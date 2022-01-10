import React,{useState} from 'react'
import{useDispatch,useSelector} from "react-redux"
import { register } from '../actions/index';
import {Link} from 'react-router-dom'
const Register=()=>{
  
    const dispatch=useDispatch()
    const [name,setName]=useState('')
    const [email,setEmail]=useState('')
    const [password,setPassword]=useState('') 
    
    const registerFunc=()=>{
      dispatch(register({name,email,password}))
    }



    const mystyle = {
        display:"flex",
        justifyContent:'center'
      };
    return(
        <div>
<div className="container" style={mystyle}>
  <div className="row">
  	<div className="col-md-12">
    
          <form className="form-horizontal" action='' method="POST">
          <fieldset>
            <div id="legend">
              <legend className="">Register</legend>
            </div>
            <div className="control-group">
              <label className="control-label"  for="username">Username</label>
              <div className="controls">
                <input type="text" id="username" className="form-control input-lg" value={name} onChange={(e)=>setName(e.target.value)}/>
                <p className="help-block">Username can contain any letters or numbers, without spaces</p>
              </div>
            </div>
         
            <div className="control-group">
              <label className="control-label" for="email">E-mail</label>
              <div className="controls">
                <input type="email" id="email" className="form-control input-lg" value={email} onChange={(e)=>setEmail(e.target.value)}/>
                <p className="help-block">Please provide your E-mail</p>
              </div>
            </div>
         
            <div className="control-group">
              <label className="control-label">Password</label>
              <div className="controls">
                <input type="password" id="password" className="form-control input-lg" value={password} onChange={(e)=>setPassword(e.target.value)}/>
                <p className="help-block">Password should be at least 4 characters</p>
              </div>
            </div>
           
          </fieldset>
        </form>
        <div className="controls" style={mystyle}>
         <button className="btn btn-success" onClick={registerFunc}>Register</button>
                
              </div>
    
    </div> 
  </div>
</div>
             
</div>
    )
}

export default Register;