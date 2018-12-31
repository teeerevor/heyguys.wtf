import React from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'

import Layout from '../components/layout'
import Image from '../components/image'
import logo from '../images/heyguys-white.svg'
import SEO from '../components/seo'

const HiddenH1 = styled.h1`
    opacity: 0;
    position: absolute;
    left: -1000px;
`;

const Logo = styled.img`
    width: 75vw;
`;

const IndexPage = () => (
  <Layout>
    <SEO title="Hey Guys WTF" keywords={[`hey`, `guys`, `what`, `the`, `fuck`]} />
    <HiddenH1>Hey Guys WTF</HiddenH1>
    <Logo src={logo} alt="Hey Guys WTF" />
  </Layout>
)

export default IndexPage
