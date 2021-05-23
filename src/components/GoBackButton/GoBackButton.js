import React from 'react';
import arrow from '../../img/left-arrow.svg';
import PropTypes from 'prop-types';

import styles from './GoBackButton.module.css';

const GoBackButton = ({ handleGoBack }) => (
  <button className={styles.Btn} onClick={handleGoBack} type="button">
    <div>
      <img className={styles.Arrow} src={arrow} alt="Go back arrow" />
    </div>
    <p>Go back</p>
  </button>
);

export default GoBackButton;

GoBackButton.propTypes = {
  handleGoBack: PropTypes.func.isRequired,
};
