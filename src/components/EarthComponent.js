import React from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Sphere, Plane } from '@react-three/drei';
import Navbar from './Navbar';

const EarthComponent = () => {
    return (
        <>
            <Navbar />
            <div className="container-fluid">
                <div className="row mt-2" style={{ height: '100vh' }}>
                    <div className="col d-flex align-items-center justify-content-center">
                        <Canvas>
                            <OrbitControls />
                            <ambientLight intensity={0.5} />
                            <pointLight position={[10, 10, 10]} />
                            <Sphere args={[3, 32, 32]}>
                                <meshPhongMaterial attach="material" color="#3388ff" />
                            </Sphere>

                            <Plane position={[0, 0, -3]} rotation={[-Math.PI / 2, 0, 0]} args={[6, 6]}>
                                <meshPhongMaterial attach="material" color="#FF0000" />
                            </Plane>
                        </Canvas>
                    </div>
                </div>
            </div>
        </>
    );
};

export default EarthComponent;



// coast_sand_rocks_02_diff_4k.jpg