import PropTypes from 'prop-types';
import React from 'react';

function IconButton(props) {
  const defaultClasses = 'p-2';
  const classes = props.className ? defaultClasses + ` ${props.className}` : defaultClasses;

  return (
    <button className={classes} type="button">
      {props.children}
    </button>
  );
}

IconButton.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
};

export default IconButton;
