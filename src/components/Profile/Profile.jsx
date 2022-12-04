import React from 'react';
import PropTypes from 'prop-types';

import Stats from './Stats/Stats';
import Description from './Desctiption/Description';

import styles from './Profile.module.css';

const Profile = ({ username, tag, location, avatar, stats }) => {
  return (
    <div className={styles.profile}>
      <Description
        username={username}
        tag={tag}
        avatar={avatar}
        location={location}
      />

      <Stats
        followers={stats.followers}
        views={stats.views}
        likes={stats.likes}
      />
    </div>
  );
};

Profile.propTypes = {
  username: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  stats: PropTypes.shape({
    followers: PropTypes.number.isRequired,
    views: PropTypes.number.isRequired,
    likes: PropTypes.number.isRequired,
  }).isRequired,
};

export default Profile;
