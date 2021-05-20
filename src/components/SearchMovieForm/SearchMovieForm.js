import React, { Component } from 'react';
import { Link } from 'react-router-dom';

const INITIAL_STATE = {
  search: '',
};

class MovieDetailsPage extends Component {
  state = { ...INITIAL_STATE };

  handleInputChange = event => {
    this.setState({
      search: event.target.value,
    });
  };

  handleSubmit = event => {
    const { search } = this.state;
    event.preventDefault();
    this.props.onSubmitForm(search);
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
        <button type="submit">
          Search
          {/* <Link to="/movies/saddsdadaskaads">Search</Link> */}
        </button>
      </form>
    );
  }
}

export default MovieDetailsPage;
