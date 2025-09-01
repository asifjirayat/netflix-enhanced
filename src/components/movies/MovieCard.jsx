import { motion } from "framer-motion";
import { PlayIcon, PlusIcon } from "@heroicons/react/24/solid";
import { useCallback, useRef, useState } from "react";

const MovieCard = ({ movie }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      className="min-w-[160px] md:min-w-[200px] cursor-pointer group shrink-0"
      whileHover={{ scale: 1.3, y: -20, zIndex: 50 }}
      transition={{ duration: 0.4, ease: [0.25, 0.46, 0.45, 0.94], delay: 0.1 }}
      style={{ transformOrigin: "center center" }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
    >
      {/* Movie Poster */}
      <div className="aspect-[2/3] bg-gradient-to-br from-gray-600 to-gray-800 rounded-md overflow-hidden relative">
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="text-gray-400 font-helvetica text-sm text-center px-4">
            {movie.title}
          </span>
        </div>

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
                <button className="w-8 h-8 bg-white rounded-full flex items-center justify-center hover:bg-gray-200 transition-colors">
                  <PlayIcon className="w-4 h-4 text-black ml-0.5" />
                </button>
                <button className="w-8 h-8 border-2 border-white/70 rounded-full flex items-center justify-center hover:border-white transition-colors">
                  <PlusIcon className="h-4 w-4 text-white" />
                </button>
              </div>

              {/* Movie Info */}
              <div className="text-white">
                <h3 className="font-helvetica font-semibold text-sm mb-1">
                  {movie.title}
                </h3>
                <div className="flex items-center gap-2 text-xs text-gray-300 mb-1">
                  <span className="bg-gay-600/80 px-1 rounded text-[10px]">
                    {movie.rating}
                  </span>
                  <span>{movie.year}</span>
                  <span>•</span>
                  <span>{movie.duration}</span>
                </div>
                <div className="flex flex-wrap gap-1">
                  <span className="text-[10px] text-gray-400">
                    {movie.genre}
                  </span>
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
