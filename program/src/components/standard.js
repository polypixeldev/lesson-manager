import { Component } from 'react';
import { Link } from 'react-router-dom';
import './component.css';

class Standard extends Component {
	render(){
		return(
			<main>
				<h2>Standard - {this.props.match.params.id}</h2>
				<hr/>
				<h3>Standard Description:</h3>
				<p>{this.props.dataObj[0][this.props.match.params.id]}</p>
				<hr/>
				<h3>Actions:</h3>
				<Link to={"/standards/edit/" + this.props.match.params.id}>Edit Standard</Link><br/>
				<Link to={"/standards/delete/" + this.props.match.params.id}>Delete Standard</Link>
			</main>
		)
	}
}

export default Standard;