'use client';

import React, { useRef } from 'react';
import { Button } from 'primereact/button';
import { Menu } from 'primereact/menu';
import { Toast } from 'primereact/toast';

export default function MenuBtn() {
  const menu = useRef<Menu | null>(null);
  const toast = useRef<Toast>(null);

  const items = [
    {
      items: [
        {
          label: 'home',
        },
        {
          label: 'products',
        },
        {
          label: 'people & planet',
        },
        {
          label: 'about us',
        },
        {
          label: 'contact us',
        },
      ],
    },
  ];

  return (
    <div className='flex h-full w-1/3 items-center sm:hidden'>
      <Toast ref={toast}></Toast>
      <Menu
        model={items}
        popup
        ref={menu}
        id='popup_menu_left'
        className='nav-menu rounded-md bg-white p-1 text-2xs font-medium tracking-widest'
      />
      <Button
        className='flex h-5 w-5 items-center justify-center rounded-sm bg-gradient-to-t from-darkGreen via-lightGreen to-yellowGreen'
        onClick={(event) => menu.current?.toggle(event)}
        aria-controls='popup_menu_left'
        aria-haspopup
      >
        <svg
          xmlns='http://www.w3.org/2000/svg'
          x='0px'
          y='0px'
          width='15'
          height='15 '
          viewBox='2 3 50 50'
          className='fill-white'
        >
          <path d='M 5 8 A 2.0002 2.0002 0 1 0 5 12 L 45 12 A 2.0002 2.0002 0 1 0 45 8 L 5 8 z M 5 23 A 2.0002 2.0002 0 1 0 5 27 L 45 27 A 2.0002 2.0002 0 1 0 45 23 L 5 23 z M 5 38 A 2.0002 2.0002 0 1 0 5 42 L 45 42 A 2.0002 2.0002 0 1 0 45 38 L 5 38 z' />
        </svg>
      </Button>
    </div>
  );
}
