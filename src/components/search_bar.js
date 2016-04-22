import React from 'react';

class SearchBar extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      term: ''
    }
  }

  onInputChange= (event) => {
    this.setState({term: event.target.value})
  }

  render () {
    return (
      <div>
        <input onChange= {this.onInputChange} value={this.state.term} />
        value: {this.state.term}
      </div>
    )
  }
}

export default SearchBar;
