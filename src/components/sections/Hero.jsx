import { IMAGE_BASE_URL } from "../../services/tmdbApi.js";
import { InformationCircleIcon } from "@heroicons/react/24/outline";
import { PlayIcon } from "@heroicons/react/24/solid";

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
    <section className="relative h-screen flex items-center">
      {/* Background placeholder */}
      <div className="absolute inset-0 bg-gradient-to-r from-black via-black/50 to-transparent z-10">
        <div className="absolute inset-0 bg-gradient-to-t from-dark to-gray-700">
          {/* Hero content */}
          <div className="relative z-20 px-4 md:px-16 max-w-2xl">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bebas text-white mb-6 leading-tight">
              STRANGER THINGS
            </h1>
            <p className="text-lg md:text-xl text-gray-200 mb-8 font-helvetica leading-relaxed max-w-xl">
              When a young boy vanishes, a small town uncovers a mystery
              involving secret experiments, terrifying supernatural forces and
              one strange little girl.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <button className="px-8 py-3 bg-white text-black font-helvetica font-semibold rounded-md flex items-center justify-center space-x-2 hover:bg-gray-200 transition-colors cursor-pointer">
                <PlayIcon className="w-6 h-6" />
                <span>Play</span>
              </button>
              <button className="px-8 py-3 bg-gray-600/70 text-white font-helvetica font-semibold rounded-md flex items-center justify-center space-x-2 hover:bg-gray-600/40 transition-colors cursor-pointer">
                <InformationCircleIcon className="w-6 h-6" />
                <span>More Info</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
