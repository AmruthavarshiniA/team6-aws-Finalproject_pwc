import {BrowserRouter, Switch, Route} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import AddPolicies from './Dashboards/admin/AddPolicies';
import Admin from './Dashboards/admin/Admin';
import User from './Dashboards/user/User';
import Home from './login/Home';
import Login from './login/Login';
import Register from './login/Register';
import Policy from './forms/Policy';
import Apply from './forms/Apply';
import Cart from './forms/Cart';
import Owner from './Dashboards/owner/Owner';
import Policies from './Dashboards/owner/views/Policiesrepo';
import Userrepo from './Dashboards/owner/views/Usersrepo';
import Bondsrepo from './Dashboards/owner/views/Bondsrepo';
import Feedback from './FS/Feedback';
import Feedbacks from './Dashboards/owner/views/Feedbacks';
import about from './login/about';
import contact from './login/contact';


function App(){

  return(
    <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/home" component={Home} />
          <Route exact path="/register" component={Register} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/admin" component={Admin} />
          <Route exact path="/addpolicy" component={AddPolicies} />
          <Route exact path="/policies/edit/:id" component={AddPolicies} />
          <Route exact path="/user/:id" component={User} />
          <Route exact path="/user" component={User} />
          <Route exact path="/policies/view/:id" component={Policy} />
          <Route exact path="/policies/apply/:uid/:pid" component={Apply} /> 
          <Route exact path="/cart/:uid" component={Cart} />
          <Route exact path="/owner" component={Owner} />
          <Route exact path="/allpolicies" component={Policies} />
          <Route exact path="/adminsview" component={Userrepo} />
          <Route exact path="/bondsview" component={Bondsrepo} />
          <Route exact path="/feedback" component={Feedback} />
          <Route exact path="/feedbackview" component={Feedbacks} />
          <Route exact path="/about" component={about} />
          <Route exact path="/contact" component={contact} />
          
        </Switch>
    </BrowserRouter>
  )
}
export default App