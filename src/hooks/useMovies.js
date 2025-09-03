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

        if (error.response?.status === 500) {
          setError("Server error. Please try again.");
        } else if (error.response?.status === 404) {
          setError("Movie service unavailable. Please try again later.");
        } else if (error.response?.status === 503) {
          setError("Service temporarily unavailable. Please try again later.");
        } else if (error.code === "NETWORK_ERROR" || !error.response) {
          setError(
            "Unable to connect to movie service. Please check your internet connection"
          );
        } else {
          setError("Failed to load movies. Please try again later.");
        }
      } finally {
        setLoading(false);
      }
    };

    fetchMovies();
  }, []);

  return { movies, loading, error };
};
