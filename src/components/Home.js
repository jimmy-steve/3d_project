import Navbar from './Navbar';
import React from "react";
import styled from "styled-components";
import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";
import { Earth } from "./Earth";

const StyledButtonContainer = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

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
    // Define button positions
    const buttonPositions = [
        { top: "100%", left: "25%" },
        { top: "200%", left: "20%" },
        { top: "300%", left: "15%" },
        { top: "400%", left: "10%" },
    ];

    const handleButtonClick = (index) => {
        // Handle button click action based on the button index
        console.log("Button clicked at index:", index);
    };


    return (
        <Container>
            <StyledNavbar />
            <CanvasContainer>
                <Canvas>
                    <Suspense fallback={null}>
                        <Earth/>
                    </Suspense>
                </Canvas>
            </CanvasContainer>
            {buttonPositions.map((position, index) => (
                <button
                    key={index}
                    className={"btn btn outlined-primary bg-transparent border border-light"}
                    style={{
                        position: "absolute",
                        top: position.top,
                        left: position.left,
                        background: "#3498db",
                        color: "white",
                        border: "none",
                        padding: "10px",
                        cursor: "pointer",
                    }}
                    onClick={() => handleButtonClick(index)}
                >
                    Click me {index + 1}
                </button>
            ))}
        </Container>
    );
}

export default Home;
