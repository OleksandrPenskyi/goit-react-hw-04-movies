import React from 'react';
import arrow from '../../img/left-arrow.svg';

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
