import React from "react";
import PermMediaIcon from "@mui/icons-material/PermMedia";
import LabelIcon from "@mui/icons-material/Label";
import RoomIcon from "@mui/icons-material/Room";
import EmojiEmotionsIcon from "@mui/icons-material/EmojiEmotions";

export default function Share() {
  return (
    // share
    <div className="w-full h-[170px] rounded-[10px] shadow-md">
      {/* shareWrapper */}
      <div className="p-[10px]">
        {/* shareTop */}
        <div className="flex items-center">
          {/* shareProfileImg */}
          <img
            className="w-[50px] h-[50px] rounded-[50%] object-cover mr-[10px]"
            src="/assets/person/1.jpeg"
            alt=""
          />
          {/* shareInput */}
          <input
            placeholder="What's in your mind?"
            className="border-none w-[80%] focus:outline-none"
          />
        </div>
        {/* shareHr */}
        <hr className="m-5" />
        {/* shareBottom */}
        <div className="flex items-center justify-between">
          {/* shareOptions */}
          <div className="flex ml-5">
            {/* shareOption */}
            <div className="flex items-center mr-4 cursor-pointer">
              {/* shareIcon */}
              <PermMediaIcon htmlColor="tomato" className="text-lg mr-[3px]" />
              {/* shareOptionText */}
              <span className="text-[14px] font-medium">Photo or Video</span>
            </div>
            {/* shareOption */}
            <div className="flex items-center mr-4 cursor-pointer">
              {/* shareIcon */}
              <LabelIcon htmlColor="blue" className="text-lg mr-[3px]" />
              {/* shareOptionText */}
              <span className="text-[14px] font-medium">Tag</span>
            </div>
            {/* shareOption */}
            <div className="flex items-center mr-4 cursor-pointer">
              {/* shareIcon */}
              <RoomIcon htmlColor="green" className="text-lg mr-[3px]" />
              {/* shareOptionText */}
              <span className="text-[14px] font-medium">Loaction</span>
            </div>
            {/* shareOption */}
            <div className="flex items-center mr-4 cursor-pointer">
              {/* shareIcon */}
              <EmojiEmotionsIcon
                htmlColor="gold"
                className="text-lg mr-[3px]"
              />
              {/* shareOptionText */}
              <span className="text-[14px] font-medium">Feelings</span>
            </div>
          </div>
          {/* shareButton */}
          <button
            className="border-none p-2 rounded-md bg-green-500
           font-medium mr-5 cursor-pointer text-white"
          >
            Share
          </button>
        </div>
      </div>
    </div>
  );
}
