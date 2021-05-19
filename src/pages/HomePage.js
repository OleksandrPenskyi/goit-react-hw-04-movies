import React, { Component } from 'react';
import api from '../services/movie-api';
// import HomePageList from '../components/HomePageList';
import { NavLink } from 'react-router-dom';

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
      <>
        <h2>Trending today</h2>
        <ul>
          {trendMovies.map(({ id, original_title }) => (
            <li key={id}>
              <NavLink to={`/movies/${id}`}>{original_title}</NavLink>
            </li>
          ))}
        </ul>
      </>
    );
  }
}

export default HomePage;
