import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import introAudio from "/mixkit-orchestra-triumphant-trumpets-2285.wav";

const StreamflixIntro = ({ onComplete }) => {
  const [hasStarted, setHasStarted] = useState(false);
  const [stage, setStage] = useState("appear");

  const handleStart = () => {
    setHasStarted(true);

    // Play audio after user interaction
    const audio = new Audio(introAudio);
    audio.volume = 0.7;
    audio.play().catch((error) => console.error("Audio play failed:", error));
  };

  useEffect(() => {
    if (!hasStarted) return;

    // Timeline: appear (0-1.2s) -> scale to camera (1.2-3s)
    const scaleTimer = setTimeout(() => setStage("scaleToCamera"), 1200);

    const endTimer = setTimeout(() => onComplete?.(), 3200);

    return () => {
      clearTimeout(scaleTimer);
      clearTimeout(endTimer);
    };
  }, [hasStarted, onComplete]);

  if (!hasStarted) {
    return (
      <div className="h-screen w-screen bg-dark flex flex-col gap-6 items-center justify-center">
        <img
          src="/streamflix.svg"
          alt="Streamflix"
          className="h-20 w-auto opacity-50"
        />
        <button
          onClick={handleStart}
          className="mt-10 px-8 py-3 bg-primary hover:bg-secondary text-white font-helvetica rounded-lg transition-colors duration-200 text-lg"
        >
          Start Streamflix Experience
        </button>
      </div>
    );
  }

  return (
    <div className="h-screen w-screen bg-dark flex items-center justify-center">
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
                damping: 12,
              }
            : {
                duration: 1.8,
                ease: [0.25, 0.46, 0.45, 0.94],
              }
        }
        style={{
          filter: "drop-shadow(0 0 20px rgba(139,92,246,0.3))",
        }}
      >
        {/* Streamflix Logo SVG */}
        <img src="/streamflix.svg" alt="Streamflix" className="h-50 w-auto" />
      </motion.div>
    </div>
  );
};

export default StreamflixIntro;
