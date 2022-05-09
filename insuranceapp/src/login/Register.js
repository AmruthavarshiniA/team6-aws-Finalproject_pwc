/* import { useEffect, useState} from "react"
import { Link, useHistory, useParams } from "react-router-dom"
import userservice from "../services/user.service";

function Register(){

    

    const [user, setUser]= useState([]);

    const [email, setEmail]= useState('');
    const [username, setUserName]= useState('');
    const [password, setPassword]= useState('');
    const [question, setQuestion]= useState('');
    const [answer, setAnswer]= useState('');
    const [type, settype]= useState('');
    const history = useHistory();
    const {id} = useParams();

    const saveUser = (e) => {
        e.preventDefault();
        
        const user = {id, username, email, question,answer,password,type};
        userservice.create(user)
            .then(response => {
                console.log("user added successfully", response.data);
                history.push("/login");
            })
            .catch(error => {
                console.log('something went wroing', error);
            })
    }

    useEffect(() => {
        if (id) {
            userservice.get(id)
                .then(user => {
                    setEmail(user.data.email);
                    setUserName(user.data.username);
                    setPassword(user.data.password);
                    setQuestion(user.data.question);
                    setAnswer(user.data.answer);
                    settype(user.data.type)
                })
                .catch(error => {
                    console.log('Something went wrong', error);
                })
        }
    }, [])

    return(
        <form className="container">
        <h3>Sign Up</h3>
        <div className="mb-3">
          <label>User name</label>
          <input
            type="text"
            className="form-control"
            placeholder="User name"
            value={username}
            onChange={(e) => setUserName(e.target.value)}
          />
        </div>
        
        <div className="mb-3">
          <label>Email address</label>
          <input
            type="email"
            className="form-control"
            placeholder="Enter email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <div className="mb-3">
          <label>Password</label>
          <input
            type="password"
            className="form-control"
            placeholder="Enter password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        <div className="form-group">
        <label>Question</label>
          <select className="form-control col-4"
            type="text"
              id="question"
                value={question}
                onChange={(e) => setQuestion(e.target.value)}
                placeholder="select user type from dropdown">
                  <option value="What is your Pet's name">What is your Pet's name</option>
                  <option value="How old are you">How old are you</option>
                  <option value="In what country were you born in">In what country were you born in</option>
          </select>
        </div>

        <div className="mb-3">
          <label>Answer</label>
          <input
            type="text"
            className="form-control"
            placeholder="Enter answer"
            value={answer}
            onChange={(e) => setAnswer(e.target.value)}
          />
        </div>

        <div className="form-group">
          <select className="form-control col-4"
            type="submit"
              id="type"
                value={type}
                onChange={(e) => settype(e.target.value)}
                placeholder="select user type from dropdown">
                  <option value="Admin">Admin</option>
                  <option value="User">User</option>
                  <option value="">choose user type</option>
          </select>
        </div>

        <div>
        <button onClick={(e) => saveUser(e)} className="btn btn-primary">Register</button>
        </div>
        <p className="forgot-password text-right">
          Already registered <a href="/login">sign in?</a>
        </p>
      </form>
    )
}
export default Register
 */

import { useEffect, useState} from "react"
import { Link, useHistory, useParams } from "react-router-dom"
import userservice from "../services/user.service";

function Register(){

    

    const [user, setUser]= useState([]);

    const [email, setEmail]= useState('');
    const [username, setUserName]= useState('');
    const [password, setPassword]= useState('');
    const [question, setQuestion]= useState('');
    const [answer, setAnswer]= useState('');
    const [type, settype]= useState('');
    const history = useHistory();
    const {id} = useParams();

    const saveUser = (e) => {
        e.preventDefault();
        
        const user = {id, username, email, question,answer,password,type};
        userservice.create(user)
            .then(response => {
                console.log("user added successfully", response.data);
                history.push("/login");
            })
            .catch(error => {
                console.log('something went wrong', error);
            })
    }

    useEffect(() => {
        if (id) {
            userservice.get(id)
                .then(user => {
                    setEmail(user.data.email);
                    setUserName(user.data.username);
                    setPassword(user.data.password);
                    setQuestion(user.data.question);
                    setAnswer(user.data.answer);
                    settype(user.data.type)
                })
                .catch(error => {
                    console.log('Something went wrong', error);
                })
        }
    }, [])

    return(
        <section class="testimonial py-5" id="testimonial">
    <div class="container">
        <div class="row ">
            <div class="col-md-4 py-5 bg-warning text-black text-center ">
                <div class=" ">
                    <div class="card-body">

                        <h2 class="py-3">Registration</h2>
                        <p>One needs to register the legal documents so as to prevent any property dispute, fraud, conserve the evidence, be assured of the title and publicizing the information</p>
                    </div>
                </div>
            </div>
            <div class="col-md-8 py-5 border">
                <h4 class="pb-4">Please fill with your details</h4>
                <form>
                    <div class="form-row">
                        <div class="form-group col-md-8">
                        <input
                             type="text"
                             className="form-control"
                            placeholder="User name"
                            value={username}
                            onChange={(e) => setUserName(e.target.value)}
                         />
                          
                        </div>

                        <br></br>
                        
                        <div class="form-group col-md-8">
                        <input
                            type="email"
                            className="form-control"
                            placeholder="Enter email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                        </div>
                      </div>

                      <br></br>

                    <div class="form-row">
                        <div class="form-group col-md-8">
                        <input
                            type="password"
                            className="form-control"
                            placeholder="Enter password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                        </div>

                        <br></br>
                        
                        <div class="form-group col-md-8">
                        <select className="form-control col-8"
                            type="text"
                            id="question"
                            value={question}
                            onChange={(e) => setQuestion(e.target.value)}
                            placeholder="select user type from dropdown">
                            <option selected>Pick a Question</option>
                            <option value="What is your Pet's name">What is your Pet's name</option>
                            <option value="How old are you">How old are you</option>
                            <option value="In what country were you born in">In what country were you born in</option>
                        </select>
                        </div>

                        <br></br>

                        <div class="form-row">
                        <div class="form-group col-md-8">
                        <input
                            type="text"
                            className="form-control"
                            placeholder="Enter answer"
                            value={answer}
                            onChange={(e) => setAnswer(e.target.value)}
                        />
                        </div>

                        <br></br>
                        </div>


                        <div class="form-group col-md-8">
                        <select className="form-control col-4"
                            type="submit"
                            id="type"
                            value={type}
                            onChange={(e) => settype(e.target.value)}
                            placeholder="select user type from dropdown">
                            <option selected>choose user type</option>
                            <option value="Admin">Admin</option>
                            <option value="User">User</option>
                                <option value="owner">Owner</option>
                        </select>
                        </div>
                        <br></br>




                       
                    </div>
                    <div class="form-row">
                        <div class="form-group">
                            <div class="form-group">
                                <div class="form-check">
                                  <input class="form-check-input" type="checkbox" value="" id="invalidCheck2" required></input>
                                  <label class="form-check-label" for="invalidCheck2">
                                    <small>By clicking Submit, you agree to our Terms & Conditions, Visitor Agreement and Privacy Policy.</small>
                                  </label>
                                </div>
                              </div>
                    
                          </div>
                    </div>
                    <br></br>
                    <div class="form-row">
                        <button onClick={(e) => saveUser(e)} type="button" class="btn btn-danger">Submit</button>
                    </div>
                </form>
            </div>
        </div>
    </div>
</section>
    )
}
export default Register
