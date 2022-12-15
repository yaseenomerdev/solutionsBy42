import React from "react";
import StatsticCard from "./StatsticCard";

const statstics = [
  {
    title: " إجمالي الطلبات",
    counter: "25,7590",
    image: "dashboard/shape-1.PNG",
    desc: "طلب",
  },

  {
    title: "الطلبات المقبولة",
    counter: "250",
    image: "dashboard/shape-2.PNG",
    desc: "طلب مقبول",
  },

  {
    title: " الطلبات المرفوضة",
    counter: "20",
    image: "dashboard/shape-3.PNG",
    desc: "طلب مرفوض",
  },
];

function Hero() {
  return (
    <div className="flex h-full">
      <div className=" px-5 w-full">
        <div className="flex flex-col   mt-[70px]">
          <div className="grid grid-cols-1 lg:grid-cols-2">
            <div className="flex gap-[96px]">
              <div>
                <img src="logo.png" className="w-[242px]" />
              </div>

              <div className="flex flex-col gap-4">
                <span className="text-[#9baacf] text-[20px]">لوحة التحكم</span>
                <span className="font-bold text-[32px]">طلبات التمويل</span>
              </div>
            </div>
            <div>
              <div className="flex justify-end">
                <input
                  id="hs-leading-button-add-on-with-icon"
                  name="hs-leading-button-add-on-with-icon"
                  className="py-3 px-4 block w-[300px]  shadow-sm  text-sm focus:z-10 focus:border-[#482f8b] focus:ring-[#482f8b]"
                />
                <button
                  type="button"
                  className="inline-flex flex-shrink-0 justify-center items-center h-[2.875rem] w-[2.875rem]  border   bg-primary text-white hover:bg-[#6c51b4] focus:z-10 focus:outline-none focus:ring-2 focus:ring-[#482f8b] transition-all text-sm"
                >
                  <img
                    src="dashboard/essential-search.webp"
                    className="h-[20px] w-[20px]"
                  />
                </button>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-[16px] w-full mt-[42px]">
            {statstics.map((item) => (
              <StatsticCard key={item.image} {...item} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
