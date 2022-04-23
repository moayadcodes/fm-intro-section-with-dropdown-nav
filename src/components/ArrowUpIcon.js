import PropTypes from 'prop-types';
import React from 'react';
import { mergeClasses } from '../helpers';

function ArrowUpIcon(props) {
  const classes = mergeClasses('stroke-current', props.className);

  return (
    <svg width="10" height="6" xmlns="http://www.w3.org/2000/svg" className={classes}>
      <path strokeWidth="1.5" fill="none" d="m1 5 4-4 4 4"/>
    </svg>
  );
}

ArrowUpIcon.propTypes = {
  className: PropTypes.string,
};

export default ArrowUpIcon;
