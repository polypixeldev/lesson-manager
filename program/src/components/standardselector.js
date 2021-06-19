import { Component } from 'react';
import { Link, Redirect } from'react-router-dom';

class StandardLevel extends Component {
	constructor(props){
		super(props);
		this.state = {
			standard: false
		}
		this.isStandard = this.isStandard.bind(this);
	}
	isStandard(){
		this.setState({
			standard: true
		});
	}

	render(){
		if(this.state.standard === true && this.props.from !== 'editstandard'){
			return(
				<>
					<input type="submit"/>
				</>
			)
		} else {
		return(
			<>
				<label for={this.props.i} id={this.props.i + "-label"}>Choose a {this.props.type}:</label><br/>
				<select name={this.props.i} value={this.props.currentLevel[this.props.i]}onChange={this.props.handleChange}>
					<option value='null'>Select an Option</option>
					{this.props.getStandards(this.props.type === "Domain" ? "top" : this.props.position, this.isStandard)}
				</select>
				<br/><br/>
			</>
		)
	}
}
}

class StandardSelector extends Component {
	constructor(props){
		super(props);
		this.state = {
			currentLevel: ["Select a Domain"],
			submitted: false
		}
		this.getStandards = this.getStandards.bind(this);
		this.renderLevels = this.renderLevels.bind(this);
		this.handleChange = this.handleChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
	}

	getStandards(position, isStandard){
		console.log(position);
		if(position === 'top'){
			return Object.entries(this.props.dataObj[0]).map(function(currentStandard, i){
				return <option value={currentStandard[0]}>{currentStandard[0]}: {currentStandard.desc}</option>
		});
		}
		let posObj = this.props.dataObj[0];
		for(let index of position){
			posObj = posObj[index];
			console.log(index);
		}
		if(posObj.standard === true){
			return isStandard();
		}
		let func = function(currentStandard, i){
			if(currentStandard[0] === 'desc'){
				return '';
			}
			if(currentStandard[0] === 'standard'){
				return '';
			}
			return <option value={currentStandard[0]}>{currentStandard[0]}: {currentStandard[1].desc}</option>
		}
		func = func.bind(this);

		return Object.entries(posObj).map(func);
	}

	renderLevels(){
		let func = function(currentLevel, i){
			return <StandardLevel currentLevel={this.state.currentLevel} handleChange={this.handleChange} type={i === 0 ? 'Domain' : i === (this.state.currentLevel.length - 1) ? 'Standard' : 'Sub-Domain'} position={this.state.currentLevel.slice(0, i)} getStandards={this.getStandards} i={i} />
		}
		func = func.bind(this);
		return this.state.currentLevel.map(func);
	}

	handleChange(event){
		/*
		const target = event.target;
		const value = target.value;
		const name = target.name;
		console.log(value);
		this.setState({
			[name]: value
		});
		*/
		console.log(event.target.value)
		if(event.target.value === 'null'){
			return;
		}
		console.log(event.target.name);
		let oldLevel = this.state.currentLevel;
		if(oldLevel[0] === 'Select a Domain'){
			oldLevel[0] = event.target.value;
			oldLevel[1] = "Select";
		} else {
			oldLevel[`${event.target.name}`] = event.target.value;
			oldLevel[`${parseInt(event.target.name, 10) + 1}`] = "Select"
		}
		this.setState({
			currentLevel: oldLevel
		})
	}

	handleSubmit(event){
		event.preventDefault();
		let standard = this.state.currentLevel;
		standard.pop();
		this.props.getSelectedStandard(standard.join('.'));
		this.setState({
			submitted: true
		});
	}

	submitted(){
		if(this.state.submitted === true){
			if(this.props.from === 'editactivity'){
				return <Redirect to="/activities/edit"/>
			} else if(this.props.from === 'newactivity'){
				return <Redirect to="/activities/new"/>
			} else if(this.props.from === 'editstandard'){
				return <Redirect to="/standards/edit"/>
			}
		}
		if(this.props.from === 'editstandard'){
			return <input type="submit"/>
		}
	}

	render(){
		return(
			<main>
				<form onSubmit={this.handleSubmit}>
					{this.renderLevels()}
				</form><br/>
				{this.submitted()}
				<Link to="/activities/edit">Back</Link>
			</main>
		)
	}
}

export default StandardSelector