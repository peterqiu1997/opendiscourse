import React from 'react';
import Counter from './Counter.js';

const TextEntry = ({input}) => {
  return (
    <div className="text">
      <div className="text__header">
      	<h1 className="text__title">{input.title}</h1>
      	<Counter/>
      </div>
      <p className="text__content">{input.text}</p>
    </div>
  )
}

TextEntry.propTypes = {
  input: React.PropTypes.object.isRequired
};

export default TextEntry;
