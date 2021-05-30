import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './Pages/Home';
import Dashboard from './Pages/Dashboard';
import Single from './Pages/Single'
import Test from './Pages/Test';
import Cart from './Pages/Cart';

function App() {
  return (
    <div>
      <Router >
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/dashboard' component={Dashboard} />
          <Route exact path='/product' component={Single} />
          <Route exact path='/cart' component={Cart} />
          <Route exact path='/data' component={Test} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
