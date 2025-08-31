import { motion } from "framer-motion";
import { useState, useEffect } from "react";

const NetflixIntro = ({ onComplete }) => {
  const [hasStarted, setHasStarted] = useState(false);
  const [stage, setStage] = useState("appear");

  const handleStart = () => {
    setHasStarted(true);

    // Play audio after user interaction
    const audio = new Audio("/netflix-intro.mp3");
    audio.volume = 0.7;
    audio.play().catch((error) => console.error("Audio play failed:", error));
  };

  useEffect(() => {
    if (!hasStarted) return;

    // Timeline: appear (0-1.2s) -> scale to camera (1.2-3s)
    const scaleTimer = setTimeout(() => setStage("scaleToCamera"), 1200);

    const endTimer = setTimeout(() => onComplete?.(), 3000);

    return () => {
      clearTimeout(scaleTimer);
      clearTimeout(endTimer);
    };
  }, [hasStarted, onComplete]);

  if (!hasStarted) {
    return (
      <div className="h-screen w-screen bg-black flex flex-col gap-6 items-center justify-center">
        <img src="/netflix.svg" alt="Netflix" className="h-50 opacity-50" />
        <button
          onClick={handleStart}
          className="px-8 py-3 bg-red-600 hover:bg-red-700 text-white font-semibold rounded-lg transition-colors duration-200 text-lg"
        >
          Start Netflix Experience
        </button>
      </div>
    );
  }

  return (
    <div className="h-screen w-screen bg-black flex items-center justify-center">
      <motion.div
        initial={{
          scale: 0,
          opacity: 0,
        }}
        animate={
          stage === "appear" ? { scale: 1, opacity: 1 } : { scale: 15, z: 100 }
        }
        transition={
          stage === "appear"
            ? {
                duration: 1.2,
                ease: "easeOut",
                type: "spring",
                stiffness: 100,
              }
            : {
                duration: 1.8,
                ease: "easeIn",
              }
        }
        style={{
          perspective: "1000px",
          filter: "drop-shadow(0 0 20px rgba(229,9,20,0.3))",
        }}
      >
        {/* Netflix Logo SVG */}
        <img src="/netflix.svg" alt="Netflix" className="h-50" />
      </motion.div>
    </div>
  );
};

export default NetflixIntro;
