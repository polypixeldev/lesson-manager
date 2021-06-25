import { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import DisplayWeeks from './displayweeks.js';
import Week from './week.js';
import './component.css';
class EditUnit extends Component {
	constructor(props){
		super(props);
		this.state = {
			name: null,
			weeks: null,
			unit: null
		}
		this.handleSubmit = this.handleSubmit.bind(this);
		this.addWeek = this.addWeek.bind(this);
		this.handleChange = this.handleChange.bind(this);
		this.removeWeek = this.removeWeek.bind(this);
		this.weekEdit = this.weekEdit.bind(this);
		this.listUnits = this.listUnits.bind(this);
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
		if(name === 'unit'){
			this.setState({
				name: value,
				weeks: this.props.dataObj[2][value]
			})
		}
	}

	handleSubmit(event){
		event.preventDefault();
		window.api.sendSync('edit-unit', {
			name: this.state.name,
			weeks: this.state.weeks,
			unit: this.state.unit
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

	listUnits(){
		return Object.entries(this.props.dataObj[2]).map((currentUnit, i) => {
			return <option value={currentUnit[0]}>{currentUnit[0]}</option>
		});
	}

	componentDidMount(){
		if(this.props.match.params.id !== 'null'){
			this.setState({
				unit: this.props.match.params.id,
				name: this.props.match.params.id,
				weeks: this.props.dataObj[2][this.props.match.params.id]
			});
		}
	}
	
	render(){
		return(
			<Switch>
				<Route path="/units/edit/weeks/:id" render={(props) => <Week weeks={this.state.weeks} from="edit" weekEdit={this.weekEdit} {...props} unitName={this.state.name} dataObj={this.props.dataObj}/>}/>
				<Route path="/units/edit/" render={(props) => 
					<main>
						<h3 id="newTitle">Edit Unit: </h3>
						<form id="new" onSubmit={this.handleSubmit}>
							<label for="unit" id="unit-label">Select a Unit:</label><br/>
							<select name="unit" value={this.state.unit} onChange={this.handleChange}>
								<option value="null">Select a Unit</option>
								{this.listUnits()}
							</select>
							<br/><br/>
							<label for="name" id="name-label">Unit Name:</label><br/>
							<input type="text" value={this.state.name} onChange={this.handleChange} id="name" name="name"/>
							<br/><br/>
							<ul>
								<DisplayWeeks from="edit" weeks={this.state.weeks} removeWeek={this.removeWeek} />
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

export default EditUnit;