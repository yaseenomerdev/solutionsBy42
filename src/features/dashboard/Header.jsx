import React from "react";
import { useUser } from "../../hooks/UserContext";

function Header() {
  const { user } = useUser();
  return (
    <div className="flex justify-end items-center gap-7 px-5 h-[82px] bg-gradient-to-t from-[#e7eeff] to-[#f5f8ff]">
      <div className="flex items-center gap-4 cursor-pointer group">
        <img
          src="dashboard/user.webp"
          className="w-[48px] h-[48px] group-hover:-rotate-12 duration-300"
        />
        <div className="flex flex-col">
          <span className="text-[16px] font-bold group-hover:text-primary duration-300">
            {user?.email}
          </span>
          <span className="text-[14px] text-[#a4a5a5]">مختص التمويل</span>
        </div>

        <img src="dashboard/arrow-down.webp" className="h-[16px] w-[16px]" />
      </div>

      <div>
        <img
          src="dashboard/notification-off.webp"
          className="w-[42px] h-[42px] hover:rotate-45 duration-300 cursor-pointer"
        />
      </div>
    </div>
  );
}

export default Header;
