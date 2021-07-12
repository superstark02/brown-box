import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './Pages/Home';
import ProductDetails from './Pages/ProductDetails';
import Checkout from './Pages/Checkout';
import Cart from './Pages/Cart';
import About from './Pages/About';
import Account from './Pages/Account';
import Faq from './Pages/Faq';
import Dashboard from './Pages/Dashboard';
import HowWeWork from './Pages/HowWeWork';
import BuyingSystem from './Pages/BuyingSystem';
import Contact from "./Pages/Contact"
import "./css/style.css"
import "./css/vendor/bootstrap.min.css"
import "./css/vendor/helper.css"
import "./css/plugins/plugins.css"
import TnC from './Pages/TnC';
import Success from './Pages/Success';
import Failed from './Pages/Failed';
import LoginPage from './Pages/LoginPage';

function App() {
  return (
    <div>
      <Router >
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/display/:doc/:id' component={ProductDetails} />
          <Route exact path='/checkout' component={Checkout} />
          <Route exact path='/cart/:doc/:id' component={Cart} />
          <Route exact path='/about' component={About} />
          <Route exact path='/account' component={Account} />
          <Route exact path='/faq' component={Faq} />
          <Route exact path='/dashboard' component={Dashboard} />
          <Route exact path='/basically-the-idea' component={HowWeWork} />
          <Route exact path='/how-we-work' component={BuyingSystem} />
          <Route exact path='/contact' component={Contact} />
          <Route exact path='/payment-success/:payment_mode' component={Success} />
          <Route exact path='/payment-failed' component={Failed} />
          <Route exact path='/tnc' component={TnC} />
          <Route exact path='/login' component={LoginPage} />
          {/*<Route exact path='/terms-conditions' component={TnC} />
          <Route exact path='/cart/:id' component={Cart} />*/}
        </Switch>
      </Router>
    </div>
  );
}

export default App;
