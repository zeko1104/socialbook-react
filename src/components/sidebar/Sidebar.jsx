import React from "react";
import RssFeedIcon from "@mui/icons-material/RssFeed";
import Chat from "@mui/icons-material/Chat";
import PlayCircleIcon from "@mui/icons-material/PlayCircle";
import GroupIcon from "@mui/icons-material/Group";
import BookmarkIcon from "@mui/icons-material/Bookmark";
import HelpOutlineIcon from "@mui/icons-material/HelpOutline";
import WorkOutlineIcon from "@mui/icons-material/WorkOutline";
import EventIcon from "@mui/icons-material/Event";
import SchoolIcon from "@mui/icons-material/School";
import CloseFriends from "../closeFriends/CloseFriends";
import { Users } from "../../dummyData";

export default function Sidebar() {
  return (
    // sidebar
    <div className="flex-[3] h-[calc(100vh-50px)] overflow-y-scroll sticky top-[50px]">
      {/* sidebarWrapper */}
      <div className="p-5">
        {/* sidebarList */}
        <ul className="p-0 m-0">
          {/* sidebarListItem */}
          <li className="flex items-center mb-5">
            {/* sidebarIcon */}
            <RssFeedIcon className="mr-4" />
            {/* sidebarListItemText */}
            <span className="">Feed</span>
          </li>
          <li className="flex items-center mb-5">
            {/* sidebarIcon */}
            <Chat className="mr-4" />
            {/* sidebarListItemText */}
            <span className="">Chats</span>
          </li>
          <li className="flex items-center mb-5">
            {/* sidebarIcon */}
            <PlayCircleIcon className="mr-4" />
            {/* sidebarListItemText */}
            <span className="">Videos</span>
          </li>
          <li className="flex items-center mb-5">
            {/* sidebarIcon */}
            <GroupIcon className="mr-4" />
            {/* sidebarListItemText */}
            <span className="">Groups</span>
          </li>
          <li className="flex items-center mb-5">
            {/* sidebarIcon */}
            <BookmarkIcon className="mr-4" />
            {/* sidebarListItemText */}
            <span className="">Bookmarks</span>
          </li>
          <li className="flex items-center mb-5">
            {/* sidebarIcon */}
            <HelpOutlineIcon className="mr-4" />
            {/* sidebarListItemText */}
            <span className="">Questions</span>
          </li>
          <li className="flex items-center mb-5">
            {/* sidebarIcon */}
            <WorkOutlineIcon className="mr-4" />
            {/* sidebarListItemText */}
            <span className="">Jobs</span>
          </li>
          <li className="flex items-center mb-5">
            {/* sidebarIcon */}
            <EventIcon className="mr-4" />
            {/* sidebarListItemText */}
            <span className="">Events</span>
          </li>
          <li className="flex items-center mb-5">
            {/* sidebarIcon */}
            <SchoolIcon className="mr-4" />
            {/* sidebarListItemText */}
            <span className="">Courses</span>
          </li>
        </ul>
        {/* sidebarButton */}
        <button className="w-[150px] border-none p-[10px] rounded-[5px] font-medium">Show More</button>
        {/* sidebarHr */}
        <hr className="m-5" />
        {/* sidebarFriendList */}
        <ul className="p-0 m-0">
          {Users.map(u=>(
            <CloseFriends key={u.id} user={u}/>
          ))}
        </ul>
      </div>
    </div>
  );
}
