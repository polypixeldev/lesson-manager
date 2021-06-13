import { Component } from 'react';
import { NavLink } from 'react-router-dom';

class Help extends Component {
	render(){
		return(
			<main>
				<h2 id="get-started">Get Started</h2>
				<hr></hr>
				
				<p id="starter-text">Welcome to Lesson Manager. This easy-to-use program will help you to organize your lessons in an easy way, instead of giant spreadsheets. Start off by <NavLink to="/standards/new">creating standards</NavLink> or <NavLink to="/units/new">creating a unit</NavLink>. Once you've done that, it will be easy to create your activities, organize them by unit, and keep track of what standards you're covering. Happy teaching!</p>
			</main>
		)
	}
}

export default Help;