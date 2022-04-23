import PropTypes from 'prop-types';
import React from 'react';
import { mergeClasses } from '../helpers';

function IconButton(props) {
  const classes = mergeClasses('p-2', props.className);

  return (
    <button className={classes} type="button" onClick={props.onClick}>
      {props.children}
    </button>
  );
}

IconButton.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  onClick: PropTypes.func,
};

export default IconButton;
