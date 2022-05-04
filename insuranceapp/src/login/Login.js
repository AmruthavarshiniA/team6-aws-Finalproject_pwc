import {Link} from "react-router-dom";
import userservice from "../services/userservice";

function Login(){



    return(
        <div>
        <div className="auth-from-body mt-3">
            <form>
                <div className="form-group">
                    <label>username</label>
                    <input 
                        type="text" 
                        
                        name="username"
                        placeholder="enter valid username"
                    />
                </div>
                <div className="form-group">
                    pass:<input 
                        type="password" 
                        name="password"
                        placeholder="enter valid password"
                    />
                </div>
                <div >
                    <button className="btn btn-primary">Login</button>
                </div>
                <div>
                <Link to="/adduser" className="btn btn-primary mb-2">forgotpassword?</Link>
                <Link to="/adduser" className="btn btn-primary mb-2">restpassword?</Link>
                </div>
                </form>
        </div>
        </div>
    )
}
export default Login