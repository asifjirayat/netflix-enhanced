import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Homepage from "./components/pages/Homepage.jsx";
import TrendingPage from "./components/pages/TrendingPage.jsx";
import Popular from "./components/pages/Popular.jsx";
import TopRated from "./components/pages/TopRated.jsx";
import NowPlaying from "./components/pages/NowPlaying.jsx";
import NotFoundPage from "./components/pages/NotFoundPage.jsx";

const App = () => {
  return (
    <Router>
      <div className="w-full min-h-screen overflow-x-hidden">
        <Routes>
          {/* Homepage route */}
          <Route path="/" element={<Homepage />} />
          {/* Movie category routes */}
          <Route path="/trending" element={<TrendingPage />} />
          <Route path="/popular" element={<Popular />} />
          <Route path="/top-rated" element={<TopRated />} />
          <Route path="/now-playing" element={<NowPlaying />} />

          {/* Catch-all for 404 */}
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
