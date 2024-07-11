import React from "react";
import Share from "../Share/Share";
import Post from "../post/Post";
import {Posts} from '../../dummyData'

export default function Feed() {
  return (
    // feed
    <div className="flex-[5.5]">
      {/* feedWrapper */}
      <div className="p-5">
        <Share />
        {Posts.map(p=>(
          <Post key={p.id} post={p} />
        ))}
      </div>
    </div>
  );
}
