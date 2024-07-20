import React from 'react'
import {motion} from 'framer-motion'

const Transition = (Component) => {
  const nbOfColumns = 5
  return ()=> (
    <>
        <Component/>
        {[...Array(nbOfColumns)].map((_,i)=>{
          return (
            <motion.div
        className='fixed top-0 z-50 left-0 w-full border h-screen bg-black origin-bottom-left'
        initial={{scaleY:0}}
        animate={{scaleY:0}}
        exit={{scaleY:1}}
        transition={{duration:1,ease:[0.22,1,0.36,1]}}
        />
          )
        })}
        
        <motion.div
        className='fixed top-0 z-50 left-0 w-full h-screen bg-black origin-top-left'
        initial={{scaleY:1}}
        animate={{scaleY:0}}
        exit={{scaleY:0}}
        transition={{duration:1,ease:[0.22,1,0.36,1]}}
        />

       

    </>
  )
}

export default Transition