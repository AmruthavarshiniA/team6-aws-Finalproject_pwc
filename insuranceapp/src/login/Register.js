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
