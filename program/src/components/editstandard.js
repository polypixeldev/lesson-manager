import { Component } from 'react';
import './component.css';

class EditStandard extends Component {
	constructor(props){
		super(props)
		this.state = {
			desc: '',
			id: '',
			selected: null
		}
	}

	getStandards(){
		return Object.entries(this.props.dataObj[0]).map(function(currentStandard, i){
			return <option value={currentStandard[0]}>{currentStandard[0]}</option>
		});
	}

	handleChange(event){

	}

	handleSubmit(event){
		window.api.send('edit-standard', [this.state.selected, [this.state.desc, this.state.id]]);
		this.setState({
			desc: '',
			name: '',
			selected: ''
		});
		event.preventDefault();
	}

	render(){
		return(
			<main>
				<h2 id="Title">Edit Standard: </h2>
				<form id="newStandard" onSubmit={this.handleSubmit}>
					<label for="choose-standard" id="choose-standard-label">Choose a standard:</label><br/>
					<select name="choose-standard" id="choose-standard" value={this.state.selected} onChange={this.handleChange}>
						{this.getStandards}
					</select>
					<br/><br/>
					<label for="name" id="name-label">Standard Description:</label><br/>
					<input type="text" id="name" name="name" value={this.state.desc} onChange={this.handleChange}/>
					<br/><br/>
					<label for="id" id="id-label">Standard ID:</label><br/>
					<input type="text" id="id" name="id" value={this.state.id} onChange={this.handleChange} />
					<br/><br/>
					<input type="submit" id="submit"/>
				</form>
			</main>
		)
	}
}

export default EditStandard;