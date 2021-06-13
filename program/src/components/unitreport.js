import { Component } from 'react';
import './component.css';

class UnitReport extends Component {
	render(){
		return(
			<main>
				<h2>Unit Report</h2>
				<form>
					<label for="unit-choose" id="unit-choose-label">Choose a unit:</label><br/>
					<select id="unit-choose" name="unit-choose">

					</select>
				</form>
			</main>
		)
	}
}

export default UnitReport;