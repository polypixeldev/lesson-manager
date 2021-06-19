import { Component } from 'react';

import './component.css';

class DeleteStandard extends Component {
	constructor(props){
		super(props)
		this.state = {
			selected: null
		}
		this.handleSubmit = this.handleSubmit.bind(this);
		this.handleChange = this.handleChange.bind(this);
	}

	getStandards(){
		return Object.entries(this.props.dataObj[0]).map(function(currentStandard, i){
			return <option value={currentStandard[0]}>{currentStandard[0]}</option>
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
		window.api.send('delete-standard', this.state.selected);
		this.props.refreshData();
	}

	componentDidMount(){
		if(this.props.match.params.id !== null){
			this.setState({
				selected: this.props.match.params.id
			});
		}
	}

	render(){
		return(
			<main>
				<h2>Delete Standard:</h2>
				<form onSubmit={this.handleSubmit}>
					<label for="select-standard" id="select-standard-label">Select Standard:</label><br/>
					<select id="select-standard" name="selected" value={this.state.selected} onChange={this.handleChange}>
						{this.getStandards()}
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