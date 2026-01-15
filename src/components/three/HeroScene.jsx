import React, { useRef, useState, useEffect } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Float, MeshDistortMaterial, Environment } from '@react-three/drei';
import * as THREE from 'three';

// 3D House Model Component
const HouseModel = () => {
  const groupRef = useRef();
  const [hovered, setHovered] = useState(false);

  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.3) * 0.2;
    }
  });

  return (
    <Float speed={1} rotationIntensity={0.2} floatIntensity={0.3}>
      <group
        ref={groupRef}
        onPointerOver={() => setHovered(true)}
        onPointerOut={() => setHovered(false)}
        scale={hovered ? 1.05 : 1}
      >
        {/* Base/Foundation */}
        <mesh position={[0, -0.5, 0]}>
          <boxGeometry args={[3, 0.2, 2.5]} />
          <meshStandardMaterial color="#2a2a3a" />
        </mesh>

        {/* Main Building */}
        <mesh position={[0, 0.5, 0]}>
          <boxGeometry args={[2.5, 1.8, 2]} />
          <meshStandardMaterial color="#e8e8e8" />
        </mesh>

        {/* Roof */}
        <mesh position={[0, 1.9, 0]} rotation={[0, Math.PI / 4, 0]}>
          <coneGeometry args={[2, 1, 4]} />
          <meshStandardMaterial color="#ff6b4a" />
        </mesh>

        {/* Door */}
        <mesh position={[0, 0.2, 1.01]}>
          <boxGeometry args={[0.5, 0.8, 0.1]} />
          <meshStandardMaterial color="#4a3728" />
        </mesh>

        {/* Windows */}
        <mesh position={[-0.7, 0.7, 1.01]}>
          <boxGeometry args={[0.4, 0.4, 0.05]} />
          <meshStandardMaterial color="#6bb3ff" transparent opacity={0.8} />
        </mesh>
        <mesh position={[0.7, 0.7, 1.01]}>
          <boxGeometry args={[0.4, 0.4, 0.05]} />
          <meshStandardMaterial color="#6bb3ff" transparent opacity={0.8} />
        </mesh>

        {/* Chimney */}
        <mesh position={[0.8, 2.2, -0.5]}>
          <boxGeometry args={[0.3, 0.6, 0.3]} />
          <meshStandardMaterial color="#8b4513" />
        </mesh>

        {/* Garden/Grass */}
        <mesh position={[0, -0.65, 0]}>
          <cylinderGeometry args={[2.5, 2.5, 0.1, 32]} />
          <meshStandardMaterial color="#4a7c4e" />
        </mesh>
      </group>
    </Float>
  );
};

// Floating property cards in 3D
const FloatingCard = ({ position, delay = 0 }) => {
  const meshRef = useRef();
  const [time, setTime] = useState(0);

  useFrame((state) => {
    if (meshRef.current) {
      const t = state.clock.elapsedTime + delay;
      meshRef.current.position.y = position[1] + Math.sin(t * 0.8) * 0.2;
      meshRef.current.rotation.y = Math.sin(t * 0.5) * 0.1;
    }
  });

  return (
    <mesh ref={meshRef} position={position}>
      <boxGeometry args={[1.2, 0.8, 0.05]} />
      <meshStandardMaterial
        color="#ffffff"
        transparent
        opacity={0.1}
        side={THREE.DoubleSide}
      />
    </mesh>
  );
};

// Glowing orbs around the scene
const GlowingOrbs = () => {
  const orbs = [
    { position: [-4, 2, -2], color: '#ff6b4a', scale: 0.3 },
    { position: [4, 1, -3], color: '#4a9fff', scale: 0.2 },
    { position: [-3, -1, 1], color: '#9b4aff', scale: 0.25 },
    { position: [3, 3, -1], color: '#ff6b4a', scale: 0.15 },
  ];

  return (
    <>
      {orbs.map((orb, i) => (
        <Float key={i} speed={2} rotationIntensity={0} floatIntensity={0.5}>
          <mesh position={orb.position} scale={orb.scale}>
            <sphereGeometry args={[1, 32, 32]} />
            <MeshDistortMaterial
              color={orb.color}
              transparent
              opacity={0.6}
              distort={0.3}
              speed={2}
            />
          </mesh>
          <pointLight
            position={orb.position}
            color={orb.color}
            intensity={0.5}
            distance={5}
          />
        </Float>
      ))}
    </>
  );
};

// Main Hero 3D Scene
const HeroScene = () => {
  return (
    <div className="hero-3d-scene">
      <Canvas
        camera={{ position: [0, 2, 8], fov: 45 }}
        style={{
          width: '100%',
          height: '100%'
        }}
        gl={{ antialias: true, alpha: true }}
      >
        <color attach="background" args={['transparent']} />
        <fog attach="fog" args={['#0a0e17', 8, 25]} />
        
        <ambientLight intensity={0.4} />
        <directionalLight position={[5, 5, 5]} intensity={1} color="#ffffff" />
        <pointLight position={[-5, 5, -5]} intensity={0.5} color="#ff6b4a" />
        
        <HouseModel />
        <GlowingOrbs />
        
        <FloatingCard position={[-3, 0.5, 2]} delay={0} />
        <FloatingCard position={[3, 1, 1.5]} delay={1} />
        <FloatingCard position={[-2, -0.5, 3]} delay={2} />
        
        <OrbitControls
          enableZoom={false}
          enablePan={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 4}
          autoRotate
          autoRotateSpeed={0.5}
        />
      </Canvas>
    </div>
  );
};

export default HeroScene;
