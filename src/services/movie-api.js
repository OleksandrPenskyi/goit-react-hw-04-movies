import axios from 'axios';

const key = 'ee85666c615ab2ac67814f12b027dc8f';

const getTrendMovie = async () => {
  const response = await axios.get(
    `https://api.themoviedb.org/3/trending/movie/day?api_key=${key}`,
  );
  return response.data.results;
};

const getFullMovieInfo = async id => {
  const response = await axios.get(
    `https://api.themoviedb.org/3/movie/${id}?api_key=${key}&language=en-US`,
  );

  return response.data;
};

// eslint-disable-next-line import/no-anonymous-default-export
export default { getTrendMovie, getFullMovieInfo };
