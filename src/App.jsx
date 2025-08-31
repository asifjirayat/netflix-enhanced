import { useState } from "react";
import NetflixIntro from "./components/intro/NetflixIntro.jsx";
import Homepage from "./components/pages/Homepage.jsx";

const App = () => {
  const [showIntro, setShowIntro] = useState(true);

  const handleIntroComplete = () => setShowIntro(false);

  return (
    <>
      {showIntro ? (
        <NetflixIntro onComplete={handleIntroComplete} />
      ) : (
        <Homepage />
      )}
    </>
  );
};

export default App;
