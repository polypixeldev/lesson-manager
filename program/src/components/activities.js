import { Component } from 'react';
import { NavLink } from 'react-router-dom';
import './component.css';

class Activities extends Component {
	render(){
		return(
			<main>
				<nav id="sub-nav">
					<NavLink className="sub-nav-link" to="/new">New Activity</NavLink>
					<NavLink className="sub-nav-link" to="/list">Activity List</NavLink>
					<NavLink className="sub-nav-link" to="/edit">Edit Activity</NavLink>
				</nav>
			</main>
		)
	}
}

export default Activities;