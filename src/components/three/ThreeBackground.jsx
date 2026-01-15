import React, { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Float, Stars } from '@react-three/drei';
import * as THREE from 'three';

// Floating geometric shapes component
const FloatingShapes = () => {
  const meshRef = useRef();
  const shapes = useMemo(() => {
    const temp = [];
    for (let i = 0; i < 50; i++) {
      temp.push({
        position: [
          (Math.random() - 0.5) * 30,
          (Math.random() - 0.5) * 30,
          (Math.random() - 0.5) * 20
        ],
        rotation: [Math.random() * Math.PI, Math.random() * Math.PI, 0],
        scale: Math.random() * 0.5 + 0.1,
        speed: Math.random() * 0.5 + 0.2,
        type: Math.floor(Math.random() * 3)
      });
    }
    return temp;
  }, []);

  return (
    <group ref={meshRef}>
      {shapes.map((shape, i) => (
        <Float
          key={i}
          speed={shape.speed}
          rotationIntensity={0.5}
          floatIntensity={0.5}
        >
          <mesh
            position={shape.position}
            rotation={shape.rotation}
            scale={shape.scale}
          >
            {shape.type === 0 && <boxGeometry args={[1, 1, 1]} />}
            {shape.type === 1 && <octahedronGeometry args={[0.8]} />}
            {shape.type === 2 && <icosahedronGeometry args={[0.6]} />}
            <meshStandardMaterial
              color="#ff6b4a"
              transparent
              opacity={0.15}
              wireframe
            />
          </mesh>
        </Float>
      ))}
    </group>
  );
};

// Animated particles component
const Particles = ({ count = 500 }) => {
  const points = useRef();
  
  const particlesPosition = useMemo(() => {
    const positions = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      positions[i * 3] = (Math.random() - 0.5) * 50;
      positions[i * 3 + 1] = (Math.random() - 0.5) * 50;
      positions[i * 3 + 2] = (Math.random() - 0.5) * 50;
    }
    return positions;
  }, [count]);

  useFrame((state) => {
    if (points.current) {
      points.current.rotation.y = state.clock.elapsedTime * 0.02;
      points.current.rotation.x = state.clock.elapsedTime * 0.01;
    }
  });

  return (
    <points ref={points}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={count}
          array={particlesPosition}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.05}
        color="#ff6b4a"
        transparent
        opacity={0.6}
        sizeAttenuation
      />
    </points>
  );
};

// Connection lines between nearby particles
const ConnectionLines = ({ count = 100 }) => {
  const linesRef = useRef();
  
  const { positions, indices } = useMemo(() => {
    const pos = [];
    const idx = [];
    for (let i = 0; i < count; i++) {
      pos.push(
        (Math.random() - 0.5) * 20,
        (Math.random() - 0.5) * 20,
        (Math.random() - 0.5) * 10
      );
    }
    // Create connections between nearby points
    for (let i = 0; i < count; i++) {
      for (let j = i + 1; j < count; j++) {
        const dx = pos[i * 3] - pos[j * 3];
        const dy = pos[i * 3 + 1] - pos[j * 3 + 1];
        const dz = pos[i * 3 + 2] - pos[j * 3 + 2];
        const dist = Math.sqrt(dx * dx + dy * dy + dz * dz);
        if (dist < 3) {
          idx.push(i, j);
        }
      }
    }
    return { 
      positions: new Float32Array(pos), 
      indices: new Uint16Array(idx) 
    };
  }, [count]);

  useFrame((state) => {
    if (linesRef.current) {
      linesRef.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.1) * 0.1;
    }
  });

  return (
    <lineSegments ref={linesRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={positions.length / 3}
          array={positions}
          itemSize={3}
        />
        <bufferAttribute
          attach="index"
          count={indices.length}
          array={indices}
          itemSize={1}
        />
      </bufferGeometry>
      <lineBasicMaterial color="#ff6b4a" transparent opacity={0.1} />
    </lineSegments>
  );
};

// Main Three.js background component
const ThreeBackground = () => {
  return (
    <div className="three-background">
      <Canvas
        camera={{ position: [0, 0, 15], fov: 60 }}
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          pointerEvents: 'none',
          zIndex: 0
        }}
        gl={{ antialias: true, alpha: true }}
      >
        <color attach="background" args={['#0a0e17']} />
        <fog attach="fog" args={['#0a0e17', 10, 50]} />
        
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} intensity={1} color="#ff6b4a" />
        <pointLight position={[-10, -10, -10]} intensity={0.5} color="#4a9fff" />
        
        <Stars
          radius={50}
          depth={50}
          count={1000}
          factor={3}
          saturation={0}
          fade
          speed={0.5}
        />
        
        <FloatingShapes />
        <Particles count={300} />
        <ConnectionLines count={80} />
      </Canvas>
    </div>
  );
};

export default ThreeBackground;
