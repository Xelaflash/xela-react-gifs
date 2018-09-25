import React, { Component } from 'react';


class SearchBar extends Component {
  shouldComponentUpdate() {
    return false;
  }

  handleUpdate = (event) => {
    this.props.searchFunction(event.target.value);
  }

  render() {
    return (
      <input
        type="text"
        placeholder="search for a cool gif"
        className="form-control form-search"
        onChange={this.handleUpdate}
      />
    );
  }
}

export default SearchBar;
