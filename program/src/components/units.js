import { Component } from 'react';
import { NavLink } from 'react-router-dom';

class Units extends Component {
	render(){
		return(
			<main>
				<nav id="sub-nav">
					<NavLink className="sub-nav-link" to="/new">New Unit</NavLink>
					<NavLink className="sub-nav-link" to="/report">Unit Report</NavLink>
					<NavLink className="sub-nav-link" to="/edit">Edit Unit</NavLink>
				</nav>
			</main>
		)
	}
}

export default Units;