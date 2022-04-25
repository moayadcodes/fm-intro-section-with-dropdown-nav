import PropTypes from 'prop-types';
import React from 'react';

function Button(props) {
  let classes = 'inline-block tracking-tight';

  if (props.isCta) {
    classes += ' bg-neutral-900 text-neutral-50 px-6 rounded-2xl';
  } else {
    classes += ' border-2 border-neutral-500 px-[1.375rem] rounded-[0.875rem]';
  }

  if (props.size === 'large') {
    classes += ' py-3 lg:text-lg lg:px-8 lg:py-3.5';
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
