import React, {Component} from 'react';

class SearchBar extends Component {
	constructor() {
		super();
		this.state = 
		{term: ''}
	}

	onInputChange(term) {
		this.setState({term});
		this.props.onTermChange(term);
	}

	render() {
		return(
			<div className="search">
				<input placeholder="Search for gifs" onChange={event => this.onInputChange(event.target.value)}/>
			</div>
			);
	}
}

export default SearchBar;