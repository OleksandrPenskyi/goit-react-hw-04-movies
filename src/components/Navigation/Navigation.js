import React from 'react';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';

import styles from './Navigation.module.css';

const Navigation = ({ pages }) => (
  <div className={styles.Navigation__wrapper}>
    <ul className={styles.NavList}>
      {pages.map(({ name, link }) => (
        <li className={styles.Menu__item} key={name}>
          <NavLink
            exact={name === 'Home' ? true : false}
            to={link}
            className={styles.Menu__link}
            activeClassName={styles.Menu__link__active}
          >
            {name}
          </NavLink>
        </li>
      ))}
    </ul>
  </div>
);

export default Navigation;

Navigation.propTypes = {
  pages: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,

      link: PropTypes.oneOfType([
        PropTypes.string.isRequired,
        PropTypes.shape({
          pathname: PropTypes.string.isRequired,
          state: PropTypes.shape({
            from: PropTypes.object.isRequired,
          }).isRequired,
        }).isRequired,
      ]),
    }),
  ),
};
