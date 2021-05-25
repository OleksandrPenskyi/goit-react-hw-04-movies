import React, { Component, Suspense, lazy } from 'react';
import Navigation from './components/Navigation';
import Loading from './components/Loader';
import routes from './routes';
import { Route, Switch } from 'react-router-dom';

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
  pages = [
    { name: 'Home', link: routes.home },
    { name: 'Movies', link: routes.movies },
  ];

  state = {};
  render() {
    return (
      <>
        <Navigation pages={this.pages} />

        <Suspense fallback={<Loading />}>
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
