import Axios from 'axios';

const BASEURL = 'https://api.themoviedb.org/3';
const KEY = '27948a4ccec018117337a604d5ddcbec';
const type = 'all';
const time = 'day';
export const BASEPOSTERURL = 'https://image.tmdb.org/t/p/w185';
export const BASEIMGURL = 'https://image.tmdb.org/t/p/w500';

export const getTrading = () => {
  return Axios.get(`${BASEURL}/trending/${type}/${time}?api_key=${KEY}`);
};

export const getMovieDetails = id => {
  return Axios.get(`${BASEURL}/movie/${id}?api_key=${KEY}`);
};

export const getCast = id => {
  return Axios.get(`${BASEURL}/movie/${id}/credits?api_key=${KEY}`);
};

export const getReviews = id => {
  return Axios.get(`${BASEURL}/movie/${id}/reviews?api_key=${KEY}`);
};

export const getMovieList = query => {
  return Axios.get(`${BASEURL}/search/movie?api_key=${KEY}&query=${query}`);
};
