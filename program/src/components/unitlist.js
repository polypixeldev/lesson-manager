import { Component } from 'react';
import { Link } from 'react-router-dom';

class UnitRow extends Component {
	render(){
		return(
			<>
				<tr>
					<td>{this.props.name}</td>
					<td><Link to={"/units/" + this.props.name}>More Info</Link></td>
				</tr>
			</>
		)
	}
}

class UnitList extends Component {
	constructor(props){
		super(props);
		this.list = this.list.bind(this);
	}

	list(){
		return Object.entries(this.props.dataObj[2]).map(function(currentStandard, i){
			return <UnitRow name={currentStandard[0]}/>
		});
	}

	render(){
		return(
			<main className="table-responsive">
			<h2>Unit List: </h2>
			<table className="table table-striped table-dark table-sm" style={{marginTop: 20}}>
				<thead>
					<tr>
						<th>Unit Name</th>
						<th>Unit Link</th>
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

export default UnitList;