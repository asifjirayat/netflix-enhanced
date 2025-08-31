import { Canvas, useFrame } from "@react-three/fiber";
import { useEffect, useRef, useState } from "react";

/**
 * NetflixText3D - Animated 3D Netflix logo using geometric letters
 */
const NetflixText3D = () => {
  const groupRef = useRef();

  // Animation loop
  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.rotation.y += 0.005; // Rotate
      groupRef.current.rotation.y = Math.sin(state.clock.elapsedTime) * 0.1;
    }
  });

  return (
    <group ref={groupRef}>
      {/* N */}
      <mesh position={[-3, 0, 0]}>
        <boxGeometry args={[0.4, 1.5, 0.3]} />
        <meshStandardMaterial color="#E50914" metalness={0.1} roughness={0.4} />
      </mesh>

      {/* E */}
      <mesh position={[-2, 0, 0]}>
        <boxGeometry args={[0.4, 1.5, 0.3]} />
        <meshStandardMaterial color="#E50914" metalness={0.1} roughness={0.4} />
      </mesh>

      {/* T */}
      <mesh position={[-1, 0, 0]}>
        <boxGeometry args={[0.4, 1.5, 0.3]} />
        <meshStandardMaterial color="#E50914" metalness={0.1} roughness={0.4} />
      </mesh>

      {/* F */}
      <mesh position={[0, 0, 0]}>
        <boxGeometry args={[0.4, 1.5, 0.3]} />
        <meshStandardMaterial color="#E50914" metalness={0.1} roughness={0.4} />
      </mesh>

      {/* L */}
      <mesh position={[1, 0, 0]}>
        <boxGeometry args={[0.4, 1.5, 0.3]} />
        <meshStandardMaterial color="#E50914" metalness={0.1} roughness={0.4} />
      </mesh>

      {/* I */}
      <mesh position={[2, 0, 0]}>
        <boxGeometry args={[0.4, 1.5, 0.3]} />
        <meshStandardMaterial color="#E50914" metalness={0.1} roughness={0.4} />
      </mesh>

      {/* X */}
      <mesh position={[3, 0, 0]}>
        <boxGeometry args={[0.4, 1.5, 0.3]} />
        <meshStandardMaterial color="#E50914" metalness={0.1} roughness={0.4} />
      </mesh>
    </group>
  );
};

/**
 * NetflixIntro - 3D logo scene wrapper
 */
const NetflixIntro = () => {
  return (
    <div className="h-screen w-screen bg-black">
      <Canvas
        camera={{
          position: [0, 0, 8], // 8 Units back from center
          fov: 60, // Natural camera
        }}
      >
        <ambientLight intensity={0.5} /> // Overall canvas illumination
        <pointLight position={(10, 10, 10)} intensity={1} /> // Directional
        lighting
        <NetflixText3D />
      </Canvas>
    </div>
  );
};

/**
 * MainApp - Placeholder for Netflix homepage
 */

const MainApp = () => {
  return (
    <div className="h-screen w-screen bg-gray-900 flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-6xl font-bold text-white mb-4">Netflix Enhanced</h1>
        <p className="text-xl text-gray-300">Homepage coming next...</p>
        <div className="mt-8 p-4 bg-red-600 text-white rounded">
          3D Intro Complete
        </div>
      </div>
    </div>
  );
};

/**
 * App - Controls Intro/Main App flow
 */
const App = () => {
  const [showIntro, setShowIntro] = useState(true);

  // Timer to transition after 3 seconds
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowIntro(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  return <>{showIntro ? <NetflixIntro /> : <MainApp />}</>;
};

export default App;
