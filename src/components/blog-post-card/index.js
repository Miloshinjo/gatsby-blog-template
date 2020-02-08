import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'gatsby';

import './style.scss';

const BlogPostCard = ({ title, shortDescription, date, to }) => {
  return (
    <div className="blog-post-card">
      <small className="blog-post-card__date">{date}</small>

      <Link to={to}>
        <h2>{title}</h2>
      </Link>

      <p>{shortDescription}</p>
    </div>
  );
};

BlogPostCard.propTypes = {
  title: PropTypes.string,
  shortDescription: PropTypes.string,
  date: PropTypes.string
};

export default BlogPostCard;
