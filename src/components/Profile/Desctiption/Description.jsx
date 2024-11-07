import React from 'react';
import PropTypes from 'prop-types';

import styles from './Description.module.css';

const Description = ({ username, tag, location, avatar }) => {
  return (
    <div className={styles.description}>
      <img src={avatar} alt={`${username} avatar`} className={styles.avatar} />
      <p className={styles.name}>{username}</p>
      <p className={styles.tag}>@{tag}</p>
      <p className={styles.location}>{location}</p>
    </div>
  );
};

Description.propTypes = {
  username: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
};

export default Description;
