"use client";

import { useRef, useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { MeshDistortMaterial, Float, ContactShadows, Environment } from "@react-three/drei";
import * as THREE from "three";

function RobotCore() {
  const meshRef = useRef<THREE.Mesh>(null);
  const [hovered, setHovered] = useState(false);

  // Animate the core to look at the mouse
  useFrame((state) => {
    if (meshRef.current) {
      const t = state.clock.getElapsedTime();
      
      // Mouse tracking
      const targetX = (state.pointer.x * 2);
      const targetY = (state.pointer.y * 2);
      
      meshRef.current.position.x = THREE.MathUtils.lerp(meshRef.current.position.x, targetX, 0.05);
      meshRef.current.position.y = THREE.MathUtils.lerp(meshRef.current.position.y, targetY, 0.05);
      
      // Pulse scale when hovered
      const scale = hovered ? 1.2 + Math.sin(t * 5) * 0.05 : 1 + Math.sin(t * 2) * 0.02;
      meshRef.current.scale.setScalar(THREE.MathUtils.lerp(meshRef.current.scale.x, scale, 0.1));
    }
  });

  return (
    <Float speed={2} rotationIntensity={0.5} floatIntensity={1}>
      <mesh
        ref={meshRef}
        onPointerOver={() => setHovered(true)}
        onPointerOut={() => setHovered(false)}
      >
        <sphereGeometry args={[1.5, 64, 64]} />
        <MeshDistortMaterial
          color={hovered ? "#4bc0c8" : "#f0f4f8"}
          emissive={hovered ? "#2563eb" : "#4bc0c8"}
          emissiveIntensity={hovered ? 0.8 : 0.4}
          envMapIntensity={2}
          clearcoat={1}
          clearcoatRoughness={0.1}
          metalness={0.9}
          roughness={0.1}
          distort={hovered ? 0.4 : 0.2}
          speed={hovered ? 4 : 2}
        />
        
        {/* Orbital rings */}
        <mesh rotation-x={Math.PI / 2}>
          <torusGeometry args={[2.2, 0.02, 16, 100]} />
          <meshStandardMaterial color="#2563eb" emissive="#2563eb" emissiveIntensity={2} />
        </mesh>
        
        <mesh rotation-y={Math.PI / 3} rotation-x={Math.PI / 4}>
          <torusGeometry args={[2.6, 0.01, 16, 100]} />
          <meshStandardMaterial color="#4bc0c8" emissive="#4bc0c8" emissiveIntensity={1} />
        </mesh>
      </mesh>
    </Float>
  );
}

export default function InteractiveRobot() {
  return (
    <div className="w-full h-[400px] md:h-[600px] relative z-20 cursor-pointer">
      <Canvas camera={{ position: [0, 0, 8], fov: 45 }} dpr={[1, 1.5]}>
        <ambientLight intensity={0.5} />
        <directionalLight position={[10, 10, 5]} intensity={2} color="#ffffff" />
        <pointLight position={[-10, -10, -5]} intensity={1} color="#4bc0c8" />
        
        <RobotCore />
        
        <Environment preset="studio" />
        <ContactShadows position={[0, -3.5, 0]} opacity={0.4} scale={20} blur={2} far={4} />
      </Canvas>
    </div>
  );
}
