import { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

class StandardRow extends Component{

	render(){
		return (
			<tr>
				<td>{this.props.id}</td>
				<td>{this.props.description}</td>
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
							<th>Standard Description</th>
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