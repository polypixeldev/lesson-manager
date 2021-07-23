import { Component } from 'react';
import { Route, Switch, Link } from 'react-router-dom';
import StandardSelector from './standardselector.js';
import DisplayStandards from'./displaystandards.js';
import './component.css';

class EditActivity extends Component {
	constructor(props){
		super(props)
		this.state = {
			activity: null,
			name: null,
			id: null,
			notes: null,
			standards: null
		}
		this.handleChange = this.handleChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
		this.getActivities = this.getActivities.bind(this);
		this.getSelectedStandard = this.getSelectedStandard.bind(this);
		this.removeStandard = this.removeStandard.bind(this);
	}

	getActivities(){
		return Object.entries(this.props.dataObj[1]).map(function(currentStandard, i){
			return <option value={currentStandard[0]}>{currentStandard[0]}: {currentStandard[1].id}</option>
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
		if(name === 'activity'){
			this.setState({
				name: value,
				id: this.props.dataObj[1][value].id,
				notes: this.props.dataObj[1][value].notes,
				standards: this.props.dataObj[1][value].standards
			})
		}
	}

	handleSubmit(event){
		event.preventDefault()
		let res = window.api.sendSync('edit-activity', {
			activity: this.state.activity,
			name: this.state.name,
			id: this.state.id,
			notes: this.state.notes,
			standards: this.state.standards
		});
		if(res === 'fail-activity'){
			return alert('Please select an activity to edit');
		}
		this.setState({
			activity: 'null',
			name: '',
			id: '',
			notes: '',
			standards: []
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

	componentDidMount(){
		console.log(this.props.match.params.id);
		if(this.props.match.params.id !== 'null'){
			this.setState({
				activity: this.props.match.params.id,
				name: this.props.match.params.id,
				id: this.props.dataObj[1][this.props.match.params.id].id,
				notes: this.props.dataObj[1][this.props.match.params.id].notes,
				standards: this.props.dataObj[1][this.props.match.params.id].standards
			});
		}
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
								<select required name="activity" id="choose-activity" value={this.state.activity} onChange={this.handleChange}>
									<option value={'null'}>Select an Activity</option>
									{this.getActivities()}
								</select>
								<br/><br/>
								<label for="name" id="name-label">Activity Name:</label><br/>
								<input required type="text" id="name" name="name" value={this.state.name} onChange={this.handleChange}/>
								<br/><br/>
								<label for="id" id="id-label">Activity ID:</label><br/>
								<input required type="text" id="id" name="id" value={this.state.id} onChange={this.handleChange}/>
								<br/><br/>
								<label for="notes" id="notes-label">Activity Notes</label><br/>
								<textarea name="notes" id="notes" value={this.state.notes} onChange={this.handleChange}/>
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