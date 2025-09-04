import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 md:px-16 py-12">
        {/* Main footer contetn */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* Brand and description */}
          <div className="lg:col-span-2">
            <img
              src="/streamflix-logo-full.svg"
              alt="StreamFlix"
              className="w-auto h-8 mb-4"
            />
            <p className="text-gray-300 font-helvetica text-sm leading-relaxed max-w-md">
              StreamFlix is a modern movie discovery platform built with React
              and powered by real-time data from TMDB. Explore trending movies,
              discover top-rated films, and dive into the world of cinema with
              an intuitive, responsive interface designed for movie enthusiasts.
            </p>
          </div>

          {/* Quick links */}
          <div>
            <h3 className="font-bebas text-lg text-white mb-4 tracking-wide">
              EXPLORE
            </h3>
            <ul className="space-y-2">
              <li>
                <Link
                  to="/"
                  className="text-gray-400 hover:text-white transition-colors font-helvetica text-sm"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/trending"
                  className="text-gray-400 hover:text-white transition-colors font-helvetica text-sm"
                >
                  Trending Movies
                </Link>
              </li>
              <li>
                <Link
                  to="/popular"
                  className="text-gray-400 hover:text-white transition-colors font-helvetica text-sm"
                >
                  Popular Movies
                </Link>
              </li>
              <li>
                <Link
                  to="/top-rated"
                  className="text-gray-400 hover:text-white transition-colors font-helvetica text-sm"
                >
                  Top Rated
                </Link>
              </li>
              <li>
                <Link
                  to="/now-playing"
                  className="text-gray-400 hover:text-white transition-colors font-helvetica text-sm"
                >
                  Now Playing
                </Link>
              </li>
            </ul>
          </div>

          {/* Developer info */}
          <div>
            <h3 className="font-bebas text-lg text-white mb-4 tracking-wide">
              DEVELOPER
            </h3>
            <div className="space-y-2">
              <p className="text-gray-300 font-helvetica text-sm">
                Built with 💖 by{" "}
                <span className="font-medium">Asif Jirayat</span>
              </p>
              <div className="flex space-x-4 mt-4">
                <a
                  href="https://github.com/asifjirayat"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-md text-gray-400 hover:text-white font-bebas tracking-wider transition-colors"
                >
                  GITHUB
                </a>
                <a
                  href="https://www.linkedin.com/in/asifjirayat/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-md text-gray-400 hover:text-white font-bebas tracking-wider transition-colors"
                >
                  LINKEDIN
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom footer */}
        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <p className="text-gray-400 font-helvetica text-xs">
                © {new Date().getFullYear()} StreamFlix. Built as a portfolio
                project.
              </p>
              <p className="text-gray-500 font-helvetica text-xs mt-1">
                Movie data provided by{" "}
                <a
                  href="https://www.themoviedb.org/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary hover:text-secondary"
                >
                  The Movie Database (TMDB)
                </a>
              </p>
            </div>

            <div className="flex items-center space-x-6">
              <p className="text-gray-500 font-helvetica text-xs">
                Made with React, Vite & Tailwind CSS
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
