import React, { Component } from 'react';
import api from '../services/movie-api';
import MoviesList from '../components/MoviesList';
import Section from '../components/Section';
import routes from '../routes';

class HomePage extends Component {
  isLoaded = false;

  state = {
    trendMovies: [],
  };

  async componentDidMount() {
    const { history } = this.props;
    // /проверка на "левый" адрес
    history.push(routes.home);

    try {
      this.isLoaded = true;
      const result = await api.getTrendMovie();
      if (this.isLoaded) {
        this.setState({
          trendMovies: [...result],
        });
      }
      this.isLoaded = false;
    } catch (error) {
      console.log(error);
    }
  }

  componentWillUnmount() {
    this.isLoaded = false;
  }

  render() {
    const { trendMovies } = this.state;
    return (
      <Section title="Trending today">
        <MoviesList moviesList={trendMovies} />
      </Section>
    );
  }
}

export default HomePage;
