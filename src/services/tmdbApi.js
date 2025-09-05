import axios from "axios";

const BASE_URL = import.meta.env.VITE_TMDB_BASE_URL;

export const IMAGE_BASE_URL = import.meta.env.VITE_TMDB_IMAGE_BASE_URL;

const tmdbApi = axios.create({
  baseURL: BASE_URL,
  timeout: 10000,
});

export const movieAPI = {
  // Get trending movies
  getTrending: (page = 1) =>
    tmdbApi.get("/api/movies/trending", { params: { page } }),

  // Get popular movies
  getPopular: (page = 1) =>
    tmdbApi.get("/api/movies/popular", { params: { page } }),

  // Get top rated movies
  getTopRated: (page = 1) =>
    tmdbApi.get("api/movies/top-rated", { params: { page } }),

  // Get now playing movies
  getNowPlaying: (page = 1) =>
    tmdbApi.get("/api/movies/now-playing", { params: { page } }),

  // Search movies
  search: (query, page = 1) =>
    tmdbApi.get("/api/movies/search", {
      params: { query, page },
    }),

  // Get movie details
  getDetails: (movieId) => tmdbApi.get(`/api/movies/${movieId}`),
};

export default tmdbApi;
