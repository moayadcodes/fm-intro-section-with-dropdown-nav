import IconButton from './IconButton';
import FocusTrap from 'focus-trap-react';
import PropTypes from 'prop-types';
import React, { useEffect } from 'react';
import MobileMenuItem from './MobileMenuItem';

function MobileMenu(props) {
  const menuCloseIconUrl = new URL('../images/icon-close-menu.svg', import.meta.url);
  const menuItems = [
    {
      url: '#',
      label: 'Features',
      menuItems: [
        {
          url: '#',
          label: 'Todo List',
          icon: new URL('../images/icon-todo.svg', import.meta.url),
        },
        {
          url: '#',
          label: 'Calendar',
          icon: new URL('../images/icon-calendar.svg', import.meta.url),
        },
        {
          url: '#',
          label: 'Reminders',
          icon: new URL('../images/icon-reminders.svg', import.meta.url),
        },
        {
          url: '#',
          label: 'Planning',
          icon: new URL('../images/icon-planning.svg', import.meta.url),
        },
      ],
    },
    {
      url: '#',
      label: 'Company',
      menuItems: [
        {
          url: '#',
          label: 'History',
        },
        {
          url: '#',
          label: 'Our Team',
        },
        {
          url: '#',
          label: 'Blog',
        },
      ],
    },
    {
      url: '#',
      label: 'Careers',
    },
    {
      url: '#',
      label: 'About',
    },
  ];

  useEffect(() => {
    if (props.isVisible) {
      document.body.classList.add('overflow-hidden');
    } else {
      document.body.classList.remove('overflow-hidden');
    }
  });

  if (!props.isVisible) {
    return null;
  }

  return (
    <FocusTrap focusTrapOptions={{ onDeactivate: props.onDeactivate }}>
      <div className="bg-black/70 fixed top-0 left-0 w-full h-full">
        <div className="bg-white pt-3.5 pl-6 pr-3 ml-auto max-w-[15rem] min-h-full">
          <div className="text-right">
            <IconButton className="ml-auto" onClick={props.onDeactivate}>
              <img src={menuCloseIconUrl} alt="Hide menu" width="26" height="26" loading="lazy" />
            </IconButton>
          </div>
          <nav className="mt-4">
            <ul>
              {menuItems.map(menuItem => <MobileMenuItem key={menuItem.label} menuItem={menuItem} />)}
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
