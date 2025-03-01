// components/Planet.tsx
import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

interface PlanetProps {
  name: string;
  radius: number;
  texture: string;
  position: [number, number, number];
}

export default function Planet({ name, radius, texture, position }: PlanetProps) {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame(() => {
    if (meshRef.current) {
      meshRef.current.rotation.y += 0.01; // Rotate the planet
    }
  });

  return (
    <mesh ref={meshRef} position={position}>
      <sphereGeometry args={[radius, 32, 32]} />
      <meshStandardMaterial map={new THREE.TextureLoader().load(texture)} />
    </mesh>
  );
}