import { Component } from 'react';
//import { NavLink } from 'react-router-dom';
import './component.css';

class NewUnit extends Component {
	constructor(props){
		super(props)
		this.state = {
			name: null,
			weeks: null
		}
		this.handleChange = this.handleChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
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

	render(){
		return(
			<main>
				<h3 id="newTitle">New Unit: </h3>
				<form id="new">
					<label for="name" id="name-label">Unit Name:</label><br/>
					<input type="text" id="name" name="name"/>
					<br/><br/>
					<label for="id" id="id-label">Number of Weeks:</label><br/>
					<input type="text" id="id" name="id"/>
					<br/><br/>
					<input type="submit" id="submit"/>
				</form>
			</main>
		)
	}
}

export default NewUnit;