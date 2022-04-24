import PropTypes from 'prop-types';
import React from 'react';

function Button(props) {
  return (
    <a
      className="inline-block bg-neutral-900 text-neutral-50 px-6 py-3 rounded-2xl lg:text-xl lg:tracking-tight lg:px-8 lg:py-4"
      href={props.url}
    >
      {props.children}
    </a>
  );
}

Button.propTypes = {
  children: PropTypes.node,
  url: PropTypes.string.isRequired,
};

export default Button;
