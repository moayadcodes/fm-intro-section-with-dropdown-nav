import PropTypes from 'prop-types';
import React from 'react';

function Button(props) {
  let classes = 'border-2 inline-block tracking-tight rounded-[0.875rem] outline-0';
  classes += ' hover:text-neutral-900'; // Base hover styles
  classes += ' focus:text-neutral-900 focus:ring-4 focus:ring-neutral-900/25'; // Base focus styles

  if (props.isCta) {
    classes += ' border-neutral-900 bg-neutral-900 text-neutral-50 px-[1.375rem] hover:bg-transparent focus:bg-transparent';
  } else {
    classes += ' border-neutral-500 px-[1.375rem] hover:border-neutral-900 focus:border-neutral-900';
  }

  if (props.size === 'large') {
    classes += ' py-2.5 lg:text-lg lg:px-[1.875rem] lg:py-3';
  } else {
    classes += ' text-sm py-2';
  }

  return (
    <a className={classes} href={props.url}>
      {props.children}
    </a>
  );
}

Button.propTypes = {
  children: PropTypes.node,
  isCta: PropTypes.bool,
  size: PropTypes.oneOf(['normal', 'large']),
  url: PropTypes.string.isRequired,
};

Button.defaultProps = {
  isCta: false,
  size: 'normal',
};

export default Button;
