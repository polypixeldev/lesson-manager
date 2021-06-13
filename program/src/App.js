import './App.css';
import {Route, NavLink, Switch, Link} from 'react-router-dom';
import Activities from './components/activities.js';
import Standards from './components/standards.js';
import Units from './components/units.js';
import Home from './components/home.js';
import helpicon from './helpicon.png'
import Help from './components/help.js';

function App() {
  return (
    <div className="App">
      <title>Lesson Manager v1.0.0</title>
      <header>
        <Link to="/" id="title">
          <h1>Lesson Manager</h1>
          <p id="v">v1.0.0</p>
        </Link>
        <nav>
          <NavLink className="navlink" to="/standards/list">Standards</NavLink>
          <NavLink className="navlink" to="/activities/list">Activities</NavLink>
          <NavLink className="navlink" to="/units/report">Units</NavLink>
          <NavLink className="navlink" to="/help"><img id="helpicon" alt="" src={helpicon}/></NavLink>
        </nav>
      </header>
      <Switch>
        <Route path="/standards" component={Standards}/>
        <Route path='/activities' component={Activities}/>
        <Route path='/units' component={Units}/>
        <Route path="/help" component={Help}/>
        <Route exact path='/' component={Home}/>
      </Switch>
    </div>
  );
}

export default App;
