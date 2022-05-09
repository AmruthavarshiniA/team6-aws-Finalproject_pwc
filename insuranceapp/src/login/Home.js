import React from "react";
import './Home.css';

const home = () => {
    return(
        <div class="bg">
        <nav class="navbar navbar-expand-lg fixed-top ">  
        <a class="navbar-brand" href="#">Home</a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">  
 <span class="navbar-toggler-icon"></span>
</button>
        <div class="collapse navbar-collapse " id="navbarSupportedContent">     <ul class="navbar-nav mr-4">
            <li class="nav-item">
            <a class="nav-link" data-value="about" href="/about">About</a>        </li>  
            <li class="nav-item">
                <a class="nav-link " data-value="portfolio"href="/register">Register</a>    
            </li>
   
            <li class="nav-item">  
                <a class="nav-link " data-value="team" href="/login">Login</a>       </li>  
            <li class="nav-item"> 
                <a class="nav-link " data-value="contact" href="/contact">Contact</a>       </li> 
            </ul> 
            </div></nav>

                <header class="header">
                    <div class="overlay"></div>
                    <div class="container">
                    <div class="description ">
                    <h1>    Hello ,Welcome To Our official Website
                    <p>     An insurance policy is a legal contract that binds 
                        both policyholder and the insurance company towards each other.
                         It has all the details of the conditions  under which either the insured individual or policy nominee receives insurance benefits from the insurer.
                    </p>   
                    <a class="btn btn-outline-secondary btn-lg" href="https://en.wikipedia.org/wiki/Insurance">See more</a>   </h1>  
                        </div>
    
                     </div>
  
                    </header>
        </div>

    )

}
export default home