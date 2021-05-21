import React, { Component } from 'react';
import api from '../services/movie-api';
import TrendMoviesList from '../components/TrendMoviesList';

class HomePage extends Component {
  state = {
    trendMovies: [],
  };

  async componentDidMount() {
    const result = await api.getTrendMovie();

    this.setState({
      trendMovies: [...result],
    });
  }

  render() {
    const { trendMovies } = this.state;
    return (
      <TrendMoviesList title={'Trending today'} trendMovies={trendMovies} />
    );
  }
}

export default HomePage;
