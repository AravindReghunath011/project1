import React from "react";
import Card from "./Card";
import Card2 from "./Card2";

const WorkDetail = () => {
  return (
    <div className="w-full h-full ">
      <div className="w-[90%] h-full  m-auto">
        <h1 className="text-9xl font-bold text-black tracking-tighter  w-full  text-center uppercase">
          Branding
        </h1>

        <div className="w-full h-screen  flex gap-4 mt-10">
          <div className="w-[20%] h-full   border-black ">
            <div className="h-[34vh] sticky top-10 ">
              <Card i={1} categoryNumber={1} categoryTitle={"Branding"} />
            </div>
          </div>
          <div className=" h-full  w-[80%] flex gap-4">
            <div className=" w-full flex flex-col gap-4">
              <div className="h-[34vh]">
                <Card
                  i={0}
                  image={"./clark-tibbs-oqStl2L5oxI-unsplash.jpg"}
                  title={"Black Arrow"}
                  category={"Branding"}
                />
              </div>
              <div className="h-[34vh]">
                <Card
                  i={0}
                  image={"./clark-tibbs-oqStl2L5oxI-unsplash.jpg"}
                  title={"Black Arrow"}
                  category={"Branding"}
                />
              </div>
              <div className="h-[34vh]">
                <Card
                  i={0}
                  image={"./clark-tibbs-oqStl2L5oxI-unsplash.jpg"}
                  title={"Black Arrow"}
                  category={"Branding"}
                />
              </div>
            </div>
            <div className=" flex flex-col gap-4 w-full">
            <div className="h-[34vh]">
                <Card
                  i={1}
                  image={"./clark-tibbs-oqStl2L5oxI-unsplash.jpg"}
                  title={"Black Arrow"}
                  category={"Branding"}
                />
              </div>
              <div className="h-[34vh]">
                <Card
                  i={1}
                  image={"./clark-tibbs-oqStl2L5oxI-unsplash.jpg"}
                  title={"Black Arrow"}
                  category={"Branding"}
                />
              </div>
              <div className="h-[34vh]">
                <Card
                  i={1}
                  image={"./clark-tibbs-oqStl2L5oxI-unsplash.jpg"}
                  title={"Black Arrow"}
                  category={"Branding"}
                />
              </div>
            </div>
            <div className=" flex flex-col gap-4 w-full">
            <div className="h-[34vh]">
                <Card
                  i={3}
                  image={"./clark-tibbs-oqStl2L5oxI-unsplash.jpg"}
                  title={"Black Arrow"}
                  category={"Branding"}
                />
              </div>
              <div className="h-[34vh]">
                <Card
                  i={3}
                  image={"./clark-tibbs-oqStl2L5oxI-unsplash.jpg"}
                  title={"Black Arrow"}
                  category={"Branding"}
                />
              </div>
              <div className="h-[34vh]">
                <Card
                  i={3}
                  image={"./clark-tibbs-oqStl2L5oxI-unsplash.jpg"}
                  title={"Black Arrow"}
                  category={"Branding"}
                />
              </div>
            </div>
          </div>
        </div>



        <div className="h-screen">
          <h1 className="uppercase text-9xl font-bold  text-center mt-10">EXPLORE</h1>
          <div className="w-full h-[34vh]  flex gap-4 mt-10">
            <Card2/>
            <Card2/>
            <Card2/>
          </div>

        </div>
      </div>
    </div>
  );
};

export default WorkDetail;
