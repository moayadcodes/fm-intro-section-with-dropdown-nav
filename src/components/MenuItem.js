import ArrowDownIcon from './ArrowDownIcon';
import ArrowUpIcon from './ArrowUpIcon';
import PropTypes from 'prop-types';
import React, { createRef, useEffect } from 'react';
import SubMenu from './SubMenu';
import { cssClasses } from '../helpers';

function MenuItem(props) {
  const containerRef = createRef();
  const menuItem = props.menuItem;
  const inDesktopMenu = props.context === 'desktop';
  const hasDropdown = menuItem.menuItems ? true : false;
  const dropdownIsActive = hasDropdown && props.dropdownIsActive;
  const subMenuAlignment = inDesktopMenu
    ? (props.index === 0 ? 'right' : 'left')
    : null;

  // CSS classes
  const containerClasses = cssClasses({ 'text-sm tracking-tight relative ml-6 first:ml-0': inDesktopMenu });
  const menuItemClasses = cssClasses({
    'menu-item flex items-center py-2': true,
    'px-2': inDesktopMenu,
    'text-neutral-900': dropdownIsActive,
  });
  const dropdownIconClasses = cssClasses({
    'ml-2': inDesktopMenu,
    'ml-3.5': !inDesktopMenu,
  });

  // Deactivate dropdown on esc key press or outside click
  useEffect(() => {
    if (inDesktopMenu && dropdownIsActive) {
      document.addEventListener('keyup', handleKeyUp);
      document.addEventListener('click', handleDocumentClick);
  
      return () => {
        document.removeEventListener('keyup', handleKeyUp);
        document.removeEventListener('click', handleDocumentClick);
      };
    }
  });

  /* Helpers */

  function handleClick(event) {
    event.preventDefault();
    props.onDropdownActivated(props.index);
  }

  function handleKeyUp(event) {
    if (event.key === 'Escape') {
      props.onDropdownDeactivated();
    }
  }

  function handleDocumentClick(event) {
    if (event.target !== containerRef.current && !containerRef.current.contains(event.target)) {
      props.onDropdownDeactivated();
    }
  }

  return (
    <li className={containerClasses} ref={containerRef}>
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
  onDropdownDeactivated: PropTypes.func,
};

MenuItem.defaultProps = {
  context: 'mobile',
  dropdownIsActive: false,
};

export default MenuItem;
