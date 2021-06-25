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

function App() {
  return (
    <div>
      <Router >
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/product/:id' component={ProductDetails} />
          <Route exact path='/checkout' component={Checkout} />
          <Route exact path='/cart' component={Cart} />
          <Route exact path='/about' component={About} />
          <Route exact path='/account' component={Account} />
          <Route exact path='/faq' component={Faq} />
          <Route exact path='/dashboard' component={Dashboard} />
          <Route exact path='/basically-the-idea' component={HowWeWork} />
          <Route exact path='/how-we-work' component={BuyingSystem} />
          {/*<Route exact path='/terms-conditions' component={TnC} />
          <Route exact path='/cart/:id' component={Cart} />
          <Route exact path='/contact' component={Contact} />*/}
        </Switch>
      </Router>
    </div>
  );
}

export default App;
