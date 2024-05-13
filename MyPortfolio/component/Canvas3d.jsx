import React, { Suspense, useEffect, useState } from "react";
import { Canvas , useThree } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";


const Computers = () => {
  const { viewport } = useThree(); // Accessing viewport size
  const { width, height } = viewport;

  const computer = useGLTF("./desktop_pc/scene.gltf");

  // Calculate scale factor based on screen size
  const scaleFactor = Math.min(width, height) / 10; // Adjust 500 to scale as desired

  return (
    <mesh>
      <primitive
        object={computer.scene}
        scale={[scaleFactor * 0.7, scaleFactor * 0.7, scaleFactor * 0.7]} // Applying scale factor
        position={[0, -3, -2.2]}
        rotation={[-0.01, -0.2, -0.1]}
      />
    </mesh>
  );
};

const ComputersCanvas = () => {
 

  

  return (
    <Canvas
      frameloop='demand'
      shadows
      dpr={[1, 2]}
      camera={{ position: [20, 3, 5], fov: 25 }}
      gl={{ preserveDrawingBuffer: true }}
    >
        <ambientLight intensity={5} />
        <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} decay={0} intensity={Math.PI} />
        <pointLight position={[-10, -10, -10]} decay={0} intensity={Math.PI} />

      
        <OrbitControls
        autoRotate
          enableZoom={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />
        <Computers/>
    

      <Preload all />

    </Canvas>
  );
};

export default ComputersCanvas;
