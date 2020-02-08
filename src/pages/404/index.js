import React from 'react';

import Layout from '../../components/layout';
import SEO from '../../components/seo';
import LinkButtonMain from '../../components/buttons/link-button-main';

import './style.scss';

const NotFoundPage = () => (
  <Layout>
    <SEO title="404: Not found" />
    <div className="four-o">
      <h1>PAGE NOT FOUND</h1>
      <p>You just hit a route that doesn&#39;t exist... the sadness :(</p>
      <LinkButtonMain to="/" text="Back to Home Page" />
    </div>
  </Layout>
);

export default NotFoundPage;
