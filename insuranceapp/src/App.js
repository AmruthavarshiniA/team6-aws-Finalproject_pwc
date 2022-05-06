import {BrowserRouter, Switch, Route} from 'react-router-dom';
import AddPolicies from './Dashboards/admin/AddPolicies';
import Admin from './Dashboards/admin/Admin';
import User from './Dashboards/user/User';
import Home from './login/Home';
import Login from './login/Login';
import Register from './login/Register';


function App(){

  return(
    <BrowserRouter>
      <div>
        <Switch>
          <Route exact path="/home" component={Home} />
          <Route exact path="/register" component={Register} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/admin" component={Admin} />
          <Route exact path="/addpolicy" component={AddPolicies} />
          <Route exact path="/policies/edit/:id" component={AddPolicies} />
          <Route exact path="/user" component={User} />
        </Switch>
      </div>
    </BrowserRouter>
  )
}
export default App