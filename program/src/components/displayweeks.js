import { Component } from 'react';
import { Link } from 'react-router-dom';

class WeekItem extends Component {
	constructor(props){
		super(props);
		this.removeWeek = this.removeWeek.bind(this);
	}

	removeWeek(){
		this.props.removeWeek(this.props.i);
		console.log('uhoh');
	}

	render(){
		return(
			<div id="item">
				<button type="button" onClick={this.removeWeek}>X</button>
				<Link to={`/units/${this.props.from}/weeks/${this.props.i}`}>Week {this.props.i + 1}</Link>
			</div>
		)
	}
}

class DisplayWeeks extends Component {
	constructor(props){
		super(props);
		this.weeks = this.weeks.bind(this);
	}

	weeks(){
		if(this.props.weeks === null || this.props.weeks === ''){
			return;
		}
		return this.props.weeks.map((currentWeek, i) => {
			console.log(this);
			return <WeekItem from={this.props.from} removeWeek={this.props.removeWeek} i={i}/>
		});
	}
	

	render(){
		return(
			<>
				{this.weeks()}
			</>
		)
	}
}

export default DisplayWeeks;