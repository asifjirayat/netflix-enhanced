import { useSearchParams } from "react-router-dom";
import Header from "../layout/Header.jsx";
import PageHeader from "../movies/PageHeader.jsx";
import MoviesGrid from "../movies/MoviesGrid.jsx";
import LoadMoreButton from "../ui/LoadMoreButton.jsx";
import Footer from "../layout/Footer.jsx";
import { useMoviesPagination } from "../../hooks/useMoviesPagination.js";
import { movieAPI } from "../../services/tmdbApi.js";
import {
  MagnifyingGlassIcon,
  VideoCameraIcon,
} from "@heroicons/react/24/outline";
import { useCallback } from "react";

const SearchResultsPage = () => {
  const [searchParams] = useSearchParams();
  const query = searchParams.get("query");

  const searchMovies = useCallback(
    (page = 1) => movieAPI.search(query, page),
    [query]
  );

  const { movies, loading, loadingMore, hasMore, error, page, loadMore } =
    useMoviesPagination(searchMovies);

  if (!query) {
    return (
      <div className="min-h-screen bg-dark text-white">
        <Header />
        <div className="pt-20 px-4 md:px-16 flex items-center justify-center min-h-[50vh]">
          <div className="text-center">
            <div className="mb-4">
              <MagnifyingGlassIcon className="text-primary w-12 h-auto mx-auto" />
            </div>
            <h2 className="text-2xl font-bebas mb-4">No Search Query</h2>
            <p className="text-gray-400">
              Please enter a search term to find movies.
            </p>
          </div>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen bg-dark text-white">
        <Header />
        <div className="pt-20 px-4 md:px-16 flex items-center justify-center min-h-[50vh]">
          <div className="text-center">
            <div className="mb-4">
              <VideoCameraIcon className="text-primary w-12 h-auto mx-auto" />
            </div>
            <h2 className="text-2xl font-bebas mb-4">Search Error</h2>
            <p className="text-gray-400">{error}</p>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-dark text-white">
      <Header />

      {/* Page Header */}
      <PageHeader pageTitle={`Search Results For: ${query}`} />

      {!loading && movies.length === 0 ? (
        <div className="px-4 md:px-16 flex items-center justify-center min-h-[50vh]">
          <div className="text-center">
            <MagnifyingGlassIcon className="text-primary w-12 h-auto mb-4 mx-auto" />
            <h2 className="text-2xl font-bebas mb-4">No Movies Found</h2>
            <p className="text-gray-400 mb-4">
              We couldn't find any movies matching "{query}".
            </p>
            <p className="text-gray-500 text-sm">
              Try different keywords or check your spelling.
            </p>
          </div>
        </div>
      ) : (
        <>
          {/* Movies Grid */}
          <MoviesGrid
            loading={loading}
            movies={movies}
            category="Search Results"
          />

          {/* Load More Button */}
          {movies && movies.length > 0 && (
            <LoadMoreButton
              hasMore={hasMore}
              loading={loadingMore}
              onLoadMore={loadMore}
              totalMovies={movies.length}
              currentPage={page}
            />
          )}
        </>
      )}

      {/* App footer */}
      <Footer />
    </div>
  );
};

export default SearchResultsPage;
