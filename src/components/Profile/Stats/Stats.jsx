import React from 'react';
import PropTypes from 'prop-types';

import StatsItem from './StatsItem/StatsItem';

import styles from './Stats.module.css';

const Stats = ({ followers, views, likes }) => {
  return (
    <ul className={styles.stats}>
      <StatsItem label="Followers" quantity={followers} />
      <StatsItem label="Views" quantity={views} />
      <StatsItem label="Likes" quantity={likes} />
    </ul>
  );
};

Stats.propTypes = {
  followers: PropTypes.number.isRequired,
  views: PropTypes.number.isRequired,
  likes: PropTypes.number.isRequired,
};

export default Stats;
