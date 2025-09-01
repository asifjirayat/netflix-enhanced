import { useState } from "react";
import StreamflixIntro from "./components/intro/StreamflixIntro.jsx";
import Homepage from "./components/pages/Homepage.jsx";

const App = () => {
  const [showIntro, setShowIntro] = useState(true);

  const handleIntroComplete = () => setShowIntro(false);

  return (
    <>
      {showIntro ? (
        <StreamflixIntro onComplete={handleIntroComplete} />
      ) : (
        <Homepage />
      )}
    </>
  );
};

export default App;
