import { Component } from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

class StandardRow extends Component{

	render(){
		return (
			<tr>
				<td>{this.props.id}</td>
				<td>
					<Link to={"/standards/" + this.props.id}>More Info</Link>
				</td>
			</tr>
		);
	}
}

class StandardList extends Component {
	list(){
		return Object.entries(this.props.dataObj[0]).map(function(currentStandard, i){
			return <StandardRow id={currentStandard[0]} description={currentStandard[1]}/>
		});
	}

	render(){
		return(
			<main className="table-responsive">
				<h2 style={{marginTop: 20}}>Standard List: </h2>
				<table className="table table-striped table-dark table-sm" style={{marginTop: 20}}>
					<thead>
						<tr>
							<th>Standard ID</th>
							<th>Standard Link</th>
						</tr>
					</thead>
					<tbody>
						{this.list()}
					</tbody>
				</table>
			</main>
		)
	}
}

export default StandardList;