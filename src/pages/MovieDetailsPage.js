import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import api from '../services/movie-api';
import Cast from '../components/Cast';
import Reviews from '../components/Reviews';
import MovieInfo from '../components/MovieInfo';
import Navigation from '../components/Navigation';
import Section from '../components/SectionMovieDetails';

import noPicture from '../img/noPicture.jpg';

class MovieDetailsPage extends Component {
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

    const filmResult = await api.getFullMovieInfo(id);
    const castResult = await api.getMovieCast(id);
    const reviewsResult = await api.getMovieReviews(id);

    this.setState({
      title: filmResult.original_title,
      overview: filmResult.overview,
      genres: filmResult.genres,
      moviePoster: filmResult.backdrop_path
        ? `https://image.tmdb.org/t/p/w300${filmResult.backdrop_path}`
        : noPicture,
      release_date: filmResult.release_date.slice(0, 4),
      vote_average: filmResult.vote_average,
      cast: castResult,
      reviews: reviewsResult,
    });
  }

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

    return (
      <>
        <Section>
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
              { name: 'Cast', link: `${url}/cast` },
              { name: 'Movies', link: `${url}/Reviews` },
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
