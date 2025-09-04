const LoadMoreButton = ({
  hasMore,
  loading,
  onLoadMore,
  totalMovies = 0,
  currentPage = 1,
}) => {
  if (!hasMore && totalMovies === 0) return null;

  return (
    <div className="text-center pb-20">
      {hasMore && !loading ? (
        <>
          <button
            onClick={onLoadMore}
            disabled={loading}
            className="bg-primary hover:bg-secondary disabled:bg-gray-600 disabled:cursor-not-allowed px-8 py-3 rounded-lg font-helvetica transition-colors duration-200 cursor-pointer"
          >
            Load More Movies
          </button>
          <p className="text-gray-500 text-sm mt-3">
            Showing {totalMovies} movies • Page {currentPage}
          </p>
        </>
      ) : loading ? (
        <>
          <button
            disabled
            className="bg-gray-600 cursor-not-allowed px-8 py-3 rounded-lg font-helvetica flex items-center justify-center gap-2 mx-auto"
          >
            <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white" />
            <span>Loading More...</span>
          </button>
        </>
      ) : (
        <div className="text-center">
          <p className="text-gray-400">
            You've reached the end! All {totalMovies} movies loaded.
          </p>
        </div>
      )}
    </div>
  );
};

export default LoadMoreButton;
