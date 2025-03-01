import { useState, useEffect } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Stars } from "@react-three/drei";
import Planet from "./Planet";

export default function SolarSystem() {
    const [planets, setPlanets] = useState([]);
    const [selectedPlanet, setSelectedPlanet] = useState(null);
    const [loading, setLoading] = useState(true);

    // Fetch planet data from public/data/planets.json
    useEffect(() => {
        fetch("/data/planets.json")
            .then((response) => response.json())
            .then((data) => {
                setPlanets(data);
                setLoading(false);
            })
            .catch((error) => {
                console.error("Error loading planet data:", error);
                setLoading(false);
            });
    }, []);

    const handlePlanetClick = (planet) => {
        setSelectedPlanet(planet);
    };

    return (
        <>
            <Canvas camera={{ position: [0, 20, 70], fov: 45 }}>
                <ambientLight intensity={0.5} />
                <pointLight position={[10, 10, 10]} />
                <Stars radius={100} depth={50} count={5000} factor={4} saturation={0} fade />
                {!loading && planets.map((planet, index) => (
                    <Planet
                        key={index}
                        name={planet.name}
                        radius={planet.radius}
                        texture={planet.texture}
                        position={planet.position}
                        onClick={() => handlePlanetClick(planet)}
                    />
                ))}
                <OrbitControls />
            </Canvas>

            {/* Display planet details */}
            {selectedPlanet && (
                <div
                    style={{
                        position: "absolute",
                        top: 20,
                        left: 20,
                        color: "white",
                        backgroundColor: "rgba(0, 0, 0, 0.7)",
                        padding: "10px",
                        borderRadius: "5px",
                        maxWidth: "300px",
                    }}
                >
                    <h2>{selectedPlanet.name}</h2>
                    <ul>
                        <li><strong>Diameter:</strong> {selectedPlanet.details.diameter}</li>
                        <li><strong>Temperature:</strong> {selectedPlanet.details.temperature}</li>
                        <li><strong>Composition:</strong> {selectedPlanet.details.composition}</li>
                        <li><strong>Nickname:</strong> {selectedPlanet.details.nickname}</li>
                        <li><strong>Color:</strong> {selectedPlanet.details.color}</li>
                        <li><strong>Moons:</strong> {selectedPlanet.details.moons}</li>
                        <li><strong>Rotation Period:</strong> {selectedPlanet.details.rotationPeriod}</li>
                        <li><strong>Orbital Period:</strong> {selectedPlanet.details.orbitalPeriod}</li>
                        <li><strong>Fun Fact:</strong> {selectedPlanet.details.funFact}</li>
                    </ul>
                    <button onClick={() => setSelectedPlanet(null)}>Close</button>
                </div>
            )}

            {/* Loading spinner */}
            {loading && (
                <div
                    style={{
                        position: "absolute",
                        top: "50%",
                        left: "50%",
                        transform: "translate(-50%, -50%)",
                        color: "white",
                        fontSize: "24px",
                    }}
                >
                    Loading...
                </div>
            )}
        </>
    );
}