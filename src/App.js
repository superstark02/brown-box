import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './Pages/Home';

function App() {
  return (
    <div>
      <Router >
        <Switch>
          <Route exact path='/' component={Home} />
          {/*<Route exact path='/terms-conditions' component={TnC} />
          <Route exact path='/dashboard' component={Dashboard} />
          <Route exact path='/product' component={Single} />
          <Route exact path='/product/1' component={Single} />
          <Route exact path='/product/:id' component={ProductDisplay} />
          <Route exact path='/game-of-the-week' component={GamePage} />
          <Route exact path='/cart/:id' component={Cart} />
          <Route exact path='/login' component={Login} />
          <Route exact path='/contact' component={Contact} />
          <Route exact path='/about' component={About} />
          <Route exact path='/phone-verify' component={PhoneVerify} />*/}
        </Switch>
      </Router>
    </div>
  );
}

export default App;
