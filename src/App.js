import React, { Component, Suspense, lazy } from 'react';
import Navigation from './components/Navigation';
import routes from './routes';
import { Route, Switch } from 'react-router-dom';
import Loader from 'react-loader-spinner';

const HomePage = lazy(() =>
  import('./pages/HomePage' /* webpackChunkName: "HomePage" */),
);
const MoviesPage = lazy(() =>
  import('./pages/MoviesPage' /* webpackChunkName: "MoviesPage" */),
);
const MovieDetailsPage = lazy(() =>
  import('./pages/MovieDetailsPage' /* webpackChunkName: "MovieDetailsPage" */),
);

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

        <Suspense
          fallback={
            <Loader type="ThreeDots" color="#00BFFF" height={80} width={80} />
          }
        >
          <Switch>
            <Route exact path={routes.home} component={HomePage} />
            <Route
              path={routes.movieDetailsPage}
              component={MovieDetailsPage}
            />
            <Route path={routes.movies} component={MoviesPage} />
            <Route component={HomePage} />
          </Switch>
        </Suspense>
      </>
    );
  }
}

export default App;
