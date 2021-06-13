import { Component } from 'react';

import './component.css';

class DeleteActivity extends Component {
	render(){
		return(
			<main>
				<h2>Delete Activity:</h2>
				<form>
					<label for="select-activity" id="select-activity-label">Select Activity:</label><br/>
					<select id="select-activity" name="select-activity">

					</select>
					<br/><br/>
					<label for="delete-submit" id="delete-submit-label">Are you sure you want to delete this activity? It will be removed from it's associated unit - <strong>this action is not reversible.</strong></label><br/>
					<input type="submit" id="delete-submit" name="delete-submit"/>
				</form>
			</main>
		)
	}
}

export default DeleteActivity;