import Header from "../layout/Header.jsx";
import Hero from "../sections/Hero.jsx";
import MovieRow from "../movies/MovieRow.jsx";
import { mockMovies } from "../../utils/mockData.js";
import {
  FilmIcon,
  CursorArrowRaysIcon,
  GlobeAltIcon,
} from "@heroicons/react/24/outline";

const Homepage = () => {
  return (
    <div className="h-screen w-screen bg-netflix-black text-white">
      <Header />
      <Hero />

      {/* Movie row section */}
      <div className="pb-20">
        <MovieRow title="TRENDING NOW" movies={mockMovies.trending} />
        <MovieRow
          title="NETFLIX ORIGINALS"
          movies={mockMovies.netflixOriginals}
        />
        <MovieRow title="POPULAR ON NETFLIX" movies={mockMovies.popular} />
      </div>

      {/* Coming soon section */}
      <div className="px-4md:px-16 py-20 bg-netflix-black">
        <div className="text-center">
          <h2 className="text-3xl font-bebas text-white mb-4 tracking-wide">
            COMING NEXT
          </h2>
          <p className="text-gray-400 font-netflix text-lg mb-8">
            Movie rows • Interactive cards • Search functionality
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="bg-netflix-gray p-6 rounded-lg">
              <FilmIcon className="w-12 h-12 text-netflix-red mx-auto mb-4" />
              <h3 className="font-bebas text-xl text-white mb-2">MOVIE ROWS</h3>
              <p className="text-gray-300 font-netflix text-sm">
                Horizontal scrolling sections
              </p>
            </div>
            <div className="bg-netflix-gray p-6 rounded-lg">
              <CursorArrowRaysIcon className="w-12 h-12 text-netflix-red mx-auto mb-4" />
              <h3 className="font-bebas text-xl text-white mb-2">
                INTERACTIVITY
              </h3>
              <p className="text-gray-300 font-netflix text-sm">
                Hover effects and animations
              </p>
            </div>
            <div className="bg-netflix-gray p-6 rounded-lg">
              <GlobeAltIcon className="w-12 h-12 text-netflix-red mx-auto mb-4" />
              <h3 className="font-bebas text-xl text-white mb-2">
                API INTEGRATION
              </h3>
              <p className="text-gray-300 font-netflix text-sm">
                Real movie data from TMDB
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Homepage;
