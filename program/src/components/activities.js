import { Component } from 'react';
import { NavLink, Switch, Route} from 'react-router-dom';

import NewActivity from './newactivity.js';
import EditActivity from './editactivity.js';
import DeleteActivity from './deleteactivity.js';

import './component.css';

class Activities extends Component {
	render(){
		return(
			<main>
				<nav id="sub-nav">
					<NavLink className="sub-nav-link" to="/activities/new">New Activity</NavLink>
					<NavLink className="sub-nav-link" to="/activities/list">Activity List</NavLink>
					<NavLink className="sub-nav-link" to="/activities/edit">Edit Activity</NavLink>
					<NavLink className="sub-nav-link" to="/activities/delete">Delete Activity</NavLink>
				</nav>

				<Switch>
					<Route path="/activities/new" component={NewActivity}/>
					<Route path="/activities/edit" component={EditActivity}/>
					<Route path="/activities/delete" component={DeleteActivity}/>
					<Route path="/activities/list">
						<h2>Activity List</h2>
						<ul>

						</ul>
					</Route>
				</Switch>
			</main>
		)
	}
}

export default Activities;