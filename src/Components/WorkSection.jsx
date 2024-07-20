import React from 'react'

const WorkSection = () => {
  return (
    <div className='w-full h-[100vh] pb-5 flex gap-4'>
        <div className='w-[40%] relative border-8 overflow-hidden  border-black '>
            <img className='w-full h-full object-cover' src="./148184242_10471626.jpg" alt="" />
        <div className='  w-full bottom-0  absolute p-4 z-10'>
                <h1 className='text-3xl z-10  font-bold'>Black Arrow</h1>
                <p className='opacity-60'>Branding</p>
            </div>
        </div>
        <div className='w-[60%]  flex flex-col gap-4'>
            <div className=' w-full h-full flex gap-4'>
                <div className='w-full flex flex-col justify-center items-center h-full border-8 border-black '>
                <h1 className='text-4xl font-bold'>
                    Heading
                  </h1>
                  <p className='opacity-80 mt-10 w-[80%]  text-center   text-xs'>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Deleniti, numquam.
                  </p>
                </div>
                <div className='w-full h-full border-8 overflow-hidden  border-black '>
                    <img src="./148184242_10471626.jpg" alt="" />
                </div>
            </div>
            <div className='border-8 relative w-full h-full  border-black '>
            <div className='  w-full bottom-0  absolute p-4 z-10'>
                <h1 className='text-3xl z-10  font-bold'>Black Arrow</h1>
                <p className='opacity-60'>Branding</p>
            </div>  
            </div>
        </div>
    </div>
  )
}

export default WorkSection