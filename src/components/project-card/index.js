import React from 'react';
import PropTypes from 'prop-types';
import Img from 'gatsby-image';
import { OutboundLink } from 'gatsby-plugin-google-gtag';

import IosArrowForward from 'react-ionicons/lib/IosArrowForward';

import './style.scss';

const ProjectCard = ({ fluid, title, description, roles, tech, link }) => {
  return (
    <div className="project-card">
      <div>
        <h2>{title}</h2>
        <small>
          {roles.map(role => (
            <span key={role}>{role}</span>
          ))}
          {tech.map(role => (
            <span className="project-card__tech" key={role}>
              {role}
            </span>
          ))}
        </small>
        <div className="project-card__description">{description}</div>
        <OutboundLink
          className="project-card__link"
          href={link}
          aria-label={`Visit ${title}`}
        >
          Go to website <IosArrowForward />
        </OutboundLink>
      </div>
      <div>
        <OutboundLink
          className="project-card__image"
          href={link}
          aria-label={`Visit ${title}`}
        >
          <Img fluid={fluid} alt={title} />
        </OutboundLink>
      </div>
    </div>
  );
};

ProjectCard.propTypes = {
  fluid: PropTypes.object,
  title: PropTypes.string,
  descrption: PropTypes.string,
  roles: PropTypes.array,
  tech: PropTypes.array,
  link: PropTypes.string
};

export default ProjectCard;
