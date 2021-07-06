import { Component } from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './component.css';

class StandardRow extends Component{

	render(){
		return (
			<tr>
				<td>{this.props.id}</td>
				<td>{this.props.description}</td>
				<td>
					<Link to={"/standards/" + this.props.id}>More Info</Link>
				</td>
			</tr>
		);
	}
}

class StandardList extends Component {
	constructor(props){
		super(props);
		this.list = this.list.bind(this);
	}

	list(){
		const conversion = {
			I: 1,
			II: 2,
			III: 3,
			IV: 4,
			V: 5,
			VI: 6,
			VII: 7,
			VIII: 8,
			IX: 9,
			X: 10
		};

		let sortArr = Object.entries(this.props.dataObj[0]).sort((a, b) => {
			let aID = a[0].split('.');
			let bID = b[0].split('.');
			let convertedA = conversion[aID[0]];
			let convertedB = conversion[bID[0]];
			if(!convertedA || !convertedB){
				console.log('nope');
				return 0;
			} else {
				return convertedA - convertedB;
			}
		});

		return sortArr.map(function(currentStandard, i){
			return <StandardRow id={currentStandard[0]} description={currentStandard[1]}/>
		});
	}

	render(){
		return(
			<main>
				<h2 style={{marginTop: 20}}>Standard List: </h2>
				<table className="table table-striped table-dark table-sm" style={{marginTop: 20}}>
					<thead>
						<tr>
							<th>Standard ID</th>
							<th>Standard Description</th>
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