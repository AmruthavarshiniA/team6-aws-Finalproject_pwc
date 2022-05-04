import React, { useEffect, useState } from 'react';
import { Link, useHistory, useParams } from "react-router-dom";

function Adduser(){

    const [user, setUser]= useState([]);

    return(
        <div className="container">
            <a href="/register" className="btn btn-primary mb-2">Register</a>
            <a href="/login" className="btn btn-primary mb-2">Login</a>
        </div>
    )

}
export default Adduser