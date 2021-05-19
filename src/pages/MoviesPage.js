import React, { Component } from 'react';

class MoviesPage extends Component {
  state = {
    search: '',
  };

  handleInputChange = event => {
    this.setState({
      search: event.target.value,
    });
  };

  handleSubmitForm = event => {
    event.preventDefault();
    console.log(this.state.search);
  };

  render() {
    const { search } = this.state;
    return (
      <form onSubmit={this.handleSubmitForm}>
        <input onChange={this.handleInputChange} value={search} />
        <button type="submit">Search</button>
      </form>
    );
  }
}

export default MoviesPage;
