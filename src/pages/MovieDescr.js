import React, { Component } from 'react';
import api from '../services/movie-api';

class MovieDescr extends Component {
  state = {
    title: null,
    overview: null,
    genres: null,
    poster: null,
  };

  async componentDidMount() {
    const id = this.props.match.params.movieId;
    const result = await api.getFullMovieInfo(id);
    this.setState({
      title: result.original_title,
      overview: result.overview,
      genres: result.genres,
      poster: `https://image.tmdb.org/t/p/w500${result.backdrop_path}`,
    });
  }
  render() {
    const { title, overview, genres, poster } = this.state;
    console.log(genres);

    return (
      <section>
        <h2>{title}</h2>
        <img src={poster} alt={`${title} poster`} />
        <p>{overview}</p>
        {genres && (
          <ul>
            {genres.map(({ id, name }) => (
              <li key={id}>{name}</li>
            ))}
          </ul>
        )}
      </section>
    );
  }
}

export default MovieDescr;
