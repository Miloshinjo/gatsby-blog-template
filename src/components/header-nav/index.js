import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'gatsby';

import Logo from '../logo';

import './style.scss';

const HeaderNav = ({ to, routeTitle }) => {
  return (
    <div className="header-nav">
      <Logo />
      <Link to={to} activeClassName="link-active">
        / <span>{routeTitle}</span>
      </Link>
    </div>
  );
};

HeaderNav.propTypes = {
  to: PropTypes.string
};

export default HeaderNav;
