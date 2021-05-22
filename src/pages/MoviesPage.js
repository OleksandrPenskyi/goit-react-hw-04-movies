import React, { Component } from 'react';
import api from '../services/movie-api';
import SearchMovieForm from '../components/SearchMovieForm';
import MoviesList from '../components/MoviesList';
import queryString from 'query-string';

class MoviesPage extends Component {
  isLoaded = false;

  state = {
    moviesList: null,
  };

  async componentDidMount() {
    const { search } = this.props.location;

    if (!search?.length > 0) return;
    this.getMovies(search);
  }

  async componentDidUpdate(prevProps, prevState) {
    const { search } = this.props.location;
    const previousProps = prevProps.location.search;
    const currentProps = this.props.location.search;

    if (previousProps !== currentProps && currentProps?.length > 0) {
      this.getMovies(search);
    }
  }

  getMovies = async search => {
    try {
      this.isLoaded = true;

      const { query } = queryString.parse(search);
      const results = await api.movieSearch(query);
      if (this.isLoaded) {
        this.setState({ moviesList: results });
      }
      this.isLoaded = false;
    } catch (error) {
      console.log(error);
    }
  };

  componentWillUnmount() {
    this.isLoaded = false;
  }

  render() {
    const { moviesList } = this.state;

    return (
      <>
        <SearchMovieForm />

        {moviesList?.length > 0 && <MoviesList moviesList={moviesList} />}
      </>
    );
  }
}

export default MoviesPage;
