import React from 'react';
import PropTypes from 'prop-types';

import styles from './Reviews.module.css';

const Reviews = ({ reviews }) => (
  <ul className={styles.List}>
    {reviews.map(({ author, content, id }) => (
      <li className={styles.Item} key={id}>
        <p className={styles.Title}>Author: {author}</p>
        <p>{content}</p>
      </li>
    ))}
  </ul>
);

export default Reviews;

Reviews.propTypes = {
  reviews: PropTypes.arrayOf(
    PropTypes.shape({
      author: PropTypes.string.isRequired,
      content: PropTypes.string.isRequired,
      id: PropTypes.oneOfType([
        PropTypes.string.isRequired,
        PropTypes.number.isRequired,
      ]),
    }),
  ),
};
