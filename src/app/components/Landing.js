import React from 'react';
import { browserHistory, Link } from 'react-router';
import Hashids from 'hashids';

export default class Landing extends React.Component {
  constructor(props) {
    super(props);
  }

  _handleClick(e) {
    var hashids = new Hashids("this is my salt", 8, "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890");
    var id = hashids.encode(new Date().getTime());
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
      if (xhttp.readyState === XMLHttpRequest.DONE) {
        if (xhttp.status === 200) {
          // navigate to hashed path
          browserHistory.push('/' + id);
        } else {
          alert('There was a problem with the request.');
        }
      }
    };
    xhttp.open('POST', '/save', true);
    xhttp.setRequestHeader("Content-Type", "application/json");
    xhttp.send(this.safeStringify({ id: id }));
  }

  safeStringify(obj) {
    return JSON.stringify(obj)
      .replace(/<\/(script)/ig, '<\\/$1')
      .replace(/<!--/g, '<\\!--')
      .replace(/\u2028/g, '\\u2028') // Only necessary if interpreting as JS, which we do
      .replace(/\u2029/g, '\\u2029') // Ditto
  }

  render() {
    
    return (
      <div className="landing">
        <h1>THIS IS THE LANDING PAGE</h1>
        <span onClick={this._handleClick.bind(this)}>New Question</span>
      </div>
    );
  }
}
