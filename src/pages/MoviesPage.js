import React, { Component } from 'react';
import api from '../services/movie-api';
import SearchMovieForm from '../components/SearchMovieForm';
import SearchListMovies from '../components/SearchListMovies';
import queryString from 'query-string';

class MoviesPage extends Component {
  state = {
    moviesList: null,
  };

  async componentDidUpdate(prevProps, prevState) {
    const { search } = this.props.location;
    const previousProps = prevProps.location.search;
    const currentProps = this.props.location.search;

    if (previousProps !== currentProps && currentProps.length > 0) {
      const { query } = queryString.parse(search);
      const results = await api.movieSearch(query);
      this.setState({ moviesList: results });
    }
  }

  render() {
    const { moviesList } = this.state;
    const { url } = this.props.match;

    return (
      <>
        <SearchMovieForm {...this.props} />

        {moviesList && moviesList?.length > 0 && (
          <SearchListMovies moviesList={moviesList} url={url} />
        )}
      </>
    );
  }
}

export default MoviesPage;
