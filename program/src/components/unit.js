import { Component } from 'react';
import { Link } from 'react-router-dom';
import './component.css';

class Unit extends Component {
	render(){
		return(
			<main>
				<p><em>Note: You can see a more detailed table of this unit at the <Link to={`/units/report/${this.props.match.params.id}`}>Full Unit Report</Link></em></p>
				<h2>Unit - {this.props.match.params.id}</h2>
				<hr/>
				<h3>Number of Weeks:</h3>
				<p>{this.props.dataObj[2][this.props.match.params.id].length}</p>
				<hr/>
				<h3>Actions:</h3>
				<Link to={"/units/edit/" + this.props.match.params.id}>Edit Unit</Link><br/>
				<Link to={"/units/delete/" + this.props.match.params.id}>Delete Unit</Link>
			</main>
		)
	}
}

export default Unit;