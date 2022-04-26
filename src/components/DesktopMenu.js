import MenuItem from './MenuItem';
import React, { useState } from 'react';
import * as menuItems from '../menu.json';

function DesktopMenu() {
  const [indexWithActiveDropdown, setIndexWithActiveDropdown] = useState(null);

  function handleDropdownActivated(index) {
    if (index === indexWithActiveDropdown) {
      setIndexWithActiveDropdown(null);
    } else {
      setIndexWithActiveDropdown(index);
    }
  }

  return (
    <nav>
      <ul className="flex">
        {menuItems.map((menuItem, index) => (
          <MenuItem
            key={menuItem.label}
            menuItem={menuItem}
            context="desktop"
            index={index}
            dropdownIsActive={index === indexWithActiveDropdown}
            onDropdownActivated={handleDropdownActivated}
          />
        ))}
      </ul>
    </nav>
  );
}

export default DesktopMenu;
