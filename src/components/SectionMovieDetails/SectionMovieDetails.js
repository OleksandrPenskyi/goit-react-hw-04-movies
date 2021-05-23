import React from 'react';
import PropTypes from 'prop-types';

const SectionMovieDetails = ({ children }) => <section>{children}</section>;

export default SectionMovieDetails;

SectionMovieDetails.propTypes = {
  children: PropTypes.arrayOf(PropTypes.element),
};
