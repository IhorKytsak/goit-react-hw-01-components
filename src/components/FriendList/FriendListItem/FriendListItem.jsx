import React from 'react';
import PropTypes from 'prop-types';

import styles from './FriendListItem.module.css';

const FriendListItem = ({ avatar, name, isOnline }) => {
  const currentBg = isOnline ? '#009900' : '#ff0000';

  return (
    <li className={styles.item}>
      <span
        className={styles.status}
        style={{ backgroundColor: currentBg }}
      ></span>
      <img className={styles.avatar} src={avatar} alt={`${name} avatar`} />
      <p className={styles.name}>{name}</p>
    </li>
  );
};

FriendListItem.propTypes = {
  avatar: PropTypes.string,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
};

export default FriendListItem;
