import React from 'react';
import PropTypes from 'prop-types';

import FriendListItem from './FriendListItem/FriendListItem';

import styles from './FriendList.module.css';

const FriendList = ({ friends }) => {
  const frendList = friends.map(({ avatar, name, isOnline, id }) => (
    <FriendListItem key={id} avatar={avatar} name={name} isOnline={isOnline} />
  ));

  return <ul className={styles.friendList}>{frendList}</ul>;
};

FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      avatar: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      isOnline: PropTypes.bool.isRequired,
    })
  ).isRequired,
};

export default FriendList;
