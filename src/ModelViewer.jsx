import React, { useRef, useState, useEffect } from "react";
import { Canvas } from "@react-three/fiber";
import { Environment, OrbitControls } from "@react-three/drei";
import Earth from '../public/Earth';
import "./ModelViewer.css";

const ModelViewer = () => {
  const containerRef = useRef();

  useEffect(() => {
    const handleResize = () => {
      const { clientWidth } = containerRef.current;
      containerRef.current.style.height = `${clientWidth}px`;
    };

    window.addEventListener("resize", handleResize);
    handleResize(); // Call once to set initial height

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="model-container" ref={containerRef}>
      <Canvas camera={{ position: [0, 0, 10], fov: 45 }}>
        <ambientLight intensity={2} />
        <OrbitControls enableZoom={false} />
        <Earth />
        <Environment preset="sunset" />
      </Canvas>
    </div>
  );
};

export default ModelViewer;
