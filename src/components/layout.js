import React from 'react';
import PropTypes from 'prop-types';
import { StaticQuery, graphql } from 'gatsby';
import styled, { createGlobalStyle, ThemeProvider } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  body {
      margin: 0;
      font-size: 20px;
      font-family: 'Avenir Next',Calibri, Candara, Segoe, "Segoe UI", Optima, Arial, sans-serif;
  }
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
                    {children}
                </>
            </ThemeProvider>
        )}
    />
);

Layout.propTypes = {
    children: PropTypes.node.isRequired,
};

export default Layout;
