/* import { Link, useHistory, useParams } from "react-router-dom";
import { useEffect, useState } from 'react';
import userservice from "../services/user.service";

const Login = () => {
    const[email, setEmail] = useState('');
    const[password, setPassword] = useState('');
    const history = useHistory();

   const[users,setUsers] = useState([])

   const init = () => {
    userservice.getAll()
      .then(response => {
        console.log('Printing policy data', response.data);
        setUsers(response.data);
      })
      .catch(error => {
        console.log('Something went wrong', error);
      }) 
    }

    useEffect(() => {
        init();
        }, [])

    const loginUser = (e) => {
        e.preventDefault();
         
        if(email==="" || password===""){
            if(email===""){
                document.getElementById('vemail').innerText="Enter Your Email Id"
            }
            else{
                document.getElementById('vemail').innerText=""
            }
    
            if(password===""){
                document.getElementById('vpassword').innerText="Enter Your Password"
            }
            else{
                document.getElementById('vpassword').innerText=""
            }
        }
        
        else{
            
            {users.filter(user => user.email == email && user.password==password).map(vuser => {
                console.log(vuser.type)
            if(vuser.type=="User"){
                    console.log("User Login successfully");
                    history.push(`/user/${vuser.id}`)
            } 
            if(vuser.type=="Admin"){
                console.log("User Login successfully");
                alert(vuser.id )
                alert("keep id to add policy under your name")
                alert(vuser.id )
                history.push(`/admin`)
            } 
            if(vuser.type=="ApplicationOwner"){
                console.log("User Login successfully");
                history.push(`/owner`)
            } 
        })}          
           
        
        };
    }
        

    return(
        <div className="container">
            <h3>Login</h3>
            <p id="invalid"></p>
            <hr/>
            <form>
            <div className="form-group">
                    <input 
                        type="email" 
                        className="form-control col-4"
                        id="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="ENTER EMAIL ID"
                    />
                    <p id="vemail"></p>
                </div>
                <div className="form-group">
                    <input 
                        type="password" 
                        className="form-control col-4"
                        id="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        placeholder="ENTER PASSWORD"
                    />
                    <p id="vpassword"></p>
                </div>

                <div >
                    <br></br>
                    <button onClick={(e) => loginUser(e)} className="btn btn-primary">Submit</button>
                </div>
            </form>
            <hr/>
            <Link to="/forgotpassword"> Forgot Password</Link>
            <br></br>
            
            <Link to="/register">Not Registered Yet? Register Now</Link>
        </div>
    )
}

export default Login; */

import { Link, useHistory, useParams } from "react-router-dom";
import { useEffect, useState } from 'react';
import userservice from "../services/user.service";
import './logincss.css'

const Login = () => {
    const[email, setEmail] = useState('');
    const[password, setPassword] = useState('');
    const history = useHistory();

   const[users,setUsers] = useState([])

   const init = () => {
    userservice.getAll()
      .then(response => {
        console.log('Printing policy data', response.data);
        setUsers(response.data);
      })
      .catch(error => {
        console.log('Something went wrong', error);
      }) 
    }

    useEffect(() => {
        init();
        }, [])

    const loginUser = (e) => {
        e.preventDefault();
         
        if(email==="" || password===""){
            if(email===""){
                document.getElementById('vemail').innerText="Enter Your Email Id"
            }
            else{
                document.getElementById('vemail').innerText=""
            }
    
            if(password===""){
                document.getElementById('vpassword').innerText="Enter Your Password"
            }
            else{
                document.getElementById('vpassword').innerText=""
            }
        }
        
        else{
            
            {users.filter(user => user.email == email && user.password==password).map(vuser => {
                console.log(vuser.type)
            if(vuser.type=="User"){
                    console.log("User Login successfully");
                    history.push(`/user/${vuser.id}`)
            } 
            if(vuser.type=="Admin"){
                console.log("User Login successfully");
                alert(vuser.id )
                alert("keep id to add policy under your name")
                alert(vuser.id )
                history.push(`/admin`)
            } 
            if(vuser.type=="ApplicationOwner"){
                console.log("User Login successfully");
                history.push(`/owner`)
            } 
        })}          
           
        
        };
    }
        

    return(
      <div class="container h-100">
      <div class="d-flex justify-content-center h-100">
        <div class="user_card">
          <div class="d-flex justify-content-center">
            <div class="brand_logo_container">
              <img src="pwc6.jpeg" class="brand_logo" alt="Logo"></img>
            </div>
          </div>
          <div class="d-flex justify-content-center form_container">
            <form>
              <div class="input-group mb-3">
                <div class="input-group-append">
                  <span class="input-group-text"><i class="fas fa-user"></i></span>
                </div>
                <input 
                        type="email" 
                        className="form-control col-4"
                        id="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="ENTER EMAIL ID"
                    />
                    <p id="vemail"></p>
              </div>
              <div class="input-group mb-2">
                <div class="input-group-append">
                  <span class="input-group-text"><i class="fas fa-key"></i></span>
                </div>
                <input 
                        type="password" 
                        className="form-control col-4"
                        id="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        placeholder="ENTER PASSWORD"
                    />
                    <p id="vpassword"></p>
              </div>
              <div class="form-group">
                <div class="custom-control custom-checkbox">
                  <input type="checkbox" class="custom-control-input" id="customControlInline"></input>
                  <label class="custom-control-label" for="customControlInline">Remember me</label>
                </div>
              </div>
                <div class="d-flex justify-content-center mt-3 login_container">
             <button onClick={(e) => loginUser(e)} type="button" name="button" class="btn login_btn">Login</button>
             </div>
            </form>
          </div>
      
          <div class="mt-4">
            <div class="d-flex justify-content-center links">
              Don't have an account? <a href="/register" class="ml-2">Sign Up</a>
            </div>
            <div class="d-flex justify-content-center links">
              <a href="/forgotpassword">Forgot your password?</a>
            </div>
          </div>
        </div>
      </div>
    </div>
    )
}

export default Login;