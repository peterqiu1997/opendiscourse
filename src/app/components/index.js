import React from 'react';
import Navigation from './Navigation.js';
import Post from './Post.js';
import Input from './Input.js';

export default class App extends React.Component { 
  constructor(props) {
    super(props);
  }

  componentWillMount() {

  }

  render() {
    return (
      <div className="container">
        {JSON.stringify(this.props.data)}
        <Input/>
      </div>
    )
  }
}
