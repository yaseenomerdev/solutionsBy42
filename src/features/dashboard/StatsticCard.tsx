import React from "react";

function StatsticCard({ title, counter, image, desc }) {
  return (
    <div className="flex group border border-white hover:border-primary  duration-300 justify-between h-[160px] shadow-md px-[24px] rounded-[8px] py-[25px] bg-white">
      <div className="flex flex-col justify-between">
        <span className="text-xl font-bold  duration-300 group-hover:text-primary ">
          {title}
        </span>
        <div className="flex gap-2">
          <span className="text-primary font-bold duration-300 group-hover:scale-110">
            {counter}
          </span>
          <span className="font-thin text-[#999]">{desc}</span>
        </div>
      </div>
      <div className="flex">
        <img src={image} />
      </div>
    </div>
  );
}

export default StatsticCard;
