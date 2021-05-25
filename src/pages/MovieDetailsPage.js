import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import api from '../services/movie-api';
import Cast from '../components/Cast';
import Reviews from '../components/Reviews';
import MovieInfo from '../components/MovieInfo';
import Navigation from '../components/Navigation';
import Section from '../components/SectionMovieDetails';
import GoBackButton from '../components/GoBackButton';
import routes from '../routes';

import noPicture from '../img/noPicture.jpg';

class MovieDetailsPage extends Component {
  isLoaded = false;

  state = {
    title: null,
    overview: null,
    genres: null,
    moviePoster: null,
    release_date: null,
    vote_average: null,
    cast: null,
    reviews: null,
  };

  async componentDidMount() {
    const id = this.props.match.params.movieId;

    try {
      this.isLoaded = true;

      const filmResult = await api.getFullMovieInfo(id);
      const castResult = await api.getMovieCast(id);
      const reviewsResult = await api.getMovieReviews(id);
      if (this.isLoaded) {
        this.setState({
          title: filmResult.original_title,
          overview: filmResult.overview,
          genres: filmResult.genres,
          moviePoster: filmResult.backdrop_path
            ? `https://image.tmdb.org/t/p/w500${filmResult.backdrop_path}`
            : noPicture,
          release_date: filmResult.release_date.slice(0, 4),
          vote_average: filmResult.vote_average,
          cast: castResult,
          reviews: reviewsResult,
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

  handleGoBack = () => {
    const { history, location } = this.props;
    history.push(location?.state?.from || routes.home);
  };

  render() {
    const {
      title,
      overview,
      genres,
      moviePoster,
      release_date,
      cast,
      reviews,
      vote_average,
    } = this.state;

    const { url, path } = this.props.match;
    // пришли "от" / с прошлой страницы
    const previousPage = this.props.location.state.from;

    return (
      <>
        <Section>
          <GoBackButton handleGoBack={this.handleGoBack} />

          <MovieInfo
            title={title}
            overview={overview}
            genres={genres}
            moviePoster={moviePoster}
            release_date={release_date}
            vote_average={vote_average}
          />
          <Navigation
            pages={[
              {
                name: 'Cast',
                link: {
                  pathname: `${url}/cast`,
                  state: { from: previousPage },
                },
              },
              {
                name: 'Reviews',
                link: {
                  pathname: `${url}/Reviews`,
                  state: { from: previousPage },
                },
              },
            ]}
          />
        </Section>

        <Route
          path={`${path}/cast`}
          render={() => cast?.length > 0 && <Cast cast={cast} />}
        />

        <Route
          path={`${path}/reviews`}
          render={() =>
            reviews?.length > 0 ? (
              <Reviews reviews={reviews} />
            ) : (
              'We don’t have any review for this movie'
            )
          }
        />
      </>
    );
  }
}

export default MovieDetailsPage;
