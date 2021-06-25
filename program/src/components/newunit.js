import { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import DisplayWeeks from './displayweeks.js';
import Week from './week.js';
import './component.css';
class NewUnit extends Component {
	constructor(props){
		super(props);
		this.state = {
			name: null,
			weeks: null
		}
		this.handleSubmit = this.handleSubmit.bind(this);
		this.addWeek = this.addWeek.bind(this);
		this.handleChange = this.handleChange.bind(this);
		this.removeWeek = this.removeWeek.bind(this);
		this.weekEdit = this.weekEdit.bind(this);
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
		window.api.sendSync('new-unit', {
			name: this.state.name,
			weeks: this.state.weeks
		});
		this.setState({
			name: '',
			weeks: ''
		});
		this.props.refreshData();
	}

	addWeek(){
		let weekArr = this.state.weeks;
		if(weekArr === null){
			weekArr = [];
		}
		weekArr.push([]);
		this.setState({
			weeks: weekArr
		});
	}

	removeWeek(i){
		let weekArr = this.state.weeks;
		weekArr.splice(i, 1);
		this.setState({
			weeks: weekArr
		});
	}

	weekEdit(arg){
		let weeks = this.state.weeks;
		weeks[arg.num] = arg.activities
		this.setState({
			weeks: weeks
		});
	}
	
	render(){
		return(
			<Switch>
				<Route path="/units/new/weeks/:id" render={(props) => <Week from="new" weekEdit={this.weekEdit} {...props} unitName={this.state.name} dataObj={this.props.dataObj}/>}/>
				<Route path="/units/new/" render={(props) => 
					<main>
						<h3 id="newTitle">New Unit: </h3>
						<form id="new" onSubmit={this.handleSubmit}>
							<label for="name" id="name-label">Unit Name:</label><br/>
							<input type="text" value={this.state.name} onChange={this.handleChange} id="name" name="name"/>
							<br/><br/>
							<ul>
								<DisplayWeeks from="new" weeks={this.state.weeks} removeWeek={this.removeWeek} />
							</ul>
							<button type="button" onClick={this.addWeek}>+</button>
							<br/><br/>
							<input type="submit"/>
						</form>
					</main>
				}/>
			</Switch>
		)
	}
}

export default NewUnit;