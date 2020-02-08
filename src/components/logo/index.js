import React from 'react';
import { Link } from 'gatsby';

import './style.scss';

const Logo = () => {
  return (
    <Link className="logo" to="/">
      {'{'}
      <span>...</span>
      {'}'}
    </Link>
  );
};

export default Logo;
