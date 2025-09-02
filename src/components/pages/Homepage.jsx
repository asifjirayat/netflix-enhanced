import Header from "../layout/Header.jsx";
import Hero from "../sections/Hero.jsx";
import MovieRow from "../movies/MovieRow.jsx";
import { useMovies } from "../../hooks/useMovies.js";
import {
  FilmIcon,
  CursorArrowRaysIcon,
  GlobeAltIcon,
} from "@heroicons/react/24/outline";

const Homepage = () => {
  const { movies, loading, error } = useMovies();

  if (error) {
    return (
      <div className="min-h-screen w-full bg-dark text-white flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bebas mb-2">
            Oops! Something went wrong
          </h2>
          <p className="text-gray-400">{error}</p>
          <p className="text-gray-500 text-sm mt-2">
            Check your API key in .env file
          </p>
        </div>
      </div>
    );
  }
  return (
    <div className="min-h-screen w-full bg-dark text-white">
      <Header />
      <Hero />

      {/* Movie row section */}
      <div className="pb-20">
        {loading ? (
          // Loading skeleton
          <div className="px-4 md:px-16 space-y-8">
            {[1, 2, 3, 4].map((row) => (
              <div key={row}>
                <div className="h-6 bg-gray-700 rounded w-48 mb-4 animate-pulse"></div>

                <div className="flex space-x-3">
                  {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map((card) => (
                    <div
                      key={card}
                      className="min-w-[140px] md:w-[180px] aspect-[2/3] bg-gray-700 rounded-lg animate-pulse"
                    ></div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        ) : (
          <>
            <MovieRow title="NOW PLAYING" movies={movies.nowPlaying} />
            <MovieRow title="TRENDING NOW" movies={movies.trending} />
            <MovieRow title="POPULAR ON STREAMFLIX" movies={movies.popular} />
            <MovieRow title="TOP RATED" movies={movies.topRated} />
          </>
        )}
      </div>

      {/* Coming soon section */}
      <div className="px-4 md:px-16 py-20">
        <div className="text-center">
          <h2 className="text-3xl font-bebas text-white mb-4 tracking-wide">
            POWERED BY REAL DATA
          </h2>
          <p className="text-gray-400 font-helvetica text-lg mb-8">
            Live movie data • Interactive hover effects • Dynamic content
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="bg-gray p-6 rounded-lg">
              <FilmIcon className="w-12 h-12 text-primary mx-auto mb-4" />
              <h3 className="font-bebas text-xl text-white mb-2">REAL DATA</h3>
              <p className="text-gray-300 font-helvetica text-sm">
                Live movie posters, ratings & runtime from TMDB
              </p>
            </div>
            <div className="bg-gray p-6 rounded-lg">
              <CursorArrowRaysIcon className="w-12 h-12 text-primary mx-auto mb-4" />
              <h3 className="font-bebas text-xl text-white mb-2">
                INTERACTIVE
              </h3>
              <p className="text-gray-300 font-helvetica text-sm">
                Hover effects and animations
              </p>
            </div>
            <div className="bg-gray p-6 rounded-lg">
              <GlobeAltIcon className="w-12 h-12 text-primary mx-auto mb-4" />
              <h3 className="font-bebas text-xl text-white mb-2">
                API POWERED
              </h3>
              <p className="text-gray-300 font-helvetica text-sm">
                TMDB integration with 4 dynamic categories
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Homepage;
