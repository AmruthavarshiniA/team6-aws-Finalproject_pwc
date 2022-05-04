import { useEffect, useState} from "react"
import { Link, useHistory, useParams } from "react-router-dom"
import userservice from "../services/userservice";

function Register(){

    const [email, setEmail]= useState('');
    const [username, setUserName]= useState('');
    const [password, setPassword]= useState('');
    const history = useHistory();
    const {id} = useParams();

    const saveUser = (e) => {
        e.preventDefault();
        
        const user = {id, username, email, password};
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
                })
                .catch(error => {
                    console.log('Something went wrong', error);
                })
        }
    }, [])

    return(
        <form>
        <div className="container">
                <div className="form-group">
                    <input 
                        type="email"
                        id="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="enter valid email"
                    />
                </div>
                <div className="form-group">
                    <input 
                        type="text"
                        id="username"
                        value={username}
                        onChange={(e) => setUserName(e.target.value)}
                        placeholder="enter username"
                    />
                </div>
                <div className="form-group">
                    <input 
                        type="password"
                        id="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        placeholder="enter strong password"
                    />
                </div>
                <div >
                    <button onClick={(e) => saveUser(e)} className="btn btn-primary">Register</button>
                </div>
            
        </div>
        </form>
    )
}
export default Register