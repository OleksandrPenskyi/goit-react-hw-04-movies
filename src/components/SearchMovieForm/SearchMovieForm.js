import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';

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
    event.preventDefault();
    const { search } = this.state;
    const { history, location } = this.props;

    // проверка на запрос с пустой строкой поиска
    if (!search?.length > 0) {
      return;
    }

    history.push({
      pathname: location.pathname,
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

export default withRouter(MovieDetailsPage);
