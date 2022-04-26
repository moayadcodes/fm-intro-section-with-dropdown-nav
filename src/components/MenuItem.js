import ArrowDownIcon from './ArrowDownIcon';
import ArrowUpIcon from './ArrowUpIcon';
import PropTypes from 'prop-types';
import React from 'react';
import SubMenu from './SubMenu';

function MenuItem(props) {
  const menuItem = props.menuItem;
  const inDesktopMenu = props.context === 'desktop';
  const hasDropdown = menuItem.menuItems ? true : false;
  const dropdownIsActive = props.dropdownIsActive;
  const subMenuAlignment = inDesktopMenu
    ? (props.index === 0 ? 'right' : 'left')
    : null;

  const containerClasses = inDesktopMenu ? 'text-sm tracking-tight relative ml-10 first:ml-0' : null;
  const menuItemClasses = inDesktopMenu ? 'flex items-center py-2' : 'flex items-center py-2';
  const dropdownIconClasses = inDesktopMenu ? 'ml-2' : 'ml-3.5';

  function handleClick(event) {
    event.preventDefault();
    props.onDropdownActivated(props.index);
  }

  return (
    <li className={containerClasses}>
      <a
        className={menuItemClasses}
        href={hasDropdown ? '#' : menuItem.url}
        aria-expanded={hasDropdown ? dropdownIsActive : null}
        {...(hasDropdown && { onClick: handleClick })}
      >
        {menuItem.label}
        {hasDropdown ? (
          !dropdownIsActive
            ? <ArrowDownIcon className={dropdownIconClasses} />
            : <ArrowUpIcon className={dropdownIconClasses} />
        ) : null}
      </a>
      {hasDropdown && dropdownIsActive && (
        <SubMenu
          menuItems={menuItem.menuItems}
          context={props.context}
          alignment={subMenuAlignment}
          isActive={dropdownIsActive}
        />
      )}
    </li>
  );
}

MenuItem.propTypes = {
  context: PropTypes.oneOf(['mobile', 'desktop']),
  dropdownIsActive: PropTypes.bool,
  index: PropTypes.number,
  menuItem: PropTypes.object.isRequired,
  onDropdownActivated: PropTypes.func,
};

MenuItem.defaultProps = {
  context: 'mobile',
  dropdownIsActive: false,
};

export default MenuItem;
