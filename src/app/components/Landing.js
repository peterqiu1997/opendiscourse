import React from 'react';
import { browserHistory, Link } from 'react-router';
import Hashids from 'hashids';

export default class Landing extends React.Component {
  constructor(props) {
    super(props);

    this.safeStringify = this.safeStringify.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.state = {
      question: ""
    };
  }

  handleClick(e) {
    const hashids = new Hashids("this is my salt", 8, "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890");
    const id = hashids.encode(new Date().getTime());
    const xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
      if (xhttp.readyState === XMLHttpRequest.DONE) {
        if (xhttp.status === 200) {
          // navigate to hashed path
          browserHistory.push('/' + id);
          window.location.reload(); // TODO a little hacky, how to get new page from express? GET request causes conflict?
        } else {
          alert('There was a problem with the request.');
        }
      }
    };
    xhttp.open('POST', '/save', true);
    xhttp.setRequestHeader("Content-Type", "application/json");
    xhttp.send(this.safeStringify({ id: id, question: this.state.question }));
  }

  safeStringify(obj) {
    return JSON.stringify(obj)
      .replace(/<\/(script)/ig, '<\\/$1')
      .replace(/<!--/g, '<\\!--')
      .replace(/\u2028/g, '\\u2028') // Only necessary if interpreting as JS, which we do
      .replace(/\u2029/g, '\\u2029') // Ditto
  }

  handleChange(e) {
    this.setState({ question: e.target.value });
  }

  render() {
    return (
      <div className="landing">
        <h1>THIS IS THE LANDING PAGE</h1>
        <span onClick={this.handleClick}>New Question</span>
        <form onSubmit={this.handleClick}>
          <label>
            Question:
            <input type="text" value={this.state.question} onChange={this.handleChange} />
          </label>
          <input type="submit" value="Submit" />
        </form>    
      </div>
    );
  }
}
