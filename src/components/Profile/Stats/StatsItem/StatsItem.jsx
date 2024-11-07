import React from 'react';
import PropTypes from 'prop-types';

import styles from './StatsItem.module.css';

const StatsItem = ({ label, quantity }) => {
  return (
    <li className={styles.statsItem}>
      <span className={styles.label}>{label}</span>
      <span className={styles.quantity}>{quantity}</span>
    </li>
  );
};

StatsItem.propTypes = {
  label: PropTypes.string.isRequired,
  quantity: PropTypes.number.isRequired,
};

export default StatsItem;
