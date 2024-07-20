import React from 'react';
import { motion } from 'framer-motion';

const IntroAnimation = () => {
    let word = 'everythink'
    let letters = word.split('')
  return (
    <div className="flex items-center justify-center h-screen bg-gradient-to-r from-indigo-500 to-purple-500">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="text-white  font-bold"
      >
        {letters.map((letter,i)=>{
            return (
                <motion.span
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.1 *i }}
          className="inline-block text-[30vh]"
        >
          {letter}
        </motion.span>
            )
        })}
       
      </motion.div>
      {/* Add morphing shapes and other elements here */}
    </div>
  );
};

export default IntroAnimation;
