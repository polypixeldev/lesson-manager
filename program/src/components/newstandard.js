import { Component } from 'react';
//import { NavLink } from 'react-router-dom';
import './component.css';

class NewStandard extends Component {
	constructor(props){
		super(props)
		this.state = {
			desc: null,
			id: null
		}
		this.handleChange = this.handleChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
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
		console.log(this.state.desc);
		window.api.sendSync('new-standard', [this.state.id, this.state.desc]);
		this.setState({
			desc: '',
			id: ''
		});
		this.props.refreshData();
		event.preventDefault();
	}

	render(){
		return(
			<main>
				<h2 id="Title">New Standard: </h2>
				<form id="newStandard" onSubmit={this.handleSubmit}>
					<label for="desc" id="desc-label">Standard Description:</label><br/>
					<textarea id="desc" name="desc" value={this.state.desc} onChange={this.handleChange}/>
					<br/><br/>
					<label for="id" id="id-label">Standard ID:</label><br/>
					<input type="text" id="id" name="id" value={this.state.id} onChange={this.handleChange}/>
					<br/><br/>
					<input type="submit" id="submit"/>
				</form>
			</main>
		)
	}
}

export default NewStandard;