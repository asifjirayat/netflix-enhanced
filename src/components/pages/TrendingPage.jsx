import Header from "../layout/Header.jsx";
import PageHeader from "../movies/PageHeader.jsx";
import MoviesGrid from "../movies/MoviesGrid.jsx";
import { useState, useEffect } from "react";
import { movieAPI } from "../../services/tmdbApi.js";

const TrendingPage = () => {
  const [movies, setMovies] = useState([]);
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);
  const [loading, setLoading] = useState(true);
  const [loadingMore, setLoadingMore] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchMovies(1);
  }, []);

  const fetchMovies = async (pageNum) => {
    try {
      if (pageNum === 1) {
        setLoading(true);
      } else {
        setLoadingMore(true);
      }

      const response = await movieAPI.getTrending();

      if (pageNum === 1) {
        setMovies(response.data.results || []);
      } else {
        setMovies((prev) => [...prev, ...(response.data.results || [])]);
      }

      setHasMore(pageNum < response.data.total_pages);
      setError(null);
    } catch (error) {
      console.error("Error fetching trending movies:", error);
      setError("Failed to load trending movies. Please try again later.");
    } finally {
      setLoading(false);
      setLoadingMore(false);
    }
  };

  const loadMoreMovies = () => {
    if (loadingMore || !hasMore) return;
    const nextPage = page + 1;
    setPage(nextPage);
    fetchMovies(nextPage);
  };

  if (error) {
    return (
      <div className="min-h-screen bg-dark text-white">
        <Header />
        <div className="pt-20 px-4 md:px-16 flex items-center justify-center min-h-[50vh]">
          <div className="text-center">
            <h2 className="text-2xl font-bebas mb-4">{error}</h2>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-dark text-white">
      <Header />

      {/* Page Header */}
      <PageHeader pageTitle="Trending Movies" />

      {/* Movies Grid */}
      <MoviesGrid loading={loading} movies={movies} category="Trending" />

      {/* Load More Button */}
      {hasMore && !loading && (
        <div className="text-center pb-20">
          <button
            onClick={loadMoreMovies}
            disabled={loadingMore}
            className="bg-primary hover:bg-secondary disabled:bg-gray-600 disabled:cursor-not-allowed px-8 py-3 rounded-lg font-helvetica transition-colors duration-200 cursor-pointer"
          >
            {loadingMore ? (
              <div className="flex items-center gap-2">
                <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white">
                  Loading More...
                </div>
              </div>
            ) : (
              "Load More Movies"
            )}
          </button>
          <p className="text-gray-500 text-sm mt-3">
            Showing {movies.length} movies • Page {page}
          </p>
        </div>
      )}

      {/* End Message */}
      {!hasMore && movies.length > 0 && (
        <div className="text-center pb-20">
          <p className="text-gray-400">
            You've reached the end! All {movies.length} trending movies loaded.
          </p>
        </div>
      )}
    </div>
  );
};

export default TrendingPage;
