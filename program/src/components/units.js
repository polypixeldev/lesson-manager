import { Component } from 'react';
import { NavLink, Switch, Route} from 'react-router-dom';

import NewUnit from './newunit.js';
import UnitReport from './unitreport.js';
import EditUnit from './editunit.js';
import DeleteUnit from './deleteunit.js';

import './component.css';

class Units extends Component {
	render(){
		return(
			<main>
				<nav id="sub-nav">
					<NavLink className="sub-nav-link" to="/units/new">New Unit</NavLink>
					<NavLink className="sub-nav-link" to="/units/report">Unit Report</NavLink>
					<NavLink className="sub-nav-link" to="/units/edit">Edit Unit</NavLink>
					<NavLink className="sub-nav-link" to="/units/delete">Delete Unit</NavLink>
				</nav>

				<Switch>
					<Route path="/units/new" component={NewUnit}/>
					<Route path="/units/edit" component={EditUnit}/>
					<Route path="/units/report" component={UnitReport}/>
					<Route path="/units/delete" component={DeleteUnit}/>
					<Route exact path="/units">
						<h2>Unit List</h2>
						<ul>

						</ul>
					</Route>
				</Switch>
			</main>
		)
	}
}

export default Units;