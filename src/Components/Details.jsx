import React from 'react'
import ProjectSection from './ProjectSection'
import TextSection from './TextSection'
import Transition from './Transition'

const Details = () => {
  return (
    <div className='w-full h-full pt-10 '>
        <div className='w-container rounded-xl h-[80vh] overflow-hidden  m-auto border-dashed border-black border'>
            <img className='w-full h-full object-cover' src="./clark-tibbs-oqStl2L5oxI-unsplash.jpg" alt="" />
        </div>

        <div className='w-container rounded-xl flex  h-[50vh] mt-20 border border-dashed border-black m-auto'>
            <div className='w-[40%]  h-full flex flex-col justify-center items-center text-start  '>
                <h1 className='text-6xl w-[70%]      tracking-tighter font-bold'>Lorem, ipsum dolor.</h1>
                <p className='mt-10 w-[70%] text-lg'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis voluptates, soluta veritatis doloremque sapiente velit praesentium dolorum doloribus aspernatur perspiciatis!</p>
            </div>
            <div className='w-[60%]  h-full flex'>
                <div className='w-full h-full border '></div>
                <div className='w-full h-full border'></div>
            </div>
        </div>

        <div className='w-container h-full '>


        </div>

        <div className=' w-container m-auto h-auto'>
            <div className='w-full h-[50vh] flex  mt-10 gap-4'>
                <div className='w-full h-full border border-black border-dashed rounded-xl'></div>
                <div className='w-full h-full border border-black border-dashed rounded-xl'></div>

            </div>


            <div className='flex w-full h-screen mt-4 gap-4'>
                <div className='h-full w-[33%] border border-black rounded-xl border-dashed'></div>
                <div className='h-full w-[33%]  rounded-xl flex flex-col gap-4'>
                        <div className='w-full h-full border border-black border-dashed rounded-xl'></div>
                        <div className='w-full h-full border border-black border-dashed rounded-xl'></div>
                </div>
                <div className='h-full w-[33%] border border-black rounded-xl border-dashed'></div>

            </div>


            <div className='w-full h-[50vh] flex border mt-4 gap-4'>
                <div className='w-full h-full border border-black border-dashed rounded-xl'></div>
                <div className='w-full h-full border border-black border-dashed rounded-xl'></div>

            </div>

        </div>

    </div>
  )
}

export default Transition(Details)