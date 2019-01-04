import React from 'react';
import styled from 'styled-components';
import { Box, Text } from 'rebass';
import { shuffle } from 'lodash';

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
    ml: 2,
})`
    list-style-type: circle;
`;

const ListItem = styled(Box).attrs({
    as: 'li',
    pb: 2,
})``;

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
                        <Text as="span" mr={3}>
                            {item}
                        </Text>
                        <Text as="span" fontSize={4}>
                            {emojis[item]}
                        </Text>
                    </ListItem>
                ))}
            </List>
        </Main>
    </Layout>
);
// <Block>Maybe you need something more piratie.</Block>

export default IndexPage;
