const MovieRow = ({ title, movies }) => {
  return (
    <div className="px-4 md:px-16 mb-8">
      {/* Row title */}
      <h2 className="text-xl md:text-2xl font-bebas text-white mb-4 tracking-wide">
        {title}
      </h2>

      {/* Movie cards container */}
      <div className="flex space-x-2 overflow-x-auto scrollbar-hide pb-4">
        {movies.map((movie, index) => (
          <div
            key={index}
            className="min-w-[160px] md:min-w-[200px] bg-gray rounded-md overflow-hidden"
          >
            {/* Movie poster placeholder */}
            <div className="aspect-[2/3] bg-gradient-to-br from-gray-600 to-gray-800 items-center justify-center">
              <span className="text-gray-400 helvetica text-sm text-center px-4">
                {movie.title}
              </span>
            </div>

            {/* Movie info */}
            <div className="p-3">
              <h3 className="text-white helvetica text-sm font-medium mb-1 truncate">
                {movie.title}
              </h3>
              <p className="text-gray-400 helvetica text-xs">
                {movie.year} • {movie.rating}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MovieRow;
