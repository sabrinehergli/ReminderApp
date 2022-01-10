import React,{useState} from 'react'
import {login} from '../actions/index'
import { useDispatch,useSelector } from 'react-redux';


const Login=()=>{
  
    
    const dispatch=useDispatch()
    const [email,setEmail]=useState('')
    const [password,setPassword]=useState('') 

    const loginFunc=()=>{
      dispatch(login({email,password}))
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
                  <legend className="">Login</legend>
                </div>
             
                <div className="control-group">
                  <label className="control-label" for="email">E-mail</label>
                  <div className="controls">
                    <input type="email" id="email" className="form-control input-lg" value={email} onChange={(e)=>setEmail(e.target.value)}/>
                    <p className="help-block">Please provide your E-mail</p>
                  </div>
                </div>
             
                <div className="control-group">
                  <label className="control-label" for="password">Password</label>
                  <div className="controls">
                    <input type="password" id="password" className="form-control input-lg" value={password} onChange={(e)=>setPassword(e.target.value)}/>
                    <p className="help-block">Password should be at least 4 characters</p>
                  </div>
                </div>
                            
              
               
              </fieldset>
            </form>
            <div className="controls" style={mystyle}>
                    <button className="btn btn-success" onClick={loginFunc}>Login</button>
                  </div>
        </div> 
      </div>
    </div>
           
            
        
    </div>
    )
}

export default Login;