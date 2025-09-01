import axios from "axios";

const API_KEY = import.meta.env.VITE_TMDB_API_KEY;
const BASE_URL = import.meta.env.VITE_TMDB_BASE_URL;

export const IMAGE_BASE_URL = import.meta.env.VITE_TMDB_IMAGE_BASE_URL;

const tmdbApi = axios.create({
  baseURL: BASE_URL,
  params: {
    api_key: API_KEY,
  },
});

export const movieAPI = {
  // Get trending movies
  getTrending: () => tmdbApi.get("/trending/movie/day"),

  // Get popular movies
  getPopular: () => tmdbApi.get("/movie/popular"),

  // Get top rated movies
  getTopRated: () => tmdbApi.get("movie/top_rated"),

  // Get now playing movies
  getNowPlaying: () => tmdbApi.get("/movie/now_playing"),

  // Get movie details
  getDetails: (movieId) => tmdbApi.get(`/movie/${movieId}`),

  // Search movies
  search: (query) =>
    tmdbApi.get("/search/movie", {
      params: { query },
    }),
};

export default tmdbApi;
