import React from 'react';
import PropTypes from 'prop-types';

import styles from './StatisticItem.module.css';

const StatisticItem = ({ label, percentage, bgColor }) => {
  return (
    <li className={styles.statisticItem} style={{ backgroundColor: bgColor }}>
      <span className={styles.label}>{label}</span>
      <span className={styles.percentage}>{percentage}%</span>
    </li>
  );
};

StatisticItem.propTypes = {
  label: PropTypes.string.isRequired,
  percentage: PropTypes.number.isRequired,
  bgColor: PropTypes.string.isRequired,
};

export default StatisticItem;
