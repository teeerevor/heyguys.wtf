import React from 'react';
import styled from 'styled-components';
import { Flex, Box, Text } from 'rebass';
import { shuffle } from 'lodash';
import { CopyToClipboard } from 'react-copy-to-clipboard';

import Layout from '../components/layout';
import logo from '../images/heyguys-white.svg';
import SEO from '../components/seo';

import { notGuys, emojis } from '../data/lists';

const HiddenH1 = styled.h1`
    opacity: 0;
    position: absolute;
    left: -1000px;
`;

const Logo = styled.img`
    width: 60vw;
`;

const Header = styled(Box).attrs({ py: [5, 6] })`
    margin: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #fbab7e;
    background-image: linear-gradient(62deg, #fbab7e 0%, #f7ce68 100%);
`;

const Main = styled(Box).attrs({
    my: [5, 6],
    mx: [3, 'auto'],
    as: 'main',
    fontSize: [2, 3],
})`
    max-width: 600px;
`;

const Block = styled(Box).attrs({
    mb: 4,
})``;

const List = styled(Box).attrs({
    as: 'ul',
})`
    list-style-type: none;
`;

const CopyText = styled(Text).attrs({
    mr: 2,
    px: 2,
    py: 1,
    bg: '#fbab7e',
    fontSize: '10px',
    fontWeight: 600,
    color: 'white',
})`
    border-radius: 20px;
    position: absolute;
    opacity: 0;
    transition: all 0.2s ease-in 0.1s;
    left: -60px;
    top: 6px;
`;

const SuggestionText = styled(Text).attrs({})``;

const Suggestion = styled(Flex).attrs({ alignItems: 'center' })`
    position: relative;
    transition: all 0.2s ease-in;
    &:hover {
        transform: translateX(48px);
        cursor: pointer;
        ${SuggestionText} {
            background-image: linear-gradient(to right, #fbab7e 75%, transparent 75%);
            background-position: 0 1.06em;
            background-repeat: repeat-x;
            background-size: 8px 2px;
        }
        ${CopyText} {
            opacity: 1;
            transform: translateX(10px);
        }
    }
`;

const ListItem = styled(Box).attrs({ as: 'li', pb: 2, pl: 2 })``;

const IndexPage = () => (
    <Layout>
        <SEO title="HeyGuys.wtf!" keywords={[`hey`, `guys`, `what`, `the`, `fuck`]} />
        <Header>
            <HiddenH1>Hey Guys WTF</HiddenH1>
            <Logo src={logo} alt="Hey Guys WTF" />
        </Header>
        <Main>
            <Block>
                Seriously, spend 5 seconds to pick another go to term for a group of individuals and &ldquo;Hey
                Guys&rdquo; will slowly disappear. You won&apos;t even miss it.
            </Block>
            <Block>Here is a handy list I prepared earlier.</Block>
            <List>
                {shuffle(notGuys).map(item => (
                    <ListItem key={item}>
                        <Suggestion>
                            <CopyToClipboard text={item}>
                                <span>
                                    <CopyText>COPY</CopyText>
                                    <SuggestionText>{item}</SuggestionText>
                                </span>
                            </CopyToClipboard>
                            <Text fontSize={4} ml={3}>
                                {emojis[item]}
                            </Text>
                        </Suggestion>
                    </ListItem>
                ))}
            </List>
        </Main>
    </Layout>
);
// <Block>Maybe you need something more piratie.</Block>

export default IndexPage;
