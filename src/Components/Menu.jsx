import React, { useEffect, useState } from "react";
import { motion } from 'framer-motion';

const Menu = ({ isOpen }) => {
  const [showZIndex, setShowZIndex] = useState(isOpen);

  useEffect(() => {
    let timer;
    if (isOpen) {
      setShowZIndex(true);
    } else {
      timer = setTimeout(() => setShowZIndex(false), 2000);
    }
    return () => clearTimeout(timer);
  }, [isOpen]);

  useEffect(() => {
    const originalOverflow = window.getComputedStyle(document.body).overflow;
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = originalOverflow;
    };
  }, []);

  return (
    <div className={`w-screen fixed overflow-hidden  flex inset-0 h-screen ${showZIndex ? 'z-40' :'-z-0'}`}>
      {[...Array(20)].map((_, i) => (
        <div key={i} className="w-[5vw]">
          <Block isOpen={isOpen} />
        </div>
      ))}
    </div>
  );
};

const Block = ({ isOpen }) => {
  function shuffle(arr) {
    let i = arr.length, j, temp;
    while (--i > 0) {
      j = Math.floor(Math.random() * (i + 1));
      temp = arr[j];
      arr[j] = arr[i];
      arr[i] = temp;
    }
    return arr;
  }

  const variants = {
    initial: {
      opacity: 0,
    },
    open: (i) => ({
      opacity: 1,
      transition: {
        duration: 0,
        delay: i * 0.05,
      },
    }),
    closed: (i) => ({
      opacity: 0,
      transition: {
        duration: 0.5,
        delay: i * 0.05,
      },
    }),
  };

  const innerHeight = window.innerHeight;
  const blockHeight = window.innerWidth * 0.05;
  const nbOfBlocks = Math.ceil(innerHeight / blockHeight);
  const delays = shuffle([...Array(nbOfBlocks)].map((_, i) => i));

  return (
    <>
      {delays.map((random, i) => (
        <motion.div
          key={i}
          variants={variants}
          initial="initial"
          custom={random}
          animate={isOpen ? "open" : "closed"}
          className="h-[5vw] bg-black"
        />
      ))}
    </>
  );
};

export default Menu;
