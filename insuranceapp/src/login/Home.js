/* import React, { useEffect, useState } from 'react';
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
export default Home */

import React from "react";
import './index.css';

const BackgroundImagePage = () => {
  return (
    <div className="bg">
        <div className="container" padding-right="15px" padding-left="15px" width="100%" style={{backgroundImage:`url(pwcimg.jpg)`}}>
             <nav class="navbar navbar-expand-lg  navbar-dark bg-dark" width="100%" >
                 <a class="navbar-brand" href="#">Navbar</a>

                 <div class="collapse navbar-collapse" id="navbarNavDropdown">
                     <ul class="navbar-nav">
                      <li class="nav-item active">
                  <a class="nav-link" href="#">Home</a>
                     </li>
                    <li class="nav-item">
                     <a class="nav-link" href="#">Features</a>
                   </li>
                     <li class="nav-item">
                      <a class="nav-link" href="#">About us</a>
                      </li>                      <li class="nav-item">
                      <a class="nav-link" href="/register">Register</a>
                      </li>
                      <li class="nav-item">
                      <a class="nav-link" href="/login">Login</a>

                     </li>
                    </ul>
            </div>
             </nav>
             
                <div  class="col-lg-7 mb-6">
                   <p className="p"> 
                         An insurance policy is a legal contract that binds both policyholder and the insurance company towards each other. It has all the details of the conditions or circumstances under which either the insured individual or policy nominee receives insurance benefits from the insurer.
                 </p>
                 
                 <p className="p2">
                 Its aim is to reduce financial uncertainty and make accidental loss manageable. It does this substituting payment of a small, known fee—an insurance premium—to a professional insurer in exchange for the assumption of the risk a large loss, and a promise to pay in the event of such a loss.
                     </p>
                 </div>
                 
             </div>

             

             <div class="footer-copyright text-center py-12">© 2022 Copyright
  </div>

             
    </div>
  );
}

export default BackgroundImagePage;