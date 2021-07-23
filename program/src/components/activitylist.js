import { Component } from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

class ActivityRow extends Component{

	render(){
		return (
			<tr>
				<td>{this.props.id}</td>
				<td>{this.props.name}</td>
				<td>
					<Link to={"/activities/" + this.props.name}>More Info</Link>
				</td>
			</tr>
		);
	}
}

class ActivityList extends Component {
	list(){
		const sortArr = Object.entries(this.props.dataObj[1]).sort();
		return sortArr.map(function(currentActivity, i){
			return <ActivityRow name={currentActivity[0]} id={currentActivity[1].id} />
		});
	}

	render(){
		return(
			<main className="table-responsive">
				<h2 style={{marginTop: 20}}>Activity List: </h2>
				<table className="table table-striped table-dark table-sm" style={{marginTop: 20}}>
					<thead>
						<tr>
							<th>Activity ID</th>
							<th>Activity Name</th>
							<th>Link</th>
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

export default ActivityList;