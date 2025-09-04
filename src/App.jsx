import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Homepage from "./components/pages/Homepage.jsx";
import TrendingPage from "./components/pages/TrendingPage.jsx";

const App = () => {
  return (
    <Router>
      <div className="w-full min-h-screen overflow-x-hidden">
        <Routes>
          {/* Homepage route */}
          <Route path="/" element={<Homepage />} />
          {/* Movie category routes */}
          <Route path="/trending" element={<TrendingPage />} />
          <Route
            path="/popular"
            element={<div>Popular page coming soon...</div>}
          />
          <Route
            path="/top-rated"
            element={<div>Top Rated page coming soon...</div>}
          />
          <Route
            path="/now-playing"
            element={<div>Now Playing page coming soon...</div>}
          />

          {/* Catch-all for 404 */}
          <Route path="*" element={<div>404 Not found...</div>} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
