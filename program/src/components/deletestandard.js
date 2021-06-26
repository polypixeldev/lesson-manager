import { Component } from 'react';
import { Switch, Route, Link } from 'react-router-dom';

import StandardSelector from './standardselector.js';

import './component.css';

class DeleteStandard extends Component {
	constructor(props){
		super(props)
		this.state = {
			selected: null
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
		window.api.send('delete-standard', this.state.selected);
		this.props.refreshData();
	}

	componentDidMount(){
		if(this.props.match.params.id !== null){
			this.setState({
				selected: this.props.match.params.id
			});
		}
	}

	getSelectedStandard(id){
		let oldStandard = this.state.selected;
		if(oldStandard === null){
			oldStandard = "";
		}
		oldStandard = id;
		this.setState({
			selected: oldStandard
		});

	}

	render(){
		return(
			<Switch>
				<Route path="/standards/delete/selectstandard" render={(props) => 
					<StandardSelector from="deletestandard" dataObj={this.props.dataObj} getSelectedStandard={this.getSelectedStandard}/>
				}/>
				<Route path="/standards/delete">
					<main>
						<h2>Delete Standard:</h2>
						<form onSubmit={this.handleSubmit}>
							<Link to="/standards/delete/selectstandard">Select a Standard</Link><br/>
							<p>Selected Standard: {this.state.selected}</p>
							<br/><br/>
							<label for="delete-submit" id="delete-submit-label">Are you sure you want to delete this standrad? It will be removed from it's associated activities - <strong>this action is not reversible.</strong></label><br/>
							<input type="submit" id="delete-submit" name="delete-submit"/>
						</form>
					</main>
				</Route>
			</Switch>
		)
	}
}

export default DeleteStandard;