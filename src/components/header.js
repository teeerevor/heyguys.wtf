import React from 'react';
import styled from 'styled-components';
import { Box } from 'rebass';
import logo from '../images/heyguys-white.svg';

const HiddenH1 = styled.h1`
    opacity: 0;
    position: absolute;
    left: -1000px;
`;

const Logo = styled.img`
    width: 60vw;
`;

const StyledHeader = styled(Box).attrs({ py: [5, 6], as: 'header' })`
    margin: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #fbab7e;
    background-image: linear-gradient(62deg, #fbab7e 0%, #f7ce68 100%);
    as: 'header';
`;

const Header = () => (
    <StyledHeader>
        <HiddenH1>Hey Guys WTF</HiddenH1>
        <Logo src={logo} alt="Hey Guys WTF" />
    </StyledHeader>
);

export default Header;
