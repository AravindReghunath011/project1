import React from 'react'

const Card2 = () => {
  return (
    <div className="w-full border-8 border-black  relative  overflow-hidden">
            <div className="relative h-full flex flex-col justify-end group">
              <div className="h-[20%] absolute w-full top-0  flex items-center z-20 justify-center transition-all duration-200 ease-in group-hover:h-full group-hover:bg-black delay-75  group-hover:bg-opacity-25 group-hover:text-white ">
                <h1 className="text-2xl uppercase w-full text-center font-bold  ">
                  Branding
                </h1>
                
              </div>
              <div className="h-[80%] overflow-hidden  transition-all duration-300 delay-0 ease-in-out group-hover:h-full ">
                <img
                  className="h-full w-full object-cover transition-all duration-300  group-hover:scale-110 z-0"
                  src="./nick-morrison-FHnnjk1Yj7Y-unsplash.jpg"
                  alt="Branding"
                />
              </div>
            </div>
          </div>
  )
}

export default Card2