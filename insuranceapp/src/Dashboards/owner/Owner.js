import { Link} from "react-router-dom";

const Owner = () =>{

    return(
        <div>
            <Link className="btn btn-info" to={`/allpolicies`}>View policies</Link>
            <Link className="btn btn-info" to={`/adminsview`}>View admin</Link>
            <Link className="btn btn-info" to={`/bondsview`}>View bonds</Link>
            <Link className="btn btn-info" to={`/feedbackview`}>View feedback</Link>
        </div>
    )
}
export default Owner