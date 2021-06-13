import { Component } from 'react';

import './component.css';

class DeleteUnit extends Component {
	render(){
		return(
			<main>
				<h2>Delete Unit:</h2>
				<form>
					<label for="select-unit" id="select-unit-label">Select Unit:</label><br/>
					<select id="select-unit" name="select-unit">

					</select>
					<br/><br/>
					<label for="delete-submit" id="delete-submit-label">Are you sure you want to delete this unit? All associated activities will be lost - <strong>this action is not reversible.</strong></label><br/>
					<input type="submit" id="delete-submit" name="delete-submit"/>
				</form>
			</main>
		)
	}
}

export default DeleteUnit;