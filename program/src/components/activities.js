import { Component } from 'react';
import { NavLink, Switch, Route} from 'react-router-dom';

import NewActivity from './newactivity.js';
import EditActivity from './editactivity.js';
import DeleteActivity from './deleteactivity.js';
import ActivityList from './activitylist.js';
import Activity from './activity.js';

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
					<Route path="/activities/new" render={(props) => 
						<NewActivity {...props} dataObj={this.props.dataObj} refreshData={this.props.refreshData}/>
					}/>
					<Route path="/activities/edit/:id" render={(props) => <EditActivity {...props} dataObj={this.props.dataObj} refreshData={this.props.refreshData}/>}/>
					<Route path="/activities/delete/:id" render={(props) => <DeleteActivity {...props} dataObj={this.props.dataObj} refreshData={this.props.refreshData}/>}/>
					<Route path="/activities/list">
						<ActivityList dataObj={this.props.dataObj}/>
					</Route>
					<Route path="/activities/:id" render={(props) => <Activity {...props} dataObj={this.props.dataObj}/>}/>
				</Switch>
			</main>
		)
	}
}

export default Activities;