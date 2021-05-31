import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './Pages/Home';
import Dashboard from './Pages/Dashboard';
import Single from './Pages/Single'
import Test from './Pages/Test';
import Cart from './Pages/Cart';
import Login from './Pages/Login';
import PhoneVerify from './Pages/PhoneVerify';

function App() {
  return (
    <div>
      <Router >
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/dashboard' component={Dashboard} />
          <Route exact path='/product' component={Single} />
          <Route exact path='/cart' component={Cart} />
          <Route exact path='/login' component={Login} />
          <Route exact path='/phone-verify' component={PhoneVerify} />
          <Route exact path='/data' component={Test} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
