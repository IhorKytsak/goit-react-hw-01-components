import React from 'react';
import PropTypes from 'prop-types';

import StatisticItem from './StatisticItem/StatisticItem';
import { getRandomColor } from '../../helpers/randomColor';

import styles from './Statistics.module.css';

const Statistics = ({ title, stats }) => {
  const statList = stats.map(item => (
    <StatisticItem
      key={item.id}
      label={item.label}
      percentage={item.percentage}
      bgColor={getRandomColor()}
    />
  ));

  return (
    <section className={styles.statistics}>
      {title && <h2 className={styles.title}>{title}</h2>}

      <ul className={styles.statList}>{statList}</ul>
    </section>
  );
};

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    })
  ).isRequired,
};

export default Statistics;
