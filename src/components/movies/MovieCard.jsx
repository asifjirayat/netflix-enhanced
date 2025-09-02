import { motion } from "framer-motion";
import { PlayIcon, PlusIcon } from "@heroicons/react/24/solid";
import { useCallback, useState } from "react";
import { IMAGE_BASE_URL, movieAPI } from "../../services/tmdbApi.js";

const MovieCard = ({ movie }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [imageLoaded, setImageLoaded] = useState(false);
  const [movieDetails, setMovieDetails] = useState(null);
  const [detailsLoading, setDetailsLoading] = useState(false);

  const fetchMovieDetails = useCallback(async () => {
    if (movieDetails || detailsLoading) return;

    try {
      setDetailsLoading(true);
      const response = await movieAPI.getDetails(movie.id);
      setMovieDetails(response.data);
    } catch (error) {
      console.error("Failed to fetch movie details:", error);
    } finally {
      setDetailsLoading(false);
    }
  }, [movie.id, movieDetails, detailsLoading]);

  // Handle hover start event on non-touch devices
  const handleHoverStart = () => {
    setIsHovered(true);
    fetchMovieDetails();
  };

  // Handle hover end event on non-touch devices
  const handleHoverEnd = () => {
    setIsHovered(false);
  };

  // Handle touch start event on touch devices
  const handleTouchStart = () => {
    setIsHovered(true);
    fetchMovieDetails();
  };

  // Handle touch end event on touch devices
  const handleTouchEnd = () => {
    setTimeout(() => {
      setIsHovered(false);
    }, 3000);
  };

  // Handle touch outside to close on touch devices
  const handleClick = () => {
    if (isHovered) {
      setIsHovered(false);
    } else {
      setIsHovered(true);
      fetchMovieDetails();
    }
  };

  return (
    <motion.div
      className="w-[180px] md:w-[200px] cursor-pointer group shrink-0"
      whileHover={{ scale: 1.02, y: -10, zIndex: 5 }}
      transition={{ duration: 0.3, ease: [0.25, 0.46, 0.45, 0.94], delay: 0.1 }}
      style={{ transformOrigin: "center center" }}
      onHoverStart={handleHoverStart}
      onHoverEnd={handleHoverEnd}
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
      onClick={handleClick}
    >
      {/* Movie Poster */}
      <div className="aspect-[2/3] bg-gradient-to-br from-gray-600 to-gray-800 rounded-md overflow-hidden relative">
        {/* Movie Posters from API */}
        {movie.poster_path ? (
          <img
            src={`${IMAGE_BASE_URL}${movie.poster_path}`}
            alt={movie.title}
            className={`w-full h-full object-cover transition-opacity duration-300 ${
              imageLoaded ? "opacity-100" : "opacity-0"
            }`}
            onLoad={() => setImageLoaded(true)}
          />
        ) : (
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="text-gray-400 font-helvetica text-sm text-center px-4">
              {movie.title}
            </span>
          </div>
        )}

        {/* Loading spinner */}
        {movie.poster_path && !imageLoaded && (
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary"></div>
          </div>
        )}

        {/* Hover details overlay */}
        {isHovered && (
          <motion.div
            className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent"
            initial={{ opacity: 0 }}
            animate={{ opacity: isHovered ? 1 : 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className="absolute bottom-0 left-0 right-0 p-4">
              {/* Action buttons */}
              <div className="flex items-center gap-2 mb-2">
                <button
                  className="w-8 h-8 bg-white rounded-full flex items-center justify-center hover:bg-gray-200 transition-colors cursor-pointer"
                  onClick={(e) => e.stopPropagation()}
                >
                  <PlayIcon className="w-4 h-4 text-black ml-0.5" />
                </button>
                <button
                  className="w-8 h-8 border-2 border-white/70 rounded-full flex items-center justify-center hover:border-white transition-colors cursor-pointer"
                  onClick={(e) => e.stopPropagation()}
                >
                  <PlusIcon className="h-4 w-4 text-white" />
                </button>
              </div>

              {/* Movie Info */}
              <div className="text-white">
                <h3 className="font-helvetica font-normal text-sm mb-1">
                  {movie.title}
                </h3>
                <div className="flex items-center gap-2 text-xs text-gray-300">
                  <span className="bg-primary/80 px-1 rounded">
                    ★ {movie.vote_average?.toFixed(1)}
                  </span>
                  <span>{new Date(movie.release_date).getFullYear()}</span>
                  {movieDetails?.runtime &&
                    !isNaN(movieDetails.runtime) &&
                    movieDetails.runtime > 0 && (
                      <>
                        <span>•</span>
                        <span>
                          {Math.floor(movieDetails.runtime / 60)}h
                          {movieDetails.runtime % 60}m
                        </span>
                      </>
                    )}
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </div>
    </motion.div>
  );
};

export default MovieCard;
