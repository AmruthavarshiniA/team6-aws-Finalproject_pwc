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


function App(){

  return(
    <BrowserRouter>
        <Switch>
          <Route exact path="/home" component={Home} />
          <Route exact path="/register" component={Register} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/admin" component={Admin} />
          <Route exact path="/addpolicy" component={AddPolicies} />
          <Route exact path="/policies/edit/:id" component={AddPolicies} />
          <Route exact path="/user/:id" component={User} />
          <Route exact path="/policies/view/:id" component={Policy} />
          <Route exact path="/policies/apply/:uid/:pid" component={Apply} /> 
          <Route exact path="/cart/:uid" component={Cart} />
        </Switch>
    </BrowserRouter>
  )
}
export default App