import './App.css';
import { Component } from 'react';
import {Route, NavLink, Switch, Link} from 'react-router-dom';
import Activities from './components/activities.js';
import Standards from './components/standards.js';
import Units from './components/units.js';
import Home from './components/home.js';
import helpicon from './helpicon.png'
import Help from './components/help.js';

class App extends Component{
  constructor(props){
    super(props);
    this.state = {
      dataObj: [
        {
          
        },
        {

        },
        {

        }
      ]
    }
    this.refreshData = this.refreshData.bind(this);
  }

  componentDidMount(){
    this.refreshData();
  }

  refreshData(){
    console.log('h');
    this.setState({dataObj: window.api.sendSync('data', '')});
  }

  render(){
    return (
      <div className="App">
        <title>Lesson Manager v1.0.0</title>
        <header id="main-nav">
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
          <Route path="/standards">
            <Standards dataObj={this.state.dataObj} refreshData={this.refreshData} />
          </Route>
          <Route path='/activities'>
            <Activities dataObj={this.state.dataObj}/>
          </Route>
          <Route path='/units'>
            <Units dataObj={this.state.dataObj}/>
          </Route>
          <Route path="/help" component={Help}/>
          <Route path='/'>
            <Home dataObj={this.state.dataObj}/>
          </Route>
        </Switch>
      </div>
    )
  }
}

export default App;
