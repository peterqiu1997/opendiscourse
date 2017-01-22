import React from 'react';
import TextEntry from './TextEntry.js';

const red = '#F44336';
const green = '#4CAF50';

export default class Post extends React.Component {
  constructor(props) {
    super(props);

    this.state={
      expanded: false
    }
  }

  render() {
    var input = { // TODO: CHANGE TO PROP
      text: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).",
      title: "A reader will be distracted."
    }

    let borderStyle = {}
    if (this.props.pro) {
      borderStyle.border = '1px solid ' + green;
    } else {
      borderStyle.border = '1px solid ' + red;
    }

    return (
      <div className="post" style={borderStyle}>
        <TextEntry input={input}/>
      </div>
    );
  }
}
