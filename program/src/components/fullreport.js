import { Component } from 'react';

class ActivityRow extends Component {
	constructor(props){
		super(props);
		this.list = this.list.bind(this);
	}

	list(){
		return Object.entries(this.props.view).map((currentView, i) => {
			if(currentView[1] === true){
				if(currentView[0] === 'week'){
					return <td>{this.props.week}</td>
				} else if(currentView[0] === 'id'){
					return <td>{this.props.currentActivity}</td>
				} else if(currentView[0] === 'standards'){
					return <td>{this.props.dataObj[1][this.props.currentActivity].standards.join(', ')}</td>
				} else {
					return <td>{this.props.dataObj[1][this.props.currentActivity][currentView[0]]}</td>
				}
			} else {
				return '';
			}
		});
	}

	render(){
		return(
			<tr>
				{this.list()}
			</tr>
		)
	}
}

class FullReport extends Component {
	constructor(props){
		super(props);
		this.state = {
			id: true,
			name: true,
			notes: true,
			standards: true,
			week: true
		}
		this.tableHead = this.tableHead.bind(this);
		this.tableBody = this.tableBody.bind(this);
		this.handleChange = this.handleChange.bind(this);
	}

	tableHead(){
		return Object.entries(this.state).map((currentView, i) => {
			if(currentView[1] === true){
				return <th>{currentView[0]}</th>
			} else {
				return '';
			}
		})
	}

	tableBody(){
		return this.props.dataObj[2][this.props.unit].map((currentWeek, i) => {
			return currentWeek.map((currentActivity, i) => {
				return <ActivityRow week={i} dataObj={this.props.dataObj} view={this.state} currentActivity={currentActivity}/>
			});
		})
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

	render(){
		return(
			<>
				<form id="view-checkboxes">
					<label>ID</label>
					<input name="id" type="checkbox" checked={this.state.id} onChange={this.handleChange}/><hr/>
					<label>Name</label>
					<input name="name" type="checkbox" checked={this.state.name} onChange={this.handleChange}/><hr/>
					<label>Notes</label>
					<input name="notes" type="checkbox" checked={this.state.notes} onChange={this.handleChange}/><hr/>
					<label>Standards</label>
					<input name="standards" type="checkbox" checked={this.state.standards} onChange={this.handleChange}/><hr/>
					<label>Week</label>
					<input name="week" type="checkbox" checked={this.state.week} onChange={this.handleChange}/><hr/>
				</form>
				<table className="table table-striped table-dark table-sm" style={{marginTop: 20}}>
					<thead>
						<tr>
							{this.tableHead()}
						</tr>
					</thead>
					<tbody>
						{this.tableBody()}
					</tbody>
				</table>
			</>
		)
	}
}

export default FullReport;