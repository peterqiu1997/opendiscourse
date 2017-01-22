import React from 'react';

export default class Navigation extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="navigation">
        <h1>{this.props.question}</h1>
      </div>
    )
  }
}