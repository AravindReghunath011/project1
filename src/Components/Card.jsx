import React from "react";

const Card = ({ i, image, title, category, categoryTitle,categoryNumber }) => {
  return (
    <>
      {categoryTitle ? (
        <div
          className={`max-w-sm  uppercase lg:min-h-[32vh] h-full flex flex-col relative w-full border-8 overflow-hidden   border-black  duration-200 `}
        >
          
          <div className="h-[20%] top-0 p-4 font-halyard ">
            <h1 className="text-2xl z-10 font-bold ">{categoryTitle}</h1>
          </div>
          <div className="h-[80%] flex  items-center justify-end p-4 font-halyard ">
            <h1 className="text-[25vh]   font-bold z-10 ">0{i}</h1>
          </div>
        </div>
      ) : (
        <div
          className={`max-w-sm h-full uppercase lg:min-h-[32vh] relative w-full border-8 overflow-hidden   border-black  duration-300 hover-scale-custom ${
            i % 4 == 0 ? "origin-left " : "origin-center"
          } ${i % 4 == 3 ? "origin-right " : "origin-center"}`}
        >
          <img
            className="w-full h-full z-0  object-cover "
            src={image}
            alt=""
          />
          <div className="absolute bottom-0 p-4 font-halyard ">
            <h1 className="text-2xl z-10 text-white mix-blend-difference">{title}</h1>
            <p className="text-white opacity-60">{category}</p>
          </div>
        </div>
      )}
    </>
  );
};

export default Card;
