import React, { Component } from 'react';

const INITIAL_STATE = {
  search: '',
};

class MovieDetailsPage extends Component {
  state = { ...INITIAL_STATE };

  handleInputChange = event => {
    const { value } = event.target;
    this.setState({
      search: value,
    });
  };

  handleSubmit = event => {
    const { search } = this.state;
    event.preventDefault();

    // проверка на запрос с пустой строкой поиска
    if (!search?.length > 0) {
      return;
    }

    this.props.history.push({
      pathname: this.props.location.pathname,
      search: `query=${search}`,
    });

    this.clearForm();
  };

  clearForm = () => {
    this.setState({ ...INITIAL_STATE });
  };

  render() {
    const { search } = this.state;

    return (
      <form onSubmit={this.handleSubmit}>
        <input onChange={this.handleInputChange} value={search} />
        <button type="submit">Search</button>
      </form>
    );
  }
}

export default MovieDetailsPage;
