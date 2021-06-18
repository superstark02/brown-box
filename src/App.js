import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './Pages/Home';
import Dashboard from './Pages/Dashboard';
import Single from './Pages/Single'
import Cart from './Pages/Cart';
import Login from './Pages/Login';
import PhoneVerify from './Pages/PhoneVerify';
import Contact from './Pages/Contact';
import ProductDisplay from './Pages/ProductDisplay';
import About from './Pages/About';

function App() {
  return (
    <div>
      <Router >
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/dashboard' component={Dashboard} />
          <Route exact path='/product' component={Single} />
          <Route exact path='/product/1' component={Single} />
          <Route exact path='/product/:id' component={ProductDisplay} />
          <Route exact path='/cart' component={Cart} />
          <Route exact path='/login' component={Login} />
          <Route exact path='/contact' component={Contact} />
          <Route exact path='/about' component={About} />
          <Route exact path='/phone-verify' component={PhoneVerify} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
