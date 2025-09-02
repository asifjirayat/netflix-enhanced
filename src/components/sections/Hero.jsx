import {
  PlayIcon,
  PlusIcon,
  InformationCircleIcon,
} from "@heroicons/react/24/solid";

const Hero = ({ movie }) => {
  if (!movie) {
    // Loading state for hero
    return (
      <div className="relative h-[70vh] md:h-[80vh] w-full bg-gradient-to-br from-gray-800 to-gray-900">
        <div className="absolute inset-0 bg-black/40" />
        <div className="relative z-10 flex items-center h-full px-4 md:px-16">
          <div className="max-w-2xl">
            <div className="h-12 bg-gray-700 rounded mb-4 animate-pulse"></div>
            <div className="h-4 bg-gray-700 rounded mb-2 animate-pulse"></div>
            <div className="h-4 bg-gray-700 rounded mb-6 w-3/4 animate-pulse"></div>
            <div className="flex gap-4">
              <div className="h-12 bg-gray-700 rounded w-32 animate-pulse"></div>
              <div className="h-12 bg-gray-700 rounded w-32 animate-pulse"></div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div
      className="relative h-[80vh] w-full bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: movie.backdrop_path
          ? `url(https://image.tmdb.org/t/p/original${movie.backdrop_path})`
          : "linear-gradient(to bottom right, #1f2937, #111827)",
      }}
    >
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-transparent" />

      {/* Hero content */}
      <div className="relative z-10 flex items-center h-full px-4 md:px-16">
        <div className="max-w-2xl">
          {/* Movie title */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bebas text-white mb-4 tracking-wide">
            {movie.title}
          </h1>

          {/* Movie details */}
          <div className="flex items-center gap-4 text-white mb-4">
            <span className="bg-primary/80 px-2 py-1 rounded text-sm font-semibold">
              ★ {movie.vote_average?.toFixed(1)}
            </span>
            <span className="text-lg font-helvetica">
              {new Date(movie.release_date).getFullYear()}
            </span>
            <span className="px-2 py-1 border border-white/50 rounded text-sm">
              HD
            </span>
          </div>

          {/* Movie overview */}
          <p className="text-lg md:text-xl text-gray-200 font-helvetica mb-8 leading-relaxed line-clamp-3">
            {movie.overview}
          </p>

          {/* Action buttons */}
          <div className="flex flex-col sm:flex-row gap-4">
            <button className="px-8 py-3 bg-white text-black font-helvetica font-semibold rounded-md flex items-center justify-center space-x-2 hover:bg-gray-200 transition-colors cursor-pointer">
              <PlayIcon className="w-6 h-6" />
              <span>Play</span>
            </button>
            <button className="px-8 py-3 bg-white/10 text-white font-helvetica font-semibold rounded-md flex items-center justify-center space-x-2 hover:bg-white/20 transition-colors cursor-pointer">
              <PlusIcon className="w-6 h-6" />
              <span>My List</span>
            </button>
            <button className="px-8 py-3 bg-white/10 text-white font-helvetica font-semibold rounded-md flex items-center justify-center space-x-2 hover:bg-white/20 transition-colors cursor-pointer">
              <InformationCircleIcon className="w-6 h-6" />
              <span>More Info</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
