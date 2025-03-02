import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { Text } from "@react-three/drei";
import * as THREE from "three";

interface PlanetProps {
    name: string;
    radius: number;
    texture: string;
    position: [number, number, number];
    onClick: () => void;
}

export default function Planet({ name, radius, texture, position, onClick }: PlanetProps) {
    const meshRef = useRef<THREE.Mesh>(null);

    useFrame(() => {
        if (meshRef.current) {
            meshRef.current.rotation.y += 0.01; // Rotate the planet
        }
    });

    return (
        <group position={position}>
            <mesh ref={meshRef} onClick={onClick}>
                <sphereGeometry args={[radius, 32, 32]} />
                <meshStandardMaterial map={new THREE.TextureLoader().load(texture)} />
            </mesh>
            {/* Add text label above the planet */}
            <Text position={[0, radius + 1, 0]} fontSize={radius * 0.5} color="white">
                {name}
            </Text>
        </group>
    );
}