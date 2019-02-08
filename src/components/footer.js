import React from 'react';
import styled from 'styled-components';
import { Flex, Box, Text } from 'rebass';
import Link from './link';
import Github from '../images/github';
import Mail from '../images/mail';
import theme from '../theme';

const StyledFooter = styled(Box).attrs({ mx: 3, pt: 5, as: 'footer' })`
    border-top: 2px solid #efefef;
`;

const IconMail = styled(Mail)`
    position: absolute;
    left: -28px;
    top: 4px;
`;

const IconGithub = styled(Github)`
    position: absolute;
    left: -28px;
    top: 2px;
`;

const IconLink = styled(Link).attrs({ mx: 4, as: 'a', color: 'gravel' })`
    position: relative;
    &:hover {
        ${IconMail}, ${IconGithub} {
            color: ${theme.colors.hitPink};
        }
    }
`;

const Footer = () => (
    <StyledFooter>
        <Flex justifyContent="center">
            <IconLink href="https://github.com/teeerevor/heyguys.wtf">
                <IconGithub alt="Github icon" />
                <Text>Contribute</Text>
            </IconLink>
            <IconLink href="mailto:hey[at]heyguys[dot]wtf">
                <IconMail alt="Mail icon" />
                <Text>hey[at]heyguys[dot]wtf</Text>
            </IconLink>
        </Flex>
    </StyledFooter>
);

export default Footer;
