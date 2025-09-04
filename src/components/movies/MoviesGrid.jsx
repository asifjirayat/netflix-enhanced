import MovieCard from "./MovieCard.jsx";
import { VideoCameraIcon } from "@heroicons/react/24/outline";

const MoviesGrid = ({ loading, category, movies = null }) => {
  return (
    <div className="px-4 md:px-16 pb-20">
      {loading ? (
        <div className="text-center">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary mx-auto mb-4" />
          <p className="text-gray-400">
            Loading {category.toLowerCase()} movies...
          </p>
        </div>
      ) : movies && movies.length > 0 ? (
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 2xl:grid-cols-7 gap-4">
          {movies.map((movie) => (
            <MovieCard key={movie.id} movie={movie} />
          ))}
        </div>
      ) : (
        <div className="text-center py-20">
          <div className="mb-4">
            <VideoCameraIcon className="w-24 h-auto text-primary mx-auto " />
          </div>
          <h3 className="text-xl font-bebas text-gray-300 mb-2">
            No {category} movies found
          </h3>
          <p className="text-gray-500 text-sm">
            Try refreshing the page or check back later.
          </p>
        </div>
      )}
    </div>
  );
};

export default MoviesGrid;
