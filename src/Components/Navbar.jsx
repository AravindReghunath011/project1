import React, { useEffect, useRef, useState } from 'react';
import Menu from './Menu';
import MenuItems from './MenuItems';

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const updateState = () => {
    setTimeout(() => {
      console.log(open, 's');
      setOpen(!open);
    }, 200);
  };
  const navbar = useRef(null)

  useEffect(()=>{
    let lastScrollTop = 0
    const scrollUpdate = ()=>{
        var scrollTop = window.scrollY  || document.documentElement.scrollTop
        if(scrollTop>lastScrollTop){
            navbar.current.style.top = "-100%"
        }else{
            navbar.current.style.top = "1.25rem"
        }
        lastScrollTop = scrollTop
    }
    window.addEventListener('scroll', scrollUpdate)
    return()=> window.removeEventListener('scroll',scrollUpdate)
})

  return (
    
    <>
      <div ref={navbar} className='w-container transition-all duration-300 m-auto top-5 right-1/2  translate-x-1/2 fixed z-50 p-3  flex  justify-between items-center rounded-full'>
      <div className='w-auto h-10 '>

        <img className='object-cover w-full h-full scale-120' src="./Everythink logo_white-15.png" alt="" />
      </div>
        <div
          onClick={updateState}
          className='text-xl uppercase cursor-pointer text-white'
        >
          menu
        </div>
      </div>

       <Menu isOpen={open}/>
       <MenuItems isOpen={open}/>
    </>
  );
};

export default Navbar;
