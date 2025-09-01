import MovieCard from "./MovieCard.jsx";

const MovieRow = ({ title, movies }) => {
  return (
    <div className="px-4 md:px-16 mb-8">
      {/* Row title */}
      <h2 className="text-xl md:text-2xl font-bebas text-white mb-4 tracking-wide">
        {title}
      </h2>

      {/* Movie cards container */}
      <div className="flex items-stretch space-x-4 overflow-x-auto scrollbar-hide pb-16 pt-4 px-8 -mx-8">
        {movies.map((movie, index) => (
          <MovieCard key={`${movie.title}-${index}`} movie={movie} />
        ))}
      </div>
    </div>
  );
};

export default MovieRow;
