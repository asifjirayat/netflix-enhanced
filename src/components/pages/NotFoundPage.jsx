import { Link } from "react-router-dom";
import Header from "../layout/Header.jsx";
import { VideoCameraIcon } from "@heroicons/react/24/outline";

const NotFoundPage = () => {
  return (
    <div className="min-h-screen bg-dark text-white">
      <Header />

      <div className="flex flex-col items-center justify-center min-h-screen px-4">
        <h1 className="text-8xl md:text-9xl font-bebas font-extrabold mb-4 bg-gradient-to-r from-primary via-secondary to-primary bg-clip-text text-transparent animate-pulse">
          404
        </h1>

        {/* Glitch effect background */}
        <div className="relative">
          <div className="absolute inset-0 bg-primary/20 blur-3xl rounded-full animate-ping" />
          <h2 className="relative text-2xl md:text-3xl font-bebas tracking-wide mb-6">
            OOPS! LOST IN THE STREAM
          </h2>
        </div>

        {/* Error message */}
        <div className="text-center max-w-md mb-8">
          <p className="text-gray-300 font-helvetica text-lg mb-4">
            The movie you're looking for seems to have gone missing from our
            catalog.
          </p>
          <p className="text-gray-400 font-helvetica text-sm">
            Don't worry, there are plenty of other great titles waiting for you!
          </p>
        </div>

        {/* Action buttons */}
        <div className="flex flex-col sm:flex-row gap-4 mb-12">
          <Link
            to="/"
            className="bg-primary hover:bg-secondary px-8 py-3 rounded-md font-helvetica font-normal transition-colors duration-200 text-center "
          >
            Back to Home
          </Link>
          <Link
            to="/trending"
            className="bg-white/10 hover:bg-white/20 px-8 py-3 rounded-md font-helvetica font-normal transition-colors duration-200 text-center cursor-pointer"
          >
            Browse Trending
          </Link>
        </div>

        {/* Icon */}
        <div className="text-center">
          <div className="text-6xl mb-4">
            <VideoCameraIcon className="text-primary w-12 h-auto mx-auto" />
          </div>
          <p className="text-gray-500 text-sm font-helvetica">
            Error Code: MOVIE_NOT_FOUND
          </p>
        </div>
      </div>
    </div>
  );
};

export default NotFoundPage;
