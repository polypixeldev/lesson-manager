import { Component } from 'react';
import { Link, Route, Switch } from 'react-router-dom';
import StandardSelector from './standardselector.js';
import './component.css';

class EditStandard extends Component {
	constructor(props){
		super(props)
		this.state = {
			desc: null,
			id: null,
			standard: null
		}
		this.handleSubmit = this.handleSubmit.bind(this);
		this.handleChange = this.handleChange.bind(this);
		this.getSelectedStandard = this.getSelectedStandard.bind(this);
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
		event.preventDefault();
		window.api.send('edit-standard', {
			desc: this.state.desc,
			id: this.state.id,
			standard: this.state.standard
		});
		this.setState({
			desc: '',
			id: '',
			standard: ''
		});
		this.props.refreshData();
	}

	componentDidMount(){
		if(this.props.match.params.id !== 'null'){
			this.setState({
				desc: this.props.dataObj[0][this.props.match.params.id],
				id: this.props.match.params.id,
				standard: this.props.match.params.id
			});
		}
	}
	
	getSelectedStandard(id){
		let oldStandard = this.state.standard;
		if(oldStandard === null){
			oldStandard = "";
		}
		oldStandard = id;
		this.setState({
			standard: oldStandard
		});
		console.log(this.state.standard);
	}

	render(){
		return(
		<Switch>
		<Route path="/standards/edit/selectstandard" render={(props) => 
			<StandardSelector from="editstandard" dataObj={this.props.dataObj} getSelectedStandard={this.getSelectedStandard}/>
		}/>
		<Route path="/standards/edit/selectposition" render={(props) => 
			<StandardSelector from="selectposition" dataObj={this.props.dataObj} getSelectedStandard={this.getSelectedStandard}/>
		}/>
		<Route path="/standards/edit">
		
			<main>
				<h2 id="Title">Edit Standard: </h2>
				<form id="newStandard" onSubmit={this.handleSubmit}>
					<Link to="/standards/edit/selectstandard">Select a Standard</Link><br/>
					<p>Selected Standard: {this.state.standard}</p>
					<br/><br/>
					<label for="name" id="name-label">Standard Description:</label><br/>
					<input type="text" id="name" name="desc" value={this.state.desc} onChange={this.handleChange}/>
					<br/><br/>
					<label for="id" id="id-label">Standard ID:</label><br/>
					<input type="text" id="id" name="id" value={this.state.id} onChange={this.handleChange} />
					<br/><br/>
					<input type="submit" id="submit"/>
				</form>
			</main>
			</Route>
			</Switch>
		)
	}
}

export default EditStandard;