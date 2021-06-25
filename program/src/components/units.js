import { Component } from 'react';
import { NavLink, Switch, Route} from 'react-router-dom';

import NewUnit from './newunit.js';
import UnitReport from './unitreport.js';
import EditUnit from './editunit.js';
import DeleteUnit from './deleteunit.js';
import UnitList from './unitlist.js';
import Unit from './unit.js';

import './component.css';

class Units extends Component {
	render(){
		return(
			<main>
				<nav id="sub-nav">
					<NavLink className="sub-nav-link" to="/units/new">New Unit</NavLink>
					<NavLink className="sub-nav-link" to="/units/report">Unit Report</NavLink>
					<NavLink className="sub-nav-link" to="/units/list">Unit List</NavLink>
					<NavLink className="sub-nav-link" to="/units/edit/null">Edit Unit</NavLink>
					<NavLink className="sub-nav-link" to="/units/delete/null">Delete Unit</NavLink>
				</nav>

				<Switch>
					<Route path="/units/new" render={(props) => <NewUnit {...props} dataObj={this.props.dataObj} refreshData={this.props.refreshData}/>}/>
					<Route path="/units/edit/:id" render={(props) => <EditUnit {...props} dataObj={this.props.dataObj} refreshData={this.props.refreshData}/>}/>
					<Route path="/units/report" render={(props) => <UnitReport {...props} dataObj={this.props.dataObj} refreshData={this.props.refreshData}/>}/>
					<Route path="/units/delete/:id" render={(props) => <DeleteUnit {...props} dataObj={this.props.dataObj} refreshData={this.props.refreshData}/>}/>
					<Route path="/units/list" render={(props) => <UnitList {...props} dataObj={this.props.dataObj} refreshData={this.props.refreshData}/>}/>
					<Route path="/units/:id" render={(props) => <Unit {...props} dataObj={this.props.dataObj} refreshData={this.props.refreshData}/>}/>
				</Switch>
			</main>
		)
	}
}

export default Units;