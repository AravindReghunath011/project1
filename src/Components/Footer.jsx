import React from 'react'
import {motion} from 'framer-motion'

const Footer = () => {
  return (
    <div className='relative h-[80vh] bg-black'
    style={{clipPath:" polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)"}}>
        <div className='relative h-[calc(100vh+80vh)] -top-[100vh]'>
            <div className='sticky top-[calc(100vh-80vh)] h-[80vh]   flex-col justify-between flex '>
                
                <h1 className='text-9xl text-white  bg-black font-scandia '>everythink</h1>
                <div className=' w-full h-[40vh] relative overflow-hidden'>
                <motion.h1 initial={{y:'-100%'}} animate={{y:'0%',transition:{duration:2,ease:'circOut'}}} className='text-logo text-white  font-scandia -mt-14  font-semibold '>everythink</motion.h1>
                </div>
            </div>
        </div>

    </div>
  )
}

export default Footer