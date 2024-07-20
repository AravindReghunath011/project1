import React from 'react'

const TextSection = () => {
  return (
    <div className='w-full h-[95vh] relative pb-5 flex gap-4'>
        <div className='w-[35%]   flex flex-col gap-4'>
            <div className=' w-full h-full flex gap-4'>
                <div className='w-full h-full overflow-hidden border-8  border-black '>
                  <img className='w-full h-full object-cover' src="./thought-catalog-505eectW54k-unsplash.jpg" alt="" />
                </div>
                <div className='w-full h-full flex flex-col justify-center items-center border-8 border-black '>
                  <h1 className='text-4xl font-bold'>
                    Heading
                  </h1>
                  <p className='opacity-80 mt-10 w-[80%]  text-center   text-xs'>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Deleniti, numquam.
                  </p>
                </div>
            </div>
            <div className='border-8 relative overflow-hidden w-full h-full  border-black '>
              <img alt="" className='w-full h-full object-cover ' src="./clark-tibbs-oqStl2L5oxI-unsplash.jpg" />
            <div className='  w-full bottom-0 text-white absolute p-4 z-10'>
                <h1 className='text-3xl z-10  font-bold'>Black Arrow</h1>
                <p className='opacity-60'>Branding</p>
            </div>
            </div>
        </div>
        <div className='w-[65%] border-8 flex flex-col justify-center items-center  border-black '> 
          <div className='w-full text-9xl font-bold font-scandia text-center tracking-tighter'>
            Lorem, ipsum dolor.
          </div>
          <p className='text-xl font-medium text-center w-[60%] mt-10'>Lorem, Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi sint hic, optio facilis maiores deserunt voluptatibus consequatur reprehenderit quidem asperiores beatae, quia eum nesciunt illum odit sapiente neque. Fuga, ducimus? ipsum dolor sit amet consectetur adipisicing elit. Quasi aperiam nam, saepe eos vel asperiores quisquam a repellat dignissimos voluptatibus?</p>
        </div>
    </div>
  )
}

export default TextSection