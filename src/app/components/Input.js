import React from 'react';

export default class Input extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="input">
        <textarea className="input__textarea">
        </textarea>
      </div>
    );
  }
}
