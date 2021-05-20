import React, { Component } from 'react';
import { NavLink, Route } from 'react-router-dom';
import api from '../services/movie-api';
import Cast from '../components/Cast';
import Reviews from '../components/Reviews';

class MovieDetailsPage extends Component {
  state = {
    title: null,
    overview: null,
    genres: null,
    moviePoster: null,
    cast: null,
    reviews: null,
  };

  async componentDidMount() {
    const id = this.props.match.params.movieId;

    const filmResult = await api.getFullMovieInfo(id);
    const castResult = await api.getMovieCast(id);
    const reviewsResult = await api.getMovieReviews(id);

    await this.setState({
      title: filmResult.original_title,
      overview: filmResult.overview,
      genres: filmResult.genres,
      moviePoster: `https://image.tmdb.org/t/p/w500${filmResult.backdrop_path}`,
      cast: castResult,
      reviews: reviewsResult,
    });
  }

  render() {
    const { title, overview, genres, moviePoster, cast, reviews } = this.state;
    const { match } = this.props;

    return (
      <>
        <section>
          <div>
            <h2>{title}</h2>
            <img src={moviePoster} alt={`${title} moviePoster`} />
            <p>{overview}</p>
            {genres && (
              <ul>
                {genres.map(({ id, name }) => (
                  <li key={id}>{name}</li>
                ))}
              </ul>
            )}
          </div>
          <div>
            <ul>
              <li>
                <NavLink
                  to={`${match.url}/cast`}
                  className="homePage"
                  activeClassName="homePage__active"
                >
                  Cast
                </NavLink>
              </li>
              <li>
                <NavLink
                  to={`${match.url}/reviews`}
                  className="homePage"
                  activeClassName="homePage__active"
                >
                  Reviews
                </NavLink>
              </li>
            </ul>
          </div>
        </section>

        <Route
          path={`${this.props.match.path}/cast`}
          render={() => cast && <Cast cast={cast} />}
        />

        <Route
          path={`${this.props.match.path}/reviews`}
          render={() =>
            reviews && reviews.length > 0 ? (
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
