import { Component } from 'react';
import { Redirect } from 'react-router-dom';

class ActivityWeekItem extends Component {
	constructor(props){
		super(props);
		this.removeActivity = this.removeActivity.bind(this);
	}

	removeActivity(){
		this.props.removeActivity(this.props.i);
	}

	render(){
		return(
			<>
				<div id="item">
					<button onClick={this.removeActivity}>X</button>
					<p>{this.props.currentActivity}: {this.props.dataObj[1][this.props.currentActivity].name}</p>
				</div>
			</>
		)
	}
}

class Week extends Component {
	constructor(props){
		super(props);
		this.state = {
			activities: null,
			currentSelected: null,
			submitted: false
		}
		this.handleChange = this.handleChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
		this.listActivities = this.listActivities.bind(this);
		this.selectActivity = this.selectActivity.bind(this);
		this.handleAdd = this.handleAdd.bind(this);
		this.submitted = this.submitted.bind(this);
		this.removeActivity = this.removeActivity.bind(this);
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
		console.log('submit');
		event.preventDefault();
		this.props.weekEdit({
			num: this.props.match.params.id,
			activities: this.state.activities
		});
		this.setState({
			submitted: true
		});
	}

	listActivities(){
		if(this.state.activities === null || this.state.activities === '') return;
		return this.state.activities.map((currentActivity, i) => {
			console.log(currentActivity);
			return (
				<ActivityWeekItem removeActivity={this.removeActivity} currentActivity={currentActivity} dataObj={this.props.dataObj} i={i}/>
			)
		});
	}

	removeActivity(i){
		let activityArr = this.state.activities;
		activityArr.splice(i, 1);
		this.setState({
			activities: activityArr
		});
	}
	
	selectActivity(){
		return Object.entries(this.props.dataObj[1]).map((currentActivity, i) => {
			return <option value={currentActivity[0]}>{currentActivity[0]}: {currentActivity[1].name}</option>
		});
	}

	handleAdd(event){
		event.preventDefault();
		if(this.state.currentSelected === null) return;
		let activArr = this.state.activities;
		if(activArr === null || activArr === '') activArr = [];
		activArr.push(this.state.currentSelected);
		this.setState({
			activities: activArr,
			currentSelected: null
		})
	}
	
	submitted(){
		if(this.state.submitted === true){
			if(this.props.from === 'new'){
				return <Redirect to="/units/new"/>
			}
			if(this.props.from === 'edit'){
				return <Redirect to="/units/edit/null"/>
			}
		}
	}

	componentDidMount(){
		if(this.props.weeks){
			this.setState({
				activities: this.props.weeks[this.props.match.params.id]
			})
		}
	}

	render(){
		console.log('uhohoh');
		return(
			<main>
				<h2>{this.props.unitname} - Week {this.props.match.params.id}</h2>
				<hr/>
				<h3>Activities:</h3>
				{this.listActivities()}
				<form onSubmit={this.handleAdd}>
					<label for="activities" id="activities-label">Add an Activity:</label><br/>
					<select onChange={this.handleChange} name="currentSelected" value={this.state.currentSelected}>
						<option value="null">Select an Activity</option>
						{this.selectActivity()}
					</select>
					<button>Add</button>
				</form>
				<form onSubmit={this.handleSubmit}>
					<button>Back</button>
				</form>
				{this.submitted()}
			</main>
		)
	}
}

export default Week;