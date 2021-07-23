import { Component } from 'react';

import './component.css';

class DeleteActivity extends Component {
	constructor(props){
		super(props);
		this.state = {
			selected: null
		}
		this.handleChange = this.handleChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
		this.getActivities = this.getActivities.bind(this);
	}

	getActivities(){
		return Object.entries(this.props.dataObj[1]).map(function(currentStandard, i){
			return <option value={currentStandard[0]}>{currentStandard[0]}: {currentStandard[1].id}</option>
		});
	}

	handleChange(event){
		const target = event.target;
		const value = target.value;
		const name = target.name;
		console.log(value);
		this.setState({
			[name]: value
		});
	}

	handleSubmit(event){
		event.preventDefault();
		window.api.sendSync('delete-activity', this.state.selected);
		this.props.refreshData();
	}

	componentDidMount(){
		if(this.props.match.params.id !== 'null'){
			this.setState({
				selected: this.props.match.params.id
			});
		}
	}

	render(){
		return(
			<main>
				<h2>Delete Activity:</h2>
				<form onSubmit={this.handleSubmit}>
					<label for="select-activity" id="select-activity-label">Select Activity:</label><br/>
					<select id="select-activity" name="selected" value={this.state.selected} onChange={this.handleChange}>
						<option value="">Select an Activity</option>
						{this.getActivities()}
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