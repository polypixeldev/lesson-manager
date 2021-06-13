import { Component } from 'react';
import './component.css';

class EditStandard extends Component {
	render(){
		return(
			<main>
				<h2 id="Title">Edit Activity: </h2>
				<form id="newStandard">
					<label for="choose-activity" id="choose-activity-label">Choose a standard:</label><br/>
					<select name="choose-activity" id="choose-activity">

					</select>
					<br/><br/>
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

export default EditStandard;