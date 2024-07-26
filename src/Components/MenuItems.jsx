import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const MenuItems = ({ isOpen }) => {
  const [hoveredSection, setHoveredSection] = useState(null);

  const variants = {
    initial: {
      opacity: 0,
    },
    open: {
      opacity: 1,
    },
    close: {
      opacity: 0,
    },
  };

  const topTextVariants = {
    initial: {
      y: 0,
    },
    animate: {
      y: '-100%',
    },
  };

  const bottomTextVariants = {
    initial: {
      y: '100%',
    },
    animate: {
      y: '0',
    },
  };

  return (
    <motion.div
      variants={variants}
      initial="initial"
      animate={isOpen ? 'open' : 'close'}
      style={{ zIndex: isOpen ? 40 : -99 }}
      className={`fixed h-screen  text-white  w-screen uppercase font-scandia -z-20 inset-0 flex  text-8xl font-bold flex-col  items-center justify-center gap-10`}
    >
      {['about', 'works', 'contact'].map((section) => (
        <Link to={'/' + section}>
        <div 
          key={section}
          className="h-[12vh] overflow-hidden relative"
          onMouseEnter={() => setHoveredSection(section)}
          onMouseLeave={() => setHoveredSection(null)}
        >
          <motion.h1
            variants={topTextVariants}
            initial="initial"
            animate={hoveredSection === section ? 'animate' : 'initial'}
            className="cursor-pointer"
          >
            {section}
          </motion.h1>
          <motion.h1
            variants={bottomTextVariants}
            initial="initial"
            animate={hoveredSection === section ? 'animate' : 'initial'}
            className="cursor-pointer absolute top-0"
          >
            {section}
          </motion.h1>
        </div>
        </Link>
      ))}
    </motion.div>
  );
};

export default MenuItems;
