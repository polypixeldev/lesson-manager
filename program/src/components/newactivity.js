import { Component } from 'react';
import { Route, Switch, Link } from 'react-router-dom';
import StandardSelector from './standardselector.js';
import DisplayStandards from'./displaystandards.js';
import './component.css';

class NewActivity extends Component {
	constructor(props){
		super(props)
		this.state = {
			name: null,
			id: null,
			notes: null,
			standards: null
		}
		this.handleChange = this.handleChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
		this.getSelectedStandard = this.getSelectedStandard.bind(this);
		this.removeStandard = this.removeStandard.bind(this);
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
		event.preventDefault();
		window.api.sendSync('new-activity', {
			name: this.state.name,
			id: this.state.id,
			notes: this.state.notes,
			standards: this.state.standards
		});
		this.setState({
			name: '',
			id: '',
			notes: '',
			standards: []
		})
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
				<Route path="/activities/new/selectstandard" render={(props)=>
					<StandardSelector from="newactivity" dataObj={this.props.dataObj} getSelectedStandard={this.getSelectedStandard}/>
				}/>
				<Route path="/activities/new/">
					<main>
						<h2 id="Title">New Activity: </h2>
							<form onSubmit={this.handleSubmit} id="newActivity">
								<label for="name" id="name-label">Activity Name:</label><br/>
								<input required type="text" id="name" name="name" value={this.state.name} onChange={this.handleChange}/>
								<br/><br/>
								<label for="id" id="id-label">Activity ID:</label><br/>
								<input required type="text" id="id" name="id" value={this.state.id} onChange={this.handleChange}/>
								<br/><br/>
								<label for="notes" id="notes-label">Activity Notes</label><br/>
								<textarea name="notes" id="notes" value={this.state.notes} onChange={this.handleChange}/>
								<br/><br/>
								<Link to="/activities/new/selectstandard">Add a Standard</Link><br/>
								<DisplayStandards removeStandard={this.removeStandard} standards={this.state.standards}/><br/>
								<input type="submit" id="submit"/>
							</form>
						</main>
				</Route>
			</Switch>
		)
	}
}

export default NewActivity;