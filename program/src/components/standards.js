import { Component } from 'react';
import { NavLink, Switch, Route } from 'react-router-dom';

import NewStandard from './newstandard.js';
import EditStandard from './editstandard.js';
import DeleteStandard from './deletestandard.js';
import StandardList from './standardlist.js';
import Standard from './standard.js';

import './component.css';

class Standards extends Component {
	render(){
		return(
			<main>
				<nav id="sub-nav">
					<NavLink className="sub-nav-link" to="/standards/new">New Standard</NavLink>
					<NavLink className="sub-nav-link" to="/standards/list">Standard List</NavLink>
					<NavLink className="sub-nav-link" to="/standards/edit/null">Edit Standard</NavLink>
					<NavLink className="sub-nav-link" to="/standards/delete/null">Delete Standard</NavLink>
				</nav>
				<Switch>
					<Route path="/standards/new">
						<NewStandard refreshData={this.props.refreshData}/>
					</Route>
					<Route path="/standards/edit/:id" component={(props) => <EditStandard {...props} dataObj={this.props.dataObj} refreshData={this.props.refreshData}/>}/>
					<Route path="/standards/delete/:id" component={(props) => <DeleteStandard {...props} dataObj={this.props.dataObj} refreshData={this.props.refreshData}/>}/>
					<Route exact path="/standards/list">
						<StandardList dataObj={this.props.dataObj}/>
					</Route>
					<Route path="/standards/:id" render={(props) => <Standard {...props} dataObj={this.props.dataObj}/>}/>
				</Switch>
			</main>
		)
	}
}

export default Standards;