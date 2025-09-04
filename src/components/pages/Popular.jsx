import Header from "../layout/Header.jsx";
import PageHeader from "../movies/PageHeader.jsx";
import MoviesGrid from "../movies/MoviesGrid.jsx";
import LoadMoreButton from "../ui/LoadMoreButton.jsx";
import { useMoviesPagination } from "../../hooks/useMoviesPagination.js";
import { movieAPI } from "../../services/tmdbApi.js";

const Popular = () => {
  const { movies, loading, loadingMore, hasMore, error, page, loadMore } =
    useMoviesPagination(movieAPI.getPopular);

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
      <PageHeader pageTitle="Popular Movies" />

      {/* Movies Grid */}
      <MoviesGrid loading={loading} movies={movies} category="Popular" />

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
    </div>
  );
};

export default Popular;
