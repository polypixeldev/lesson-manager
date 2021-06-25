import { Component } from 'react';

class MissingReport extends Component {
	constructor(props){
		super(props);
		this.tableBody = this.tableBody.bind(this);
	}

	tableBody(){
		let standardArr = [];
		let missingArr = [];

		for(let week of this.props.dataObj[2][this.props.unit]){
			for(let activity of week){
				for(let standard of this.props.dataObj[1][activity].standards){
					if(!standardArr.includes(standard)){
						standardArr.push(standard);
					}
				}
			}
		}

		for(let standard in this.props.dataObj[0]){
			if(!standardArr.includes(standard)){
				missingArr.push(standard);
			}
		}

		return missingArr.map((currentStandard, i) => {
			return (
				<tr>
					<td>{currentStandard}</td>
					<td><p>{this.props.dataObj[0][currentStandard]}</p></td>
				</tr>
			)
		});
	}

	render(){
		return(
			<>
				<table className="table table-striped table-dark table-sm" style={{marginTop: 20}}>
					<thead>
						<tr>
							<th>Standard ID</th>
							<th>Standard Description</th>
						</tr>
					</thead>
					<tbody>
						{this.tableBody()}
					</tbody>
				</table>
			</>
		)
	}
}

export default MissingReport;