import React from 'react';
import styled from 'styled-components';
import { Flex, Box, Text } from 'rebass';
import { shuffle } from 'lodash';
import { CopyToClipboard } from 'react-copy-to-clipboard';

import Layout from '../components/layout';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { linkTextUnderline } from '../components/link';
import SEO from '../components/seo';

import { notGuys, emojis } from '../data/lists';

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

const SuggestionText = styled(Text)``;
const Suggestion = styled(Flex).attrs({ alignItems: 'center' })`
    position: relative;
    transition: all 0.2s ease-in;
    &:hover {
        transform: translateX(48px);
        cursor: pointer;
        ${SuggestionText} {
            ${linkTextUnderline}
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
        <Header />
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
        <Footer />
    </Layout>
);
// <Block>Maybe you need something more piratie.</Block>

export default IndexPage;
