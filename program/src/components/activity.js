import { Component } from 'react';
import { Link } from 'react-router-dom';
import './component.css';

class Standard extends Component {
	constructor(props){
		super(props)
		this.list = this.list.bind(this);
	}
	
	list(){
		return this.props.dataObj[1][this.props.match.params.id].standards.map(function(currentStandard, i){
			return (
				<li><Link class="link" to={"/standards/" + currentStandard}>{currentStandard}</Link></li>
			)
		})
	}

	render(){
		return(
			<main>
				<h2>Activity - {this.props.match.params.id}</h2>
				<hr/>
				<h3>Activity Name:</h3>
				<p>{this.props.dataObj[1][this.props.match.params.id].name}</p>
				<h3>Activity Unit</h3>
				<p>{this.props.dataObj[1][this.props.match.params.id].unit}</p>
				<h3>Activity Notes:</h3>
				<p>{this.props.dataObj[1][this.props.match.params.id].notes}</p>
				<h3>Activity Standards:</h3>
					<ul>
						{this.list()}
					</ul>
				<hr/>
				<h3>Actions:</h3>
				<Link class="link" to={"/activities/edit/" + this.props.match.params.id}>Edit Activity</Link><br/>
				<Link class="link" id="btm-link" to={"/activities/delete/" + this.props.match.params.id}>Delete Activity</Link>
			</main>
		)
	}
}

export default Standard;