import React from 'react';

export default class Counter extends React.Component {
  constructor(props) {
    super(props);

    this.state={
      score: 0
    }
    
    this.increment = this.increment.bind(this);
    this.decrement = this.decrement.bind(this);
  }

  increment() {
    this.setState({
      score: this.state.score + 1
    });
  }

  decrement() {
    this.setState({
      score: this.state.score - 1
    });
  }

  render() {
    return (
      <div className="post__score">
        <div onClick={this.increment} className="post__arrow post__arrow--up">
        </div>
        <div className="post__counter">
          {this.state.score}
        </div>
        <div onClick={this.decrement} className="post__arrow post__arrow--down">
        </div>
      </div>
    );
  }
}
