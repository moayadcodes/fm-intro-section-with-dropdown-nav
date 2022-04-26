import IconButton from './IconButton';
import FocusTrap from 'focus-trap-react';
import PropTypes from 'prop-types';
import React, { useCallback, useEffect, useState } from 'react';
import MenuItem from './MenuItem';
import debounce from 'lodash.debounce';
import * as menuItems from '../menu.json';

function MobileMenu(props) {
  const menuCloseIconUrl = new URL('../images/icon-close-menu.svg', import.meta.url);

  // TODO: Refactor - repeated from DesktopMenu
  const [indexWithActiveDropdown, setIndexWithActiveDropdown] = useState(null);

  function handleDropdownActivated(index) {
    if (index === indexWithActiveDropdown) {
      setIndexWithActiveDropdown(null);
    } else {
      setIndexWithActiveDropdown(index);
    }
  }

  // Disable scrolling outside of menu
  useEffect(() => {
    if (props.isVisible) {
      document.body.classList.add('overflow-hidden');
    } else {
      document.body.classList.remove('overflow-hidden');
    }
  });

  // Hide menu on desktop
  useEffect(() => {
    window.addEventListener('resize', checkIfDesktopView);

    return () => {
      window.removeEventListener('resize', checkIfDesktopView);
    };
  }, []);

  const checkIfDesktopView = useCallback(
    debounce(() => {
      if (window.innerWidth >= 1024) {
        props.onDeactivate();
      }
    }, 125),
    []
  );

  if (!props.isVisible) {
    return null;
  }

  return (
    <FocusTrap focusTrapOptions={{ onDeactivate: props.onDeactivate }}>
      <div className="bg-black/70 fixed top-0 left-0 w-full h-full">
        <div className="bg-white pt-3.5 pl-6 pr-3 ml-auto max-w-[15rem] min-h-full md:pr-5">
          <div className="text-right">
            <IconButton className="ml-auto" onClick={props.onDeactivate}>
              <img src={menuCloseIconUrl} alt="Hide menu" width="26" height="26" loading="lazy" />
            </IconButton>
          </div>
          <nav className="mt-4">
            <ul>
              {menuItems.map((menuItem, index) => (
                <MenuItem
                  key={menuItem.label}
                  menuItem={menuItem}
                  index={index}
                  dropdownIsActive={index === indexWithActiveDropdown}
                  onDropdownActivated={handleDropdownActivated}
                />
              ))}
            </ul>
          </nav>
        </div>
      </div>
    </FocusTrap>
  );
}

MobileMenu.propTypes = {
  isVisible: PropTypes.bool,
  onDeactivate: PropTypes.func,
};

export default MobileMenu;
