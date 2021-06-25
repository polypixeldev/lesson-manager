import { Component } from 'react';

import './component.css';

class DeleteUnit extends Component {
	constructor(props){
		super(props);
		this.state = {
			unit: null
		}
		this.listUnits = this.listUnits.bind(this);
		this.handleChange = this.handleChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
	}
	
	listUnits(){
		return Object.entries(this.props.dataObj[2]).map((currentUnit, i) => {
			return <option value={currentUnit[0]}>{currentUnit[0]}</option>
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
		window.api.sendSync('delete-unit', this.state.unit);
		this.setState({
			unit: 'null'
		});
		this.props.refreshData();
	}

	componentDidMount(){
		if(this.props.match.params.id !== 'null'){
			this.setState({
				unit: this.props.match.params.id
			})
		}
	}

	render(){
		return(
			<main>
				<h2>Delete Unit:</h2>
				<form onSubmit={this.handleSubmit}>
					<label for="select-unit" id="select-unit-label">Select Unit:</label><br/>
					<select onChange={this.handleChange} value={this.state.unit} id="select-unit" name="unit">
						<option value='null'>Select a Unit</option>
						{this.listUnits()}
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