import { Canvas } from "@react-three/fiber";
import { OrbitControls, Stars } from "@react-three/drei";
import Planet from "./Planet";

const planets = [
    { name: "Sun", radius: 5, texture: "/textures/sun.jpg", position: [0, 0, 0] },
    { name: "Mercury", radius: 0.5, texture: "/textures/mercury.jpg", position: [10, 0, 0] },
    { name: "Venus", radius: 1.2, texture: "/textures/venus.jpg", position: [15, 0, 0] },
    { name: "Earth", radius: 1.5, texture: "/textures/earth.jpg", position: [20, 0, 0] },
    { name: "Moon", radius: 0.4, texture: "/textures/moon.jpg", position: [21, 0.5, 0] }, // Moon orbits Earth
    { name: "Mars", radius: 1.2, texture: "/textures/mars.jpg", position: [25, 0, 0] },
    { name: "Jupiter", radius: 3, texture: "/textures/jupiter.jpg", position: [35, 0, 0] },
    { name: "Saturn", radius: 2.7, texture: "/textures/saturn.jpg", position: [45, 0, 0] },
    { name: "Uranus", radius: 2, texture: "/textures/uranus.jpg", position: [55, 0, 0] },
    { name: "Neptune", radius: 1.9, texture: "/textures/neptune.jpg", position: [65, 0, 0] },
    { name: "Pluto", radius: 0.6, texture: "/textures/pluto.jpg", position: [75, 0, 0] },
    { name: "Ceres", radius: 0.5, texture: "/textures/ceres.jpg", position: [85, 0, 0] },
    { name: "Eris", radius: 0.7, texture: "/textures/eris.jpg", position: [95, 0, 0] },
    { name: "Haumea", radius: 0.7, texture: "/textures/haumea.jpg", position: [105, 0, 0] },
    { name: "Makemake", radius: 0.7, texture: "/textures/makemake.jpg", position: [115, 0, 0] },
];

export default function SolarSystem() {
    return (
        <Canvas camera={{ position: [0, 20, 70], fov: 45 }}>
            <ambientLight intensity={2} /> {/* Ambient light for overall illumination */}
            <pointLight position={[10, 10, 10]} /> {/* Point light for highlights */}
            <Stars radius={100} depth={50} count={5000} factor={4} saturation={0} fade /> {/* Background stars */}
            {planets.map((planet, index) => (
                <Planet
                    key={index}
                    name={planet.name}
                    radius={planet.radius}
                    texture={planet.texture}
                    position={planet.position}
                />
            ))}
            <OrbitControls /> {/* Enable camera controls */}
        </Canvas>
    );
}