import Navbar from './Navbar';
import React from "react";
import styled from "styled-components";
import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";
import { Earth } from "./Earth";

const CanvasContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
`;

const Container = styled.div`
  position: relative;
`;

const StyledNavbar = styled(Navbar)`

`;

function Home() {
    return (
        <Container>
            <StyledNavbar />
            <h1>Home</h1>
            <CanvasContainer>
                <Canvas>
                    <Suspense fallback={null}>
                        <Earth />
                    </Suspense>
                </Canvas>
            </CanvasContainer>
        </Container>
    );
}

export default Home;
