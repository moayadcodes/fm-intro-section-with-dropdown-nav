import ArrowDownIcon from './ArrowDownIcon';
import ArrowUpIcon from './ArrowUpIcon';
import PropTypes from 'prop-types';
import React, { useState } from 'react';

function MobileMenuItem(props) {
  const menuItem = props.menuItem;
  const hasDropdown = menuItem.menuItems ? true : false;

  const [dropdownIsVisible, setDropdownIsVisible] = useState(false);

  function handleClick(event) {
    event.preventDefault();
    setDropdownIsVisible(!dropdownIsVisible);
  }

  return (
    <li>
      <a
        className="flex items-center py-2"
        href={hasDropdown ? '#' : menuItem.url}
        {...(hasDropdown && { onClick: handleClick })}
      >
        {menuItem.label}
        {hasDropdown ? (
          !dropdownIsVisible
            ? <ArrowDownIcon className="ml-3.5" />
            : <ArrowUpIcon className="ml-3.5" />
        ) : null}
      </a>
      {hasDropdown && dropdownIsVisible && (
        <ul className="py-2 pl-5">
          {menuItem.menuItems.map(subMenuItem => (
            <li key={subMenuItem.label}>
              <a className="flex items-center py-2" href={subMenuItem.url}>
                {subMenuItem.icon && (
                  <span className="w-5 h-5 flex items-center justify-center mr-3.5 mb-1">
                    <img className="h-full" src={subMenuItem.icon} alt="" />
                  </span>
                )}
                {subMenuItem.label}
              </a>
            </li>
          ))}
        </ul>
      )}
    </li>
  );
}

MobileMenuItem.propTypes = {
  menuItem: PropTypes.object.isRequired,
};

export default MobileMenuItem;
