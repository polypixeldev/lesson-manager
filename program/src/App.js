import './App.css';
import {Route, NavLink, Switch, Link} from 'react-router-dom';
import Activities from './components/activities.js';
import Standards from './components/standards.js';
import Units from './components/units.js';
import Home from './components/home.js';

function App() {
  return (
    <div className="App">
      <header>
        <Link to="/" id="title">
          <h1>Lesson Manager</h1>
          <p id="v">v1.0.0</p>
        </Link>
        <nav>
          <NavLink className="navlink" to="/standards">Standards</NavLink>
          <NavLink className="navlink" to="/activities">Activities</NavLink>
          <NavLink className="navlink" to="/units">Units</NavLink>
        </nav>
      </header>
      <Switch>
        <Route path="/standards" component={Standards}/>
        <Route path='/activities' component={Activities}/>
        <Route path='/units' component={Units}/>
        <Route exact path='/' component={Home}/>
      </Switch>
    </div>
  );
}

export default App;
