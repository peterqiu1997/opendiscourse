import React from "react";

export default class Header extends React.Component {
	constructor(props) {
		super(props);	
	}

	render() {
		return (
			<div class="header">
				{this.props.question}
			</div>
		)
	}
}
