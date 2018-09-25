import React, { Component } from 'react';

class Gif extends Component {
  shouldComponentUpdate(nextProps, nextState) {
    return nextProps.id !== this.props.id;
  }

handleClick = () => {
  if (this.props.selectGif) {
    this.props.selectGif(this.props.id);
  }
}

render() {
// handling null
// if (!this.props.id) {
//   return null;
// }
const src = `https://i.giphy.com/media/${this.props.id}/giphy.gif`;
  return (
    <img src={src} alt="gif" className="gif" onClick={this.handleClick} />
  );
}

export default Gif;
