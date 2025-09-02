import { useState, useEffect } from "react";
import { movieAPI } from "../services/tmdbApi.js";

export const useMovies = () => {
  const [movies, setMovies] = useState({
    trending: [],
    popular: [],
    topRated: [],
    nowPlaying: [],
    featured: null,
  });

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        setLoading(true);

        // Check if API exists

        if (!import.meta.env.VITE_TMDB_API_KEY) {
          throw new Error(
            "TMDB API key is missing. Please add VITE_TMDB_API_KEY to your .env file"
          );
        }

        // Fetch all movie types simultaneously
        const [trendingRes, popularRes, topRatedRes, nowPlayingRes] =
          await Promise.all([
            movieAPI.getTrending(),
            movieAPI.getPopular(),
            movieAPI.getTopRated(),
            movieAPI.getNowPlaying(),
          ]);

        // Pick first trending movie as featured
        const featuredMovie = trendingRes?.data?.results?.[0] || null;

        setMovies({
          trending: trendingRes.data.results || [],
          popular: popularRes.data.results || [],
          topRated: topRatedRes.data.results || [],
          nowPlaying: nowPlayingRes.data.results || [],
          featured: featuredMovie,
        });

        setError(null);
      } catch (error) {
        setError("Failed to fetch movies");
        console.error("Movies fetch error:", error);

        if (error.response?.status === 401) {
          setError(
            "Invalid API key. Please check your TMDB API key in .env file"
          );
        } else if (error.response?.status === 404) {
          setError("IMDB endpoint not found");
        } else if (error.message.includes("API key is missing")) {
          setError(error.message);
        } else {
          setError(
            "Failed to fetch movies. Please check your internet connection"
          );
        }
      } finally {
        setLoading(false);
      }
    };

    fetchMovies();
  }, []);

  return { movies, loading, error };
};
