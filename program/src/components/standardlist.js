import { Component } from 'react';

class StandardList extends Component {
	render(){
		console.log(this.props.dataObj[0].standard_id)
		return(
			<main>
				{this.props.dataObj[0].standard_id}
			</main>
		)
	}
}

export default StandardList;