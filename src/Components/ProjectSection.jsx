import React, { useState } from 'react'

const ProjectSection = () => {
    const [active,setActive] = useState('first')
  return (
    <div className='w-full h-screen  flex gap-4 font-scandia uppercase text-white'>
        
        <div onMouseEnter={()=>setActive('first')} className={`border-8  overflow-hidden relative border-black flex  items-end h-full transition-all duration-500 ${active == 'first' ? 'w-[50%]' :" w-[25%]"}`}>
            <img className='w-full h-full object-cover absolute' src="./thought-catalog-505eectW54k-unsplash.jpg" alt="" />
            <div className='h-[10%]  w-full pl-4 z-10'>
                <h1 className='text-2xl font-bold'>Black Arrow</h1>
                <p>Branding</p>
            </div>
        </div>
        <div onMouseEnter={()=>setActive('second')} className={`border-[10px] border-black overflow-hidden relative  flex  items-end h-full transition-all duration-500 ${active == 'second' ? 'w-[50%]' :" w-[25%]"}`}>
            <img className='w-full h-full object-cover absolute' src="./lesly-juarez-DFtjXYd5Pto-unsplash.jpg" alt="" />
        <div className='h-[10%]  w-full pl-4 z-10'>
                <h1 className='text-2xl font-bold'>Black Arrow</h1>
                <p>Branding</p>
            </div>

        </div>
        <div onMouseEnter={()=>setActive('third')} className={`border-[10px] border-black   overflow-hidden relative  flex  items-end h-full transition-all duration-500 ${active == 'third' ? 'w-[50%]' :" w-[25%]"}`}>
            <img className='w-full h-full object-cover absolute' src="./clark-tibbs-oqStl2L5oxI-unsplash.jpg" alt="" />
        <div className='h-[10%]  w-full pl-4 z-10'>
                <h1 className='text-2xl font-bold'>Black Arrow</h1>
                <p>Branding</p>
            </div>

        </div>
    </div>
  )
}

export default ProjectSection