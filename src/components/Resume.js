import Navbar from './Navbar';
import React from "react";
import styled from "styled-components";




const StyledNavbar = styled(Navbar)`

`;

function Resume() {
    return (
            <>
                <StyledNavbar />
                <h1>Resume</h1>
            </>
    );
}

export default Resume;
