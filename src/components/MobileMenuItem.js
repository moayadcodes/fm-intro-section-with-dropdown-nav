import ArrowDownIcon from './ArrowDownIcon';
import ArrowUpIcon from './ArrowUpIcon';
import PropTypes from 'prop-types';
import React, { useState } from 'react';
import SubMenu from './SubMenu';

function MenuItem(props) {
  const menuItem = props.menuItem;
  const hasDropdown = menuItem.menuItems ? true : false;
  const inDesktopMenu = props.context === 'desktop';
  const subMenuAlignment = inDesktopMenu
    ? (props.index === 0 ? 'right' : 'left')
    : null;

  const containerClasses = inDesktopMenu ? 'text-sm tracking-tight relative ml-10 first:ml-0' : null;
  const menuItemClasses = inDesktopMenu ? 'flex items-center py-2' : 'flex items-center py-2';
  const dropdownIconClasses = inDesktopMenu ? 'ml-2' : 'ml-3.5';

  const [dropdownIsVisible, setDropdownIsVisible] = useState(false);

  function handleClick(event) {
    event.preventDefault();
    setDropdownIsVisible(!dropdownIsVisible);
  }

  return (
    <li className={containerClasses}>
      <a
        className={menuItemClasses}
        href={hasDropdown ? '#' : menuItem.url}
        {...(hasDropdown && { onClick: handleClick })}
      >
        {menuItem.label}
        {hasDropdown ? (
          !dropdownIsVisible
            ? <ArrowDownIcon className={dropdownIconClasses} />
            : <ArrowUpIcon className={dropdownIconClasses} />
        ) : null}
      </a>
      {hasDropdown && dropdownIsVisible && (
        <SubMenu
          menuItems={menuItem.menuItems}
          context={props.context}
          alignment={subMenuAlignment}
        />
      )}
    </li>
  );
}

MenuItem.propTypes = {
  context: PropTypes.oneOf(['mobile', 'desktop']),
  index: PropTypes.number,
  menuItem: PropTypes.object.isRequired,
};

MenuItem.defaultProps = {
  context: 'mobile',
};

export default MenuItem;
