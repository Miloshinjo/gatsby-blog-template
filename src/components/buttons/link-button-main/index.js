import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'gatsby';

import './style.scss';

const LinkButtonMain = ({ text, to }) => {
  return (
    <Link to={to} className="link-button-main">
      {text}
    </Link>
  );
};

LinkButtonMain.propTypes = {
  text: PropTypes.string,
  to: PropTypes.string
};

export default LinkButtonMain;
