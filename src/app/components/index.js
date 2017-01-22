import React from 'react';
// import io from 'socket.io-client';
import Navigation from './Navigation.js';
import Header from './Header.js';
import Post from './Post.js';
import Input from './Input.js';

export default class App extends React.Component { 

  constructor(props) {
    super(props);
  }

  render() {
    const positions = [true, false, true, false, true, false, true, false]; // TODO: MOVE THIS SOMEWHERE ELSE.
    const posts = positions.map((bool, index) =>
      <Post key={index} pro={bool}/>
    );
    const { isMobile } = this.props;
    return (
      <div className="container">
        <h1>hello world {isMobile ? 'mobile' : 'desktop'}</h1>
        <Navigation question={"Do I really like Pringles?"}/>
        {posts}
        <Input/>
      </div>
    )
  }
}
