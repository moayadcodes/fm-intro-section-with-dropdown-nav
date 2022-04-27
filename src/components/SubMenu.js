import PropTypes from 'prop-types';
import React from 'react';
import * as images from '../images/*.svg';

function SubMenu(props) {
  const inDesktopMenu = props.context === 'desktop';

  let menuClasses = inDesktopMenu
    ? 'bg-white px-4 py-4 rounded-lg shadow-dropdown absolute top-12 z-10'
    : 'py-2 pl-5';

  if (inDesktopMenu) {
    menuClasses += (props.alignment === 'right' ? ' right-0' : ' left-0');
  }

  const menuItemClasses = 'flex items-center hover:text-neutral-900 focus:text-neutral-900' + (
    inDesktopMenu
      ? ' whitespace-nowrap px-2 py-1.5'
      : ' py-2'
  );

  if (!props.isActive) {
    return null;
  }

  return (
    <ul className={menuClasses}>
      {props.menuItems.map(menuItem => (
        <li key={menuItem.label}>
          <a className={menuItemClasses} href={menuItem.url}>
            {menuItem.icon && (
              <span className="w-5 h-5 flex items-center justify-center mr-3.5 mb-1">
                <img className="h-full" src={images[menuItem.icon]} alt="" />
              </span>
            )}
            {menuItem.label}
          </a>
        </li>
      ))}
    </ul>
  );
}

SubMenu.propTypes = {
  alignment: PropTypes.oneOf(['left', 'right']),
  context: PropTypes.oneOf(['mobile', 'desktop']),
  menuItems: PropTypes.array,
  isActive: PropTypes.bool,
};

SubMenu.defaultProps = {
  context: 'mobile',
  isActive: false,
};

export default SubMenu;
