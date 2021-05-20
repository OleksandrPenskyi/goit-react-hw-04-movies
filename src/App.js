import React, { Component } from 'react';
import HomePage from './pages/HomePage';
import MoviesPage from './pages/MoviesPage';
import MovieDetailsPage from './pages/MovieDetailsPage';

import { NavLink, Route, Switch } from 'react-router-dom';

class App extends Component {
  state = {};
  render() {
    return (
      <>
        <header className="header">
          <ul className="navList">
            <li className="navList_item">
              <NavLink
                exact
                to="/"
                className="homePage"
                activeClassName="homePage__active"
              >
                Home
              </NavLink>
            </li>
            <li className="navList_item">
              <NavLink
                to="/movies"
                className="homePage"
                activeClassName="homePage__active"
              >
                Movies
              </NavLink>
            </li>
          </ul>
        </header>

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
