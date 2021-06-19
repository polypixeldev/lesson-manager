import { Component } from 'react';
import './component.css';

class StandardItem extends Component {
	constructor(props){
		super(props);
		this.removeStandard = this.removeStandard.bind(this);
	}
	removeStandard(){
		this.props.removeStandard(this.props.i);
	}

	render(){
		return (
			<div id="item">
				<button onClick={this.removeStandard}>X</button><br/>
				<p> {this.props.currentStandard}</p>
			</div>
		)
	}
}

class DisplayStandards extends Component {
	constructor(props){
		super(props);
		this.renderItems = this.renderItems.bind(this);
	}

	renderItems(){
		console.log(this.props.standards);
		if(this.props.standards === null){
			return;
		}
		let func = function(currentStandard, i){
			return <StandardItem i={i} removeStandard={this.props.removeStandard} currentStandard={currentStandard}/>
		}
		func = func.bind(this);
		return this.props.standards.map(func);
	}

	render(){
		return(
			<>
				{this.renderItems()}
			</>
		)
	}
}

export default DisplayStandards;