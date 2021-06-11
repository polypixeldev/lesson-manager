import { Component } from 'react';
import { NavLink } from 'react-router-dom';
import './component.css';

class Standards extends Component {
	render(){
		return(
			<main>
				<nav id="sub-nav">
					<NavLink className="sub-nav-link" to="/new">New Standard</NavLink>
					<NavLink className="sub-nav-link" to="/list">Standard List</NavLink>
					<NavLink className="sub-nav-link" to="/edit">Edit Standard</NavLink>
				</nav>
			</main>
		)
	}
}

export default Standards;