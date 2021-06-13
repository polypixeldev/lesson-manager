import { Component } from 'react';
import './component.css';

class EditUnit extends Component {
	render(){
		return(
			<main>
				<h2 id="Title">Edit Unit: </h2>
				<form id="newStandard">
					<label for="choose-activity" id="choose-activity-label">Choose a unit:</label><br/>
					<select name="choose-activity" id="choose-activity">

					</select>
					<br/><br/>
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

export default EditUnit;