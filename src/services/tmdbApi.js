import axios from "axios";

const BASE_URL = import.meta.env.VITE_TMDB_BASE_URL;

export const IMAGE_BASE_URL = import.meta.env.VITE_TMDB_IMAGE_BASE_URL;

const tmdbApi = axios.create({
  baseURL: BASE_URL,
});

export const movieAPI = {
  // Get trending movies
  getTrending: () => tmdbApi.get("/api/movies/trending"),

  // Get popular movies
  getPopular: () => tmdbApi.get("/api/movies/popular"),

  // Get top rated movies
  getTopRated: () => tmdbApi.get("api/movies/top-rated"),

  // Get now playing movies
  getNowPlaying: () => tmdbApi.get("/api/movies/now-playing"),

  // Get movie details
  getDetails: (movieId) => tmdbApi.get(`/api/movies/${movieId}`),

  // Search movies
  search: (query) =>
    tmdbApi.get("/api/movies/search", {
      params: { query },
    }),
};

export default tmdbApi;
