import { Component } from 'react';
import { Route, Switch, Link } from 'react-router-dom';
import StandardSelector from './standardselector.js';
import DisplayStandards from'./displaystandards.js';
import './component.css';

class EditActivity extends Component {
	constructor(props){
		super(props)
		this.state = {
			selected: null,
			name: null,
			id: null,
			notes: null,
			unit: null,
			standards: null
		}
		this.handleChange = this.handleChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
		this.getActivities = this.getActivities.bind(this);
		this.getUnits = this.getUnits.bind(this);
		this.getSelectedStandard = this.getSelectedStandard.bind(this);
		this.removeStandard = this.removeStandard.bind(this);
	}

	getActivities(){
		return Object.entries(this.props.dataObj[1]).map(function(currentStandard, i){
			return <option value={currentStandard[0]}>{currentStandard[0]}</option>
		});
	}

	getUnits(){
		return Object.entries(this.props.dataObj[2]).map(function(currentStandard, i){
			return <option value={currentStandard[0]}>{currentStandard[0]}</option>
		});
	}

	handleChange(event){
		if(event.target.value === 'null'){
			return;
		}
		const target = event.target;
		const value = target.value;
		const name = target.name;
		console.log(value);
		this.setState({
			[name]: value
		});
	}

	handleSubmit(event){
		event.preventDefault()
		window.api.sendSync('edit-activity', {
			activity: this.state.selected,
			name: this.state.name,
			id: this.state.id,
			notes: this.state.notes,
			unit: this.state.unit,
			standards: this.state.standards
		});
		this.props.refreshData();
	}

	getSelectedStandard(id){
		let oldStandards = this.state.standards;
		if(oldStandards === null){
			oldStandards = [];
		}
		oldStandards.push(id);
		this.setState({
			standards: oldStandards
		});
		console.log(this.state.standards);
	}

	removeStandard(i){
		
		let standardArr = this.state.standards;
		standardArr.splice(i, 1);
		this.setState({
			standards: standardArr
		});
		
	}

	render(){
		return(
			<Switch>
				<Route path="/activities/edit/selectstandard" render={(props)=>
					<StandardSelector from="editactivity" dataObj={this.props.dataObj} getSelectedStandard={this.getSelectedStandard}/>
				}/>
				<Route path="/activities/edit/">
					<main>
						<h2 id="Title">Edit Activity: </h2>
							<form onSubmit={this.handleSubmit} id="editActivity">
								<label for="choose-activity" id="choose-activity-label">Choose an activity:</label><br/>
								<select name="selected" id="choose-activity" value={this.state.selected} onChange={this.handleChange}>
									<option value={'null'}>Select an Activity</option>
									{this.getActivities()}
								</select>
								<br/><br/>
								<label for="name" id="name-label">Activity Name:</label><br/>
								<input type="text" id="name" name="name" value={this.state.name} onChange={this.handleChange}/>
								<br/><br/>
								<label for="id" id="id-label">Activity ID:</label><br/>
								<input type="text" id="id" name="id" value={this.state.id} onChange={this.handleChange}/>
								<br/><br/>
								<label for="notes" id="notes-label">Activity Notes</label><br/>
								<textarea name="notes" id="notes" value={this.state.notes} onChange={this.handleChange}/>
								<br/><br/>
								<label for="unit" id="unit-label">Activity Unit</label><br/>
								<select name="unit" value={this.state.unit} onChange={this.handleChange}>
									<option value="null">Select a Unit</option>
									{this.getUnits()}
								</select>
								<br/><br/>
								<Link to="/activities/edit/selectstandard">Add a Standard</Link><br/>
								<DisplayStandards removeStandard={this.removeStandard} standards={this.state.standards}/><br/>
								<input type="submit" id="submit"/>
							</form>
						</main>
				</Route>
			</Switch>
		)
	}
}

export default EditActivity;