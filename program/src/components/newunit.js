import { Component } from 'react';
//import { NavLink } from 'react-router-dom';
import './component.css';

class NewUnit extends Component {
	render(){
		return(
			<main>
				<h3 id="newTitle">New Unit: </h3>
				<form id="new">
					<label for="name" id="name-label">Unit Name:</label><br/>
					<input type="text" id="name" name="name"/>
					<br/><br/>
					<label for="id" id="id-label">Number of Weeks:</label><br/>
					<input type="text" id="id" name="id"/>
					<br/><br/>
					<input type="submit" id="submit"/>
				</form>
			</main>
		)
	}
}

export default NewUnit;