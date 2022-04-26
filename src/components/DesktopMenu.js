import MenuItem from './MenuItem';
import React from 'react';
import * as menuItems from '../menu.json';

function DesktopMenu() {
  return (
    <nav>
      <ul className="flex">
        {menuItems.map((menuItem, index) => <MenuItem key={menuItem.label} menuItem={menuItem} context="desktop" index={index} />)}
      </ul>
    </nav>
  );
}

export default DesktopMenu;
