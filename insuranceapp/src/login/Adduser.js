import React, { useEffect, useState } from 'react';
import { Link, useHistory, useParams } from "react-router-dom";

function Adduser(){

    const [user, setUser]= useState([]);

    return(
        <div className="container">
            <Link to="/register" className="btn btn-primary mb-2">Register</Link>
            <Link to="/login" className="btn btn-primary mb-2">Login</Link>
        </div>
    )

}
export default Adduser