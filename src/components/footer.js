import React from 'react';
import styled from 'styled-components';
import { Flex, Box, Text } from 'rebass';
import Link from './link';
import github from '../images/github.svg';
import mail from '../images/mail.svg';
import theme from '../theme';

const StyledFooter = styled(Box).attrs({ mx: 3, pt: 5, as: 'footer' })`
    border-top: 2px solid #efefef;
`;

const IconLink = styled(Link).attrs({ mx: 3, as: 'a', color: 'gravel' })`
    display: flex;

    &:hover {
        img {
            fill: ${theme.colors.hitPink};
        }
    }
`;

const Footer = () => (
    <StyledFooter>
        <Flex justifyContent="center">
            <IconLink href="https://github.com/teeerevor/heyguys.wtf">
                <img src={github} alt="Github icon" />
                <Text ml={2}>Github</Text>
            </IconLink>
            <IconLink href="mailto:hey[at]heyguys[dot]wtf">
                <img src={mail} alt="email icon" />
                <Text ml={2}>hey[at]heyguys[dot]wtf</Text>
            </IconLink>
        </Flex>
    </StyledFooter>
);

export default Footer;
