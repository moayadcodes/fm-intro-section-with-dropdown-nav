import DesktopMenu from './DesktopMenu';
import IconButton from './IconButton';
import PropTypes from 'prop-types';
import React from 'react';
import Button from './Button';

function Header(props) {
  const logoUrl = new URL('../images/logo.svg', import.meta.url);
  const menuIconUrl = new URL('../images/icon-menu.svg', import.meta.url);

  return (
    <header>
      <div className="container">
        <div className="flex items-center justify-between pt-4 lg:justify-start xl:pt-6">
          <h1>
            <a className="block pt-[calc(7%/84*100)]" href="">
              <img src={logoUrl} alt="Snap" width="84" height="27" />
            </a>
          </h1>
          <div className="ml-14 hidden lg:block">
            <DesktopMenu />
          </div>
          <div className="hidden lg:block lg:ml-auto">
            <a className="menu-item p-2 mr-8" href="#">Login</a>
            <Button url="#">Register</Button>
          </div>
          <IconButton className="translate-x-2 lg:hidden" onClick={props.onMenuButtonClick}>
            <img src={menuIconUrl} alt="Show menu" width="32" height="18" />
          </IconButton>
        </div>
      </div>
    </header>
  );
}

Header.propTypes = {
  onMenuButtonClick: PropTypes.func.isRequired,
};

export default Header;
