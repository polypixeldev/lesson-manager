import { Component } from 'react';

import './component.css';

class DeleteStandard extends Component {
	render(){
		return(
			<main>
				<h2>Delete Standard:</h2>
				<form>
					<label for="select-standard" id="select-standard-label">Select Standard:</label><br/>
					<select id="select-standard" name="select-standard">

					</select>
					<br/><br/>
					<label for="delete-submit" id="delete-submit-label">Are you sure you want to delete this standrad? It will be removed from it's associated activities - <strong>this action is not reversible.</strong></label><br/>
					<input type="submit" id="delete-submit" name="delete-submit"/>
				</form>
			</main>
		)
	}
}

export default DeleteStandard;