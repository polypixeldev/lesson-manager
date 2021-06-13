import { Component } from 'react';
//import { NavLink } from 'react-router-dom';
import './component.css';

class NewStandard extends Component {
	render(){
		return(
			<main>
				<h2 id="Title">New Standard: </h2>
				<form id="newStandard">
					<label for="name" id="name-label">Standard Name:</label><br/>
					<input type="text" id="name" name="name"/>
					<br/><br/>
					<label for="id" id="id-label">Standard ID:</label><br/>
					<input type="text" id="id" name="id"/>
					<br/><br/>
					<input type="submit" id="submit"/>
				</form>
			</main>
		)
	}
}

export default NewStandard;