import React from "react";
import ProjectSection from "./ProjectSection";
import Marquee from 'react-fast-marquee';
import TextSection from "./TextSection";
import Card from "./Card";
import WorkSection from "./WorkSection";
import Transition from "./Transition";

const LandingPage = () => {
  return (
    <div className="w-full h-auto bg-primary  pb-20 font-scandia  relative">
      {/* <img className='w-full h-screen fixed  object-cover   z-50 mix-blend-difference opacity-10' src="./AdobeStock_193392476_Preview.jpeg" alt="" /> */}

      {/* Hero section */}
      <div className="w-full h-[85vh]  relative  m-auto rounded-xl flex">
        <img className="w-fit h-full object-contain   " src="./Artboard 25.svg" alt="" />
        <img className="w-full h-full object-contain absolute z-0  " src="./ethink white.svg" alt="" />
      </div>

      {/* services section */}
      <div className="w-container h-auto m-auto mt-10">
        {/* top section */}
        <div className="w-full lg:h-[34vh] flex flex-col lg:flex lg:flex-row   gap-4">
          {/* services card */}
          <div className="w-full  border-8 border-black cursor-pointer  relative  overflow-hidden">
            <div className="relative h-full flex flex-col justify-end group">
              <div className="h-[20%] bg-offwhite absolute w-full top-0  flex items-center z-10 justify-center transition-all duration-200 ease-in group-hover:h-full group-hover:bg-black delay-75  group-hover:bg-opacity-25 group-hover:text-white ">
                <h1 className="text-2xl uppercase w-full text-center font-bold  ">
                  Websites & Mobile App
                </h1>
                
              </div>
              <div className="h-[80%] overflow-hidden  transition-all duration-300 delay-0 ease-in-out group-hover:h-full ">
                <img
                  className="h-full w-full object-cover transition-all duration-300  group-hover:scale-110 z-0"
                  src="./blackArrow.jpg"
                  alt="Branding"
                />
              </div>
            </div>
          </div>

           {/* services card */}
          <div className="w-full border-8 border-black  relative  overflow-hidden">
            <div className="relative h-full flex flex-col justify-end group">
              <div className="h-[20%] bg-offwhite absolute w-full top-0  flex items-center z-10 justify-center transition-all duration-200 ease-in group-hover:h-full group-hover:bg-black delay-75  group-hover:bg-opacity-25 group-hover:text-white ">
                <h1 className="text-2xl uppercase w-full text-center font-bold  ">
                  Product design
                </h1>
              </div>
              <div className="h-[80%] overflow-hidden  transition-all duration-300 delay-0 ease-in-out group-hover:h-full ">
                <img
                  className="h-full w-full object-cover transition-all duration-300  group-hover:scale-110 z-0"
                  src="./nada.jpg"
                  alt="Branding"
                />
              </div>
            </div>
          </div>

           {/* services card */}
          <div className="w-full border-8 border-black  relative overflow-hidden">
            
            <div className="relative h-full flex flex-col justify-end group">
              <div className="h-[20%] bg-offwhite absolute w-full top-0  flex items-center z-10 justify-center transition-all duration-200 ease-in group-hover:h-full group-hover:bg-black delay-75  group-hover:bg-opacity-25 group-hover:text-white ">
                <h1 className="text-2xl uppercase w-full text-center font-bold  ">
                  branding & advertising
                </h1>
              </div>
              <div className="h-[80%] overflow-hidden  transition-all duration-300 delay-0 ease-in-out group-hover:h-full ">
                <img
                  className="h-full w-full object-cover transition-all duration-300  group-hover:scale-110 z-0"
                  src="./zebra.jpg"
                  alt="Branding"
                />
              </div>
            </div>
          </div>

          {/* services card */}
          <div className="w-full  border-8 border-black  relative  overflow-hidden">
            <div className="relative h-full flex flex-col justify-end group">
              <div className="h-[20%] absolute w-full top-0  flex items-center bg-offwhite z-10 justify-center transition-all duration-200 ease-in group-hover:h-full group-hover:bg-black delay-75  group-hover:bg-opacity-25 group-hover:text-white ">
                <h1 className="text-2xl uppercase w-full text-center font-bold  ">
                  Corporate gifts
                </h1>
              </div>
              <div className="h-[80%] overflow-hidden  transition-all duration-300 delay-0 ease-in-out group-hover:h-full ">
                <img
                  className="h-full w-full object-cover transition-all duration-300  group-hover:scale-110 z-0"
                  src="./blackArrow.jpg"
                  alt="Branding"
                />
              </div>
            </div>
          </div>

          
        </div>

        {/* bottom section */}
        <div className="w-full h-auto mt-5">

        <ProjectSection/>
        </div>


        {/* Text section */}
        <div className="w-full h-auto mt-10">
            <TextSection/>
        </div>

        {/* Work marquee heading section */}
        <div className="w-full h-fit mt-10 font-scandia bg-white text-primary ">
        <Marquee speed={50}  direction='left' className='overflow-hidden w-full z-0 pt-10 h-full  '>
        <h1 className='font-bold  lg:text-[50vh] text-7xl tracking-tighter'>WORK- </h1> 
        <h1 className='font-bold lg:text-[50vh] text-7xl tracking-tighter'>WORK-  </h1> 
        <h1 className='font-bold lg:text-[50vh] text-7xl tracking-tighter'>WORK- </h1> 
        <h1 className='font-bold lg:text-[50vh] text-7xl tracking-tighter'>WORK-  </h1> 
      </Marquee>
        </div>



        {/* Work Card section */}
        <div className="w-full h-[34vh] mt-10 flex gap-4 ">
          <Card i={0} image={'./clark-tibbs-oqStl2L5oxI-unsplash.jpg'} title={'Black Arrow'} category={'Branding'}/>
          <Card i={1} categoryTitle={'Branding'}/>
          <Card i={2} image={'./nick-morrison-FHnnjk1Yj7Y-unsplash.jpg'} title={'Black Arrow'} category={'Branding'}/>
          <Card i={3} image={'./clark-tibbs-oqStl2L5oxI-unsplash.jpg'} title={'Black Arrow'} category={'Branding'}/>
        </div>




        {/* Work section */}
        <div className="w-full h-auto mt-10">
          <WorkSection/>
        </div>


        {/* Work Card section */}
        <div className="w-full h-[34vh] mt-10 flex gap-4 ">
          <Card i={0} image={'./clark-tibbs-oqStl2L5oxI-unsplash.jpg'} title={'Black Arrow'} category={'Design'}/>
          <Card i={2} categoryTitle={'Design'}/>
          <Card i={2} image={'./nick-morrison-FHnnjk1Yj7Y-unsplash.jpg'} title={'Black Arrow'} category={'Design'}/>
          <Card i={3} image={'./clark-tibbs-oqStl2L5oxI-unsplash.jpg'} title={'Black Arrow'} category={'Design'}/>
        </div>

        {/* Text section */}
        <div className="w-full h-auto mt-10">
            <TextSection/>
        </div>

        {/* Work Card section */}
        <div className="w-full h-[34vh] mt-10 flex gap-4 ">
        {[...Array(4)].map((_,i)=>{
            return (
                <Card i={i} title={'Black Arrow'} category={'Branding'} image={'./lesly-juarez-DFtjXYd5Pto-unsplash.jpg'}/>
            )
        })}
        </div>


        {/* NEWS marquee heading section */}
        <div className="w-full h-fit mt-10 bg-white font-scandia text-primary ">
        <Marquee speed={60} direction='left' className='overflow-hidden w-full z-0 '>
        <h1 className='font-bold  lg:text-[50vh] text-7xl tracking-tighter mt-10'>UPDATES- </h1> 
        <h1 className='font-bold lg:text-[50vh] text-7xl tracking-tighter mt-10'>NEWS-  </h1> 
        <h1 className='font-bold lg:text-[50vh] text-7xl tracking-tighter mt-10'>UPDATES- </h1> 
        <h1 className='font-bold lg:text-[50vh] text-7xl tracking-tighter mt-10'>NEWS-  </h1> 
      </Marquee>
        </div>



        {/* News section */}
        <div className="w-full h-[60vh] flex gap-4 mt-10 ">
          <div className="w-full h-full flex flex-col items-center justify-center border-8 border-black ">
            <button className="border border-dashed mb-2 rounded-full text-sm font-medium px-5 text-center  border-black p-0.5 flex uppercase">Anything</button>
            <h1 className="text-6xl w-[70%] text-center tracking-tighter font-bold uppercase">Lorem ipsum dolr Lorem,  sit.</h1>
            <p className="w-[60%] text-center leading-tight mt-5 font-medium">Lorem  Ab atque reiciendis itaque labore, molestiae repudiandae autem culpa voluptatum at, quia ratione, modi consequatur excepturi incidunt pariatur!</p>
          </div>
          <div className="w-full h-full border-8 border-black  flex justify-center items-center flex-col">
          <button className="border rounded-full text-sm font-medium mb-2 px-5 text-center border-dashed border-black p-0.5 flex uppercase">Anything</button>
            <h1 className="text-6xl w-[70%] text-center tracking-tighter font-bold uppercase">Lorem ipsum ,  sit.</h1>
            <p className="w-[60%] text-center leading-tight mt-5 font-medium">Lorem  Ab atque reiciendis itaque labore, molestiae repudiandae autem culpa voluptatum at, quia ratione, modi consequatur excepturi incidunt pariatur!</p>
          
          </div>
        </div>


        {/* Location section */}
        <div className="border-8 border-black h-[60vh] w-full mt-10 ">

        </div>












      </div>
    </div>
  );
};

export default Transition(LandingPage)
