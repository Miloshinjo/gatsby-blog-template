import React from 'react';
import { TwitterShareButton } from 'react-share';
import LogoTwitter from 'react-ionicons/lib/LogoTwitter';

import './style.scss';

const Share = ({ shareUrl, title, author }) => {
  return (
    <TwitterShareButton
      className="share"
      url={shareUrl}
      title={title}
      via={author}
    >
      <LogoTwitter /> Share if it helped
    </TwitterShareButton>
  );
};

Share.propTypes = {};

export default Share;
