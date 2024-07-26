import React, { useEffect, useRef, useState } from 'react';
import { useLocation } from 'react-router-dom';
import Menu from './Menu';
import MenuItems from './MenuItems';

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const location = useLocation();

  const updateState = () => {
    setTimeout(() => {
      console.log(open, 's');
      setOpen(!open);
    }, 200);
  };

  const navbar = useRef(null);

  useEffect(() => {
    let lastScrollTop = 0;
    const scrollUpdate = () => {
      const scrollTop = window.scrollY || document.documentElement.scrollTop;
      if (scrollTop > lastScrollTop) {
        navbar.current.style.top = "-100%";
      } else {
        navbar.current.style.top = "1.25rem";
      }
      lastScrollTop = scrollTop;
    };
    window.addEventListener('scroll', scrollUpdate);
    return () => window.removeEventListener('scroll', scrollUpdate);
  }, []);

  useEffect(() => {
    setOpen(false); // Close the menu when the route changes
  }, [location]);

  return (
    <>
      <div ref={navbar} className='w-container transition-all duration-300 m-auto top-5 right-1/2 translate-x-1/2 fixed z-50 p-3 flex justify-between items-center rounded-full'>
        <div className='w-auto h-10'>
          <img className='object-cover w-full h-full scale-120' src="./Everythink logo_white-15.png" alt="Everythink logo" />
        </div>
        <div
          onClick={updateState}
          className='text-xl uppercase cursor-pointer text-white'
        >
          Menu
        </div>
      </div>

      <Menu isOpen={open} />
      <MenuItems isOpen={open} />
    </>
  );
};

export default Navbar;
