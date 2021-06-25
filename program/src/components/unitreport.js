import { Component } from 'react';
import { Redirect, Switch, Route } from 'react-router-dom';

import FullReport from './fullreport.js';
import MissingReport from './missingreport.js';

import './component.css';
import './slider.css';

class UnitReport extends Component {
	constructor(props){
		super(props);
		this.state = {
			unit: null,
			view: false
		}
		this.getUnits = this.getUnits.bind(this);
		this.handleChange = this.handleChange.bind(this);
	}

	getUnits(){
		return Object.entries(this.props.dataObj[2]).map((currentUnit, i) => {
			return <option value={currentUnit[0]}>{currentUnit[0]}</option>
		});
	}

	handleChange(event){
		if(event.target.value === 'null'){
			return;
		}
		const target = event.target;
		const value = target.type === 'checkbox' ? target.checked : target.value;
		const name = target.name;
		console.log(value);
		this.setState({
			[name]: value
		});
	}

	redirect(){
		if(this.state.unit !== null && this.state.unit !== 'null'){
			if(this.state.view === true){
				return <Redirect to="/units/report/missing"/>
			}
			if(this.state.view === false){
				return <Redirect to="/units/report/full"/>
			}
		}
	}

	render(){
		return(
			<main>
				<h2>Unit Report</h2>
				<div id="switch-div">
					<p>Full <br/> Unit</p>
					<label class="switch">
						<input type="checkbox" name="view" onChange={this.handleChange} checked={this.state.view}/>
						<span class="slider"></span>
					</label>
					<p>Missing <br/> Standards</p>
				</div>
				<hr/>
				{this.redirect()}
				<form>
					<label for="unit-choose" id="unit-choose-label">Choose a unit:</label><br/>
					<select id="unit-choose" name="unit" value={this.state.unit} onChange={this.handleChange}>
						<option value="null">Select a Unit</option>
						{this.getUnits()}
					</select>
				</form>
				<Switch>
					<Route path="/units/report/full" render={(props) => <FullReport unit={this.state.unit} dataObj={this.props.dataObj}/>}/>
					<Route path="/units/report/missing" render={(props) => <MissingReport unit={this.state.unit} dataObj={this.props.dataObj}/>}/>
				</Switch>
			</main>
		)
	}
}

export default UnitReport;