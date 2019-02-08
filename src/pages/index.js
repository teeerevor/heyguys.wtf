import React from 'react';
import styled from 'styled-components';
import { Box, Text } from 'rebass';
import { shuffle } from 'lodash';
import { CopyToClipboard } from 'react-copy-to-clipboard';

import Layout from '../components/layout';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { BodyLink as Link } from '../components/link';
import { Suggestion, SuggestionText, CopyText } from '../components/suggestion';
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

const ListItem = styled(Box).attrs({ as: 'li', pb: 2, pl: 2 })``;

const IndexPage = () => (
    <Layout>
        <SEO title="HeyGuys.wtf!" keywords={[`hey`, `guys`, `what`, `the`, `fuck`]} />
        <Header />
        <Main>
            <Block>Yep sadly &ldquo;Hey Guys&rdquo; is still a thing.</Block>
            <Block>
                People have been writing about how shite “Hey Guys” is
                {' '}
                <Link href="https://www.vox.com/2015/6/11/8761227/you-guys-sexism-language">for</Link>
                {' '}
                <Link href="https://mic.com/articles/115090/guys-can-we-stop-calling-everyone-guys-already#.f00XhU5So">
                    a
                </Link>
                {' '}
                <Link href="https://www.theguardian.com/media/mind-your-language/2016/jun/10/you-dont-like-being-called-guys-come-on-people">
                    while
                </Link>
                {' '}
                <Link href="https://www.theatlantic.com/family/archive/2018/08/guys-gender-neutral/568231/">now</Link>
.
            </Block>
            <Block>So lets change that!</Block>
            <Block>
                Spend 5 seconds to pick another go to term for a group of people and &ldquo;Hey Guys&rdquo; will slowly
                disappear.
            </Block>
            <Block>You won&apos;t even miss it.</Block>
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
