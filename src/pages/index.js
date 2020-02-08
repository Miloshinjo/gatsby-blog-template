import React from 'react';
import { OutboundLink } from 'gatsby-plugin-google-gtag';
import LogoTwitter from 'react-ionicons/lib/LogoTwitter';
import LogoLinkedin from 'react-ionicons/lib/LogoLinkedin';
import LogoGithub from 'react-ionicons/lib/LogoGithub';

import Layout from '../components/layout';
import SEO from '../components/seo';
import ThemeToggle from '../components/theme-toggle';
import Header from '../components/header';
import Logo from '../components/logo';
import LinkButtonMain from '../components/buttons/link-button-main';

import './style.scss';

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />

    <div className="home-page">
      <Header>
        <Logo />
        <ThemeToggle />
      </Header>
      <h1>
        Hi, my name is <span>[NAME]</span>. <br /> I am a [TRUE CALLING].
      </h1>
      <div className="home-page__buttons">
        <LinkButtonMain text="Blog" to="/blog" />
      </div>
      {/* <h3>miloshdz@gmail.com</h3> */}
      <div className="home-page__social-icons">
        <OutboundLink aria-label="Visit my Twitter" href="https://twitter.com/">
          <LogoTwitter />
        </OutboundLink>
        <OutboundLink
          href="https://www.linkedin.com/"
          aria-label="Visit my Linkedin"
        >
          <LogoLinkedin alt="linkedin" />
        </OutboundLink>
      </div>
    </div>
  </Layout>
);

export default IndexPage;
