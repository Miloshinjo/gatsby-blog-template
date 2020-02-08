import React from 'react';
import PropTypes from 'prop-types';

import 'typeface-poppins';
import 'typeface-roboto-mono';
import 'typeface-inter';

import './style.scss';

const Layout = ({ children }) => {
  return (
    <>
      <div className="layout">
        <main>{children}</main>
      </div>
    </>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired
};

export default Layout;
