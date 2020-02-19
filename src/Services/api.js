import Axios from 'axios';

const BASEURL = 'https://api.themoviedb.org/3';
const KEY = '27948a4ccec018117337a604d5ddcbec';
const type = 'all';
const time = 'day';

export const getTrading = () => {
  // ${BASEURL}/trending/${media_type}/${time_window}?api_key=${KEY}
  return Axios.get(`${BASEURL}/trending/${type}/${time}?api_key=${KEY}`);
};

export const getMovieDetails = id => {
  // ${BASEURL}/movie/{id}?api_key=${KEY}
  return Axios.get(`${BASEURL}/movie/${id}?api_key=${KEY}`);
};

export const getCast = id => {
  // ${BASEURL}/movie/{id}/credits?api_key=${KEY}
  return Axios.get(`${BASEURL}/movie/${id}/credits?api_key=${KEY}`);
};

export const getReviews = id => {
  // ${BASEURL}/movie/{movie_id}/reviews?api_key=${KEY}
  return Axios.get(`${BASEURL}/movie/${id}/reviews?api_key=${KEY}`);
};

export const getMovieList = query => {
  // ${BASEURL}/search/movie?api_key=${KEY}&query=${query}
  return Axios.get(`${BASEURL}/search/movie?api_key=${KEY}&query=${query}`);
};
