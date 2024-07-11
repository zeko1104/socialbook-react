import React from "react";

export default function Online({ user }) {
  return (
    <>
      {/* rightbarFriend */}
      <li className="flex items-center mb-4">
        {/*rightbarProfileImgContainer  */}
        <div className="mr-[10px] relative">
          {/* rightbarProfileImg */}
          <img
            className="w-10 h-10 rounded-[50%] object-cover"
            alt=""
            src={user.profilePicture}
          />
          {/* rightbarOnline */}
          <span className="w-3 h-3 rounded-[50%] bg-green-500 absolute top-[-2px] right-0 border-[2px] border-white border-solid"></span>
        </div>
        {/* rightbarUserName */}
        <span className="font-medium text-[15px]">{user.username}</span>
      </li>
    </>
  );
}
