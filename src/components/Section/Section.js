import React from 'react';
import PropTypes from 'prop-types';

import styles from './Section.module.css';

const Section = ({ title, children }) => (
  <section>
    {title && <h2 className={styles.Title}>{title}</h2>}
    {children}
  </section>
);

export default Section;

Section.defaultProps = {
  title: null,
};

Section.propTypes = {
  title: PropTypes.string,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.element).isRequired,
    PropTypes.element.isRequired,
  ]),
};
