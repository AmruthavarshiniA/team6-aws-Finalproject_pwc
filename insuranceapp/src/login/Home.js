import React, { useEffect, useState } from 'react';
import { Link, useHistory, useParams } from "react-router-dom";

function Home(){

    const [user, setUser]= useState([]);

    return(
        <div className="container">
            <a href="/register" className="btn btn-primary mb-2">Singn up</a>
            <a href="/login" className="btn btn-primary mb-2">sign in</a>
        </div>
    )

}
export default Home