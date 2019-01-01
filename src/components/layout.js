import React from 'react';
import PropTypes from 'prop-types';
import { StaticQuery, graphql } from 'gatsby';
import styled, { createGlobalStyle, ThemeProvider } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  body {
      margin: 0;
  }
`;
// import Header from './header'
// <Header siteTitle={data.site.siteMetadata.title} />

const Flex = styled.div`
    padding: 0;
    margin: 0;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #fbab7e;
    background-image: linear-gradient(62deg, #fbab7e 0%, #f7ce68 100%);
`;

const Layout = ({ children }) => (
    <StaticQuery
        query={graphql`
            query SiteTitleQuery {
                site {
                    siteMetadata {
                        title
                    }
                }
            }
        `}
        render={data => (
            <ThemeProvider theme={{ fontFamily: 'Helvetica Neue' }}>
                <>
                    <GlobalStyle />
                    <Flex>{children}</Flex>
                </>
            </ThemeProvider>
        )}
    />
);

Layout.propTypes = {
    children: PropTypes.node.isRequired,
};

export default Layout;
