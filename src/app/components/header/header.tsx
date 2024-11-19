'use client';

import Image from 'next/image';
import HeaderItem from './headerItem';
import GradientBtn from '../buttons/gradientBtn';
import MenuBtn from '../buttons/menuBtn';

export default function Header() {
  const handleClick = () => {
    console.log('Clicked quote button');
  };
  return (
    <nav className='absolute top-0 z-50 flex h-10 w-full grid-cols-3 bg-black bg-opacity-70 px-2 sm:h-16 sm:grid-cols-1'>
      <MenuBtn />
      <div className='m-auto flex w-1/3 items-center justify-center sm:m-0 sm:h-full sm:w-auto'>
        <Image
          width={1000}
          height={1000}
          src='/images/logo.png'
          alt='marisha logo'
          className='w-16 sm:block sm:w-24'
        />
      </div>
      <HeaderItem />
      <div className='flex w-1/3 items-center justify-end sm:w-auto'>
        <GradientBtn name='get a quote' onClick={handleClick} />
      </div>
    </nav>
  );
}
