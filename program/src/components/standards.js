import { Component } from 'react';
import { NavLink, Switch, Route } from 'react-router-dom';

import NewStandard from './newstandard.js';
import EditStandard from './editstandard.js';
import DeleteStandard from './deletestandard.js';
import StandardList from './standardlist.js';

import './component.css';

class Standards extends Component {
	render(){
		return(
			<main>
				<nav id="sub-nav">
					<NavLink className="sub-nav-link" to="/standards/new">New Standard</NavLink>
					<NavLink className="sub-nav-link" to="/standards/list">Standard List</NavLink>
					<NavLink className="sub-nav-link" to="/standards/edit">Edit Standard</NavLink>
					<NavLink className="sub-nav-link" to="/standards/delete">Delete Standard</NavLink>
				</nav>
				<Switch>
					<Route path="/standards/new" component={NewStandard}/>
					<Route path="/standards/edit" component={EditStandard}/>
					<Route path="/standards/delete" component={DeleteStandard}/>
					<Route exact path="/standards/list">
						<StandardList dataObj={this.props.dataObj}/>
					</Route>
				</Switch>
			</main>
		)
	}
}

export default Standards;