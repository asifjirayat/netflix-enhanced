import Header from "../layout/Header.jsx";
import PageHeader from "../movies/PageHeader.jsx";
import MoviesGrid from "../movies/MoviesGrid.jsx";
import LoadMoreButton from "../ui/LoadMoreButton.jsx";
import { useState, useEffect } from "react";
import { movieAPI } from "../../services/tmdbApi.js";

const Popular = () => {
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

      const response = await movieAPI.getPopular();

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
      {movies && movies.length > 0 && (
        <LoadMoreButton
          hasMore={hasMore}
          loading={loadingMore}
          onLoadMore={loadMoreMovies}
          totalMovies={movies.length}
          currentPage={page}
        />
      )}
    </div>
  );
};

export default Popular;
