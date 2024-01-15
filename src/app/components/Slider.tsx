import React, { useState } from "react";
import { MdArrowBackIos, MdArrowForwardIos } from "react-icons/md";

function Swiper({ images }: { images: string[] }) {
  const [curr, setCurr] = useState(0);
  return (
    <div className="flex relative ">
      <div className="flex w-full justify-center">
        {images.map((img, idx) => {
          return (
            <div key={idx} className={`${idx == curr ? "opacity-100 flex w-full justify-center" : "opacity-0 w-0"} duration-[4000ms] `}>
              <img src={img} alt="profile image" className=" md:w-[96] h-96"/>
            </div>
          );
        })}
      </div>

      <div className="flex justify-between absolute w-full p-6 top-[40%] ">
        <MdArrowBackIos
          className="cursor-pointer text-[80px] opacity-[50%]"
          onClick={() => {
            setCurr((prev) => {
              if (prev == 0) {
                return images.length - 1;
              }
              return prev - 1;
            });
          }}
        />
        <MdArrowForwardIos className="cursor-pointer text-[80px] opacity-[50%]" onClick={() => {
            setCurr((prev) => {
              if (prev == images.length-1) {
                return 0;
              }
              return prev + 1;
            });
          }}/>
      </div>
    </div>
  );
}

export default Swiper;
