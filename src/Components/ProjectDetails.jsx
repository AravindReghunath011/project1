import React from 'react'

const ProjectDetails = () => {
  return (
    <div className='w-full h-auto pt-20'>
        <div className='w-container m-auto h-auto '>
            <div className='flex w-full '>
                <div className="w-1/2  flex justify-start min-h-10">
                <h1 className='text-3xl'>Romancham</h1> </div>
                <div className="w-1/2  flex justify-end min-h-10">
                <p className='w-[80%] text-xl'>Romancham (transl. Goosebump) is a 2023 Indian Malayalam language comedy horror film directed by Jithu Madhavan in his directorial debut and produced by Johnpaul George, Girish Gangadharan and Joby George under the banner of Guppy Films and Johnpaul George Productions</p>
                 </div>
            </div>

            <div className='w-full h-auto  '>
                    <div className='w-[60%] pt-20 m-auto h-[100vh]'>
                        <img className='w-full h-full object-contain  ' src="./ROMNCHM.png" alt="" />
                    </div>

                    <div className='w-[80%]  pb-20 m-auto'>

                    <img className='w-full h-full object-contain  ' src="./WhatsApp Image 2024-07-26 at 10.15.19.jpeg" alt="" />
                    </div>
            </div>
        </div>

    </div>
  )
}

export default ProjectDetails