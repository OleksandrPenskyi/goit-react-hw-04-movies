import axios from 'axios';

axios.defaults.baseURL = 'https://api.themoviedb.org/3/';
const key = 'b64caab08fba93d81c21d11e24838717';

const getTrendMovie = async () => {
  const response = await axios.get(`trending/movie/day?api_key=${key}`);
  return response.data.results;
};

const movieSearch = async query => {
  const response = await axios.get(
    `search/movie?api_key=${key}&language=en-US&query=${query}&page=1&include_adult=false`,
  );
  return response.data.results;
};

const getFullMovieInfo = async id => {
  const response = await axios.get(`movie/${id}?api_key=${key}&language=en-US`);
  return response.data;
};

const getMovieCast = async id => {
  const response = await axios.get(
    `movie/${id}/credits?api_key=${key}&language=en-US`,
  );
  return response.data.cast;
};

const getMovieReviews = async id => {
  const response = await axios.get(
    `movie/${id}/reviews?api_key=${key}&language=en-US&page=1`,
  );
  return response.data.results;
};

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  getTrendMovie,
  getFullMovieInfo,
  getMovieCast,
  getMovieReviews,
  movieSearch,
};
