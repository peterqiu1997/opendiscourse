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
          alert("Successful post: " + xhttp.responseText);
        } else {
          alert('There was a problem with the request.');
        }
      }
    };
    xhttp.open('POST', '/save', true);
    xhttp.setRequestHeader("Content-Type", "application/json");
    xhttp.send('{"hello": "Hellooooooo from client"}');
  }

  render() {
    
    return (
      <div className="landing">
        <h1>THIS IS THE LANDING PAGE</h1>
        <Link to="/app">App</Link>
        <span onClick={this._handleClick.bind(this)}>Alternate Link</span>
      </div>
    );
  }
}
