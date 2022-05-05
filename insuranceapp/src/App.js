import {BrowserRouter, Switch, Route} from 'react-router-dom';
import AddPolicies from './Dashboards/admin/AddPolicies';
import Admin from './Dashboards/admin/Admin';
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
          <Route path="/addpolicy" component={AddPolicies} />
            <Route path="/policies/edit/ :id}" component={AddPolicies} />
        </Switch>
      </div>
    </BrowserRouter>
  )
}
export default App