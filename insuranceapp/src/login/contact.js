import React from "react";
import './Home.css';

const contact=()=>{
    return(
        <div class="contact-form">
            <div class="container">
                <form>
                 <div class="row">
                    <div class="col-lg-4 col-md-4 col-sm-12">
                    <h1>Get in Touch</h1> 
                    </div>
                    <div class="col-lg-8 col-md-8 col-sm-12 right">
                    <div class="form-group">
                    <input type="text" class="form-control form-control-lg" placeholder="Your Name" name=""></input>
       </div>
       <br></br>
       <div class="form-group">
         <input type="email" class="form-control form-control-lg" placeholder="YourEmail@email.com" name="email"></input>
       </div><br></br>
       <div class="form-group">
         <textarea class="form-control form-control-lg">
          
         </textarea>
       </div>
       <br></br>
       <input type="submit" class="btn btn-secondary btn-block" value="Send" name=""></input>
    </div>
    <br></br>
   </div>
  </form>
 </div>
</div>
    )
}
export default contact