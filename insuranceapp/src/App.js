import {BrowserRouter, Switch, Route} from 'react-router-dom';
import Adduser from './login/Adduser';
import Login from './login/Login';
import Register from './login/Register';


function App(){

  return(
    <BrowserRouter>
      <div>
        <Switch>
          <Route exact path="/adduser" component={Adduser} />
          <Route exact path="/register" component={Register} />
          <Route exact path="/login" component={Login} />
        </Switch>
      </div>
    </BrowserRouter>
  )
}
export default App