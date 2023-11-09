import React from 'react';

export default function Box() {
        return (
            <mesh>
                <boxBufferGeometry attach="geometry" />
                <meshNormalMaterial attach="material" />
            </mesh>
        );

}


