import React from "react";
import Feed from "../../components/feed/Feed";
import Rightbar from "../../components/rightbar/Rightbar";
import Sidebar from "../../components/sidebar/Sidebar";
import Topbar from "../../components/topbar/Topbar";

export default function Profile() {
  return (
    <>
      <Topbar />
      {/* profile */}
      <div className="flex">
        <Sidebar />
        {/* profileRight */}
        <div className="flex-[9]">
          {/* profileRightTop */}
          <div className="">
            {/* profileCover */}
            <div className="h-80 relative">
              {/* profileCoverImg */}
              <img
                className="w-full h-[250px] object-cover"
                src="assets/post/3.jpeg"
                alt=""
              />
              {/* profileUserimg */}
              <img
                className="w-[150px] h-[150px] rounded-[50%] object-cover
                 absolute left-0 right-0 m-auto top-[150px] border-4 border-solid border-white"
                src="assets/person/1.jpeg"
                alt=""
              />
            </div>
            {/* profileInfo */}
            <div className="flex flex-col items-center justify-center">
              {/* profileInfoName */}
              <h4 className="font-bold text-2xl">Lorem Ipsum</h4>
              {/* profileInfoDesc */}
              <span className="font-medium">Hello my Friends!</span>
            </div>
          </div>
          {/* profileRightBottom */}
          <div className="flex">
            <Feed />
            <Rightbar profile/>
          </div>
        </div>
      </div>
    </>
  );
}
