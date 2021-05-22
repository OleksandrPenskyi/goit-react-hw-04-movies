import React, { Component } from 'react';
import api from '../services/movie-api';
import MoviesList from '../components/MoviesList';
import routes from '../routes';

class HomePage extends Component {
  state = {
    trendMovies: [],
  };

  async componentDidMount() {
    const { history } = this.props;
    // /проверка на "левый" адрес
    history.push(routes.home);

    const result = await api.getTrendMovie();

    this.setState({
      trendMovies: [...result],
    });
  }

  render() {
    const { trendMovies } = this.state;
    return (
      <>
        <h2 className="title">Trending today</h2>
        <MoviesList moviesList={trendMovies} />
      </>
    );
  }
}

export default HomePage;
