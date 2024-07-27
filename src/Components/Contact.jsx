import React from 'react'
import ProjectSection from './ProjectSection'

const Contact = () => {
  return (
    <div className='w-full h-auto pb-10'>
        <div className='w-container m-auto h-[80vh] flex '>
            <div className=' w-1/2 h-full flex justify-center items-center'>
            <h1 className='uppercase text-9xl font-black font-scandia text-center tracking-tighter'><span className='text-5xl'>Lets</span> <span className='text-[23vh]'>Work</span> Together</h1>
            </div>
            <div className=' w-1/2 h-full flex flex-col justify-center items-center'>
            <div>

            
            <div className=' text-center mb-10'>
                <h1 className='text-2xl font-halyard uppercase '>Email</h1>
                <p className='text-xl'>hello@everythink.qa</p>
            </div>
            <div className=' text-center'>
                <h1 className='text-2xl font-halyard uppercase'> Phone</h1>
                <p className='text-xl'>+974 66783065</p>
            </div>


            </div>
            </div>
        </div>

        <div className='w-container h-screen m-auto mt-20'>
        <ProjectSection/>
        </div>
    </div>
  )
}

export default Contact