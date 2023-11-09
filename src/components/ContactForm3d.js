import React from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Text } from '@react-three/drei';
import Navbar from './Navbar';

const ContactForm3d = () => {
    return (
        <>
            <Navbar />
            <div className="bg-white" style={{ width: '100%', height: '400px' }}>
                <Canvas>
                    <ambientLight intensity={0.5} />
                    <pointLight position={[10, 10, 10]} />
                    <OrbitControls />

                    <Text position={[0, 0, 0]} rotation={[0, Math.PI / 4, 0]} fontSize={2}>
                        <meshPhongMaterial attach="material" color="blue" />
                        Super 3D
                    </Text>
                </Canvas>
            </div>
        </>
    );
};

export default ContactForm3d;
