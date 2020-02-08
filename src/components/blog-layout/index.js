import React from 'react';
import PropTypes from 'prop-types';

import Layout from '../layout';
import Header from '../header';
import HeaderNav from '../header-nav';
import ThemeToggle from '../theme-toggle';

const BlogLayout = ({ children }) => {
  return (
    <Layout>
      <Header>
        <HeaderNav to="/blog" routeTitle="blog" />
        <ThemeToggle />
      </Header>
      {children}
    </Layout>
  );
};

BlogLayout.propTypes = {
  children: PropTypes.node
};

export default BlogLayout;
