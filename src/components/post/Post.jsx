import React, { useState } from "react";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import {Users} from '../../dummyData';


export default function Post({post}) {
  const [like,setLike] = useState(post.like);
  const [isLiked,setIsLiked] = useState(false);

  const likeHandler =()=>{
    setLike(isLiked ? like - 1 : like + 1);
    setIsLiked(!isLiked);
  }
  return (
    // post
    <div className="w-full rounded-[10px] shadow-md my-[30px]">
      {/* postWrapper */}
      <div className="p-[10px]">
        {/* postTop */}
        <div className="flex items-center justify-between">
          {/* postTopLeft */}
          <div className="flex items-center">
            {/* postProfileImg */}
            <img
              className="w-8 h-8 rounded-[50%] object-cover"
              src={Users.filter((u)=>u.id === post.userId)[0].profilePicture}
              alt=""
            />
            {/* postUsername */}
            <span className="text-base font-medium mx-2.5">{Users.filter((u)=>u.id === post.userId)[0].username}</span>
            {/* postDate */}
            <span className="text-xs">{post.date}</span>
          </div>
          {/* postTopRight */}
          <div className="">
            <MoreVertIcon />
          </div>
        </div>
        {/* postCenter */}
        <div className="my-5 mx-0">
          {/* postText */}
          <span className="">{post?.desc}</span>
          {/* postImage */}
          <img
            src={post.photo}
            alt=""
            className="mt-5 w-full max-h-[500px] object-contain"
          />
        </div>
        {/* postBottom */}
        <div className="flex items-center justify-between">
          {/* postBottomLeft */}
          <div className="flex items-center">
            {/* likeicon */}
            <img className="w-6 h-6 mr-1.5 cursor-pointer" src="assets/like.png" onClick={likeHandler} alt="" />
            {/* hearticon */}
            <img className="w-6 h-6 mr-1.5 cursor-pointer" src="assets/heart.png" onClick={likeHandler} alt="" />
            {/* postlikeCounter */}
            <span className="text-[15px]">{like} people like it</span>
          </div>
          {/* postBottomRight */}
          <div className="">
            {/* postCommentText */}
            <span className="cursor-pointer text-[15px]">{post.comment} comments</span>
          </div>
        </div>
      </div>
    </div>
  );
}
