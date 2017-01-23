import React from 'react';
import Navigation from './Navigation.js';
import Header from './Header.js';
import Post from './Post.js';
import Input from './Input.js';

export default class App extends React.Component { 
  constructor(props) {
    super(props);
  }

  render() {
    /*const positions = [true, false, true, false, true, false, true, false]; // TODO: MOVE THIS SOMEWHERE ELSE.
    const posts = positions.map((bool, index) =>
      <Post key={index} pro={bool}/>
    );*/
    return (
      <div className="container">
        <Navigation question={this.props.question}/>
        <Input/>
      </div>
    )
  }
}
