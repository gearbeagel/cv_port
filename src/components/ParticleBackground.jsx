import React from "react";
import Particles from "react-tsparticles";
import particleOptions from "../assets/bg.json"; 
import { loadSlim } from "tsparticles-slim"; 
import { useCallback } from "react";// Adjust the path as necessary

const ParticleBackground = () => {
  const particlesInit = useCallback(async (engine) => {
    console.log(engine);
    await loadSlim(engine);
  }, []);

  const particlesLoaded = useCallback(async (container) => {
    await console.log(container);
  }, []);
  return (
    <div
      style={{
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        zIndex: -1,
        backgroundColor: "rgb(31, 41, 55)",
      }}
    >
      <Particles
        id="tsparticles"
        options={particleOptions} // Use the imported options
      />
    </div>
  );
};

export default ParticleBackground;
