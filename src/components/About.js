import Navbar from './Navbar';
import React from "react";
import styled from "styled-components";




const StyledNavbar = styled(Navbar)`

`;

function About() {
    return (
        <>
            <StyledNavbar />
            <h1>ABout</h1>
        </>
    );
}

export default About;
