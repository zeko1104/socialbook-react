import React from "react";

export default function CloseFriends({user}) {
  return (
    <>
      {/* sidebarFriend */}
      <li className="flex items-center mb-4">
        {/* sidebarFriendImg */}
        <img
          className="w-8 h-8 rounded-[50%] object-cover mr-[10px]"
          src={user.profilePicture}
          alt=""
        />
        {/* sidebarFriendName */}
        <span className="">{user.username}</span>
      </li>
    </>
  );
}
