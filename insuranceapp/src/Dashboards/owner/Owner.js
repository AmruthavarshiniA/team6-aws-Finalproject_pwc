import { Link} from "react-router-dom";
import './ownercss.css'
const Owner = () =>{

    return(
        <div>
        <nav class="navbar navbar-expand-lg navbar-light">
  <div class="container-fluid">
    <a class="navbar-brand" href="#"><h2>WELCOME OWNER</h2></a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
      <div class="navbar-nav">
        <a class="nav-link" href="/allpolicies">View policies</a>
        <a class="nav-link" href="/adminsview">View admin</a>
        <a class="nav-link" href="/bondsview">View bonds</a>
        <a class="nav-link" href="/feedbackview">View feedback</a>
        <a class="nav-link" href="/admin">Admin page</a>
        <a class="nav-link" href="/user">User page</a>
      </div>
    </div>
  </div>
</nav>

<br></br>
        
<div class="split left">
  <div class="centered">
    <img height="250px" width="200px" src="data:image/png;base64,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"></img>
    
  </div>
</div>

<div class="split right">
  <div class="centered">
    <h6>In 1854, William Cooper founded an accountancy practice in London, England. It became Cooper Brothers seven years later when his three brothers joined.

In 1898, Robert H. Montgomery, William M. Lybrand, Adam A. Ross Jr. and his brother T. Edward Ross formed Lybrand, Ross Brothers and Montgomery in the United States.

In 1957, Cooper Brothers, along with Lybrand, Ross Bros & Montgomery and a Canadian firm , agreed to adopt the name Coopers & Lybrand in international practice.</h6>
    
  </div>
</div>

</div>
    )
}
export default Owner