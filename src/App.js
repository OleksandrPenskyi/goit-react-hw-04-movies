import React, { Component } from 'react';
import HomePage from './pages/HomePage';
import MoviesPage from './pages/MoviesPage';
import MovieDetailsPage from './pages/MovieDetailsPage';
import Navigation from './components/Navigation';

import { Route, Switch } from 'react-router-dom';

class App extends Component {
  state = {
    pages: [
      { name: 'Home', link: '/' },
      { name: 'Movies', link: '/movies' },
    ],
  };
  render() {
    const { pages } = this.state;

    return (
      <>
        <Navigation pages={pages} />

        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/movies/:movieId" component={MovieDetailsPage} />
          <Route path="/movies" component={MoviesPage} />
        </Switch>
      </>
    );
  }
}

export default App;
