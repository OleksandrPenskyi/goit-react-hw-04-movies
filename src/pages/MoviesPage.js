import React, { Component } from 'react';
import api from '../services/movie-api';
import SearchMovieForm from '../components/SearchMovieForm';
import SearchListMovies from '../components/SearchListMovies';

class MoviesPage extends Component {
  state = {
    searchQuery: '',
    moviesList: null,
  };

  handleSubmitForm = value => {
    if (value && value.length > 0) this.setState({ searchQuery: value });
  };

  async componentDidUpdate(prevProps, prevState) {
    const previousState = prevState.searchQuery;
    const currentState = this.state.searchQuery;

    if (previousState !== currentState && currentState) {
      const results = await api.movieSearch(currentState);
      this.setState({ moviesList: results });
    }
  }

  render() {
    const { searchQuery, moviesList } = this.state;
    const { url } = this.props.match;
    return (
      <>
        <SearchMovieForm onSubmitForm={this.handleSubmitForm} />

        {moviesList && moviesList?.length > 0 && (
          <SearchListMovies moviesList={moviesList} url={url} />
        )}
      </>
    );
  }
}

export default MoviesPage;
