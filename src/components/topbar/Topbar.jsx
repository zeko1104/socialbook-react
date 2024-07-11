import React from "react";
import SearchIcon from "@mui/icons-material/Search";
import PersonIcon from "@mui/icons-material/Person";
import Chat from "@mui/icons-material/Chat";
import NotificationsIcon from "@mui/icons-material/Notifications";
import { Link } from "react-router-dom";

export default function Topbar() {
  return (
    // topbarContainer
    <div className="h-[50px]  w-full bg-[#1877f2] flex items-center sticky top-0 z-[999]">
      {/* topbarLeft */}
      <div className="flex-[3]">
        {/* logo */}
        <span className="text-3xl ml-5 font-bold text-white cursor-pointer">
         <Link to='/'>Socialbook</Link>
        </span>
      </div>
      {/* topbarCenter */}
      <div className="flex-[5]">
        {/* search */}
        <div className="w-full h-[30px] bg-white rounded-[30px] flex items-center">
          <SearchIcon className="!text-xl ml-[10px]" />
          {/* searchInput */}
          <input
            type="text"
            placeholder="Search for friend,post or video"
            className="border-none w-[70%] focus:outline-none"
          />
        </div>
      </div>
      {/* topbarRight */}
      <div className="flex-[4] flex items-center justify-around text-white">
        {/* topbarLinks */}
        <div className="">
          {/* topbarLink */}
          <span className="mr-[10px] text-[14px] cursor-pointer">Homepage</span>
          <span className="mr-[10px] text-[14px] cursor-pointer">Timeline</span>
        </div>
        {/* topbarIcons */}
        <div className="flex">
          {/* topbarIconItem */}
          <div className="mr-4 cursor-pointer relative">
            <PersonIcon />
            {/* topbarIconBadge */}
            <span
              className="w-4 h-4 bg-red-500 rounded-[50%] text-white absolute
             top-[-5px] right-[-5px] flex items-center justify-center text-sm"
            >
              1
            </span>
          </div>
          {/* topbarIconItem */}
          <div className="mr-4 cursor-pointer relative">
            <Chat />
            {/* topbarIconBadge */}
            <span
              className="w-4 h-4 bg-red-500 rounded-[50%] text-white absolute
             top-[-5px] right-[-5px] flex items-center justify-center text-sm"
            >
              2
            </span>
          </div>
          {/* topbarIconItem */}
          <div className="mr-4 cursor-pointer relative">
            <NotificationsIcon />
            {/* topbarIconBadge */}
            <span
              className="w-4 h-4 bg-red-500 rounded-[50%] text-white absolute
             top-[-5px] right-[-5px] flex items-center justify-center text-sm"
            >
              1
            </span>
          </div>
        </div>
        {/* topbarImg */}
       <Link to='/profile'> <img src="/assets/person/1.jpeg" alt="" className="w-[32px] h-[32px] rounded-[50%] object-cover cursor-pointer" /></Link>
      </div>
    </div>
  );
}
