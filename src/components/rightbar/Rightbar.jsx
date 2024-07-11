import React from "react";
import { Users } from "../../dummyData";
import Online from "../online/Online";

export default function Rightbar({ profile }) {
  const HomeRightbar = () => {
    return (
      <>
        {/* birthdayContainer */}
        <div className="flex items-center">
          {/* birthdayImg */}
          <img className="w-10 h-10 mr-[10px]" src="assets/gift.png" alt="" />
          {/* birthdayText */}
          <span className="font-light text-[15px]">
            <b>John Wick</b> and <b>3 other friends</b> have a birthday today.
          </span>
        </div>
        {/* rightbarAd */}
        <img
          className="w-full rounded-[10px] mt-[30px] mr-0 mb-5"
          src="assets/ad.png"
          alt=""
        />
        {/* rightBarTitle */}
        <h4 className="mb-5 font-bold">Online Friends</h4>
        {/* rightbarFriendList */}
        <ul className="p-0 m-0">
          {Users.map((u) => (
            <Online key={u.id} user={u} />
          ))}
        </ul>
      </>
    );
  };
  const ProfileRightbar = () => {
    return (
      <>
        {/* profileRightbarTitle */}
        <h4 className="font-medium text-lg mb-[10px]">User Information</h4>
        {/* profileRightbarInfo */}
        <div className="mb-[30px]">
          {/* rightbarInfoItem */}
          <div className="mb-[10px]">
            {/* rightbarInfoKey */}
            <span className="font-medium mr-[15px] text-[#555]">City:</span>
            {/* rightbarInfoValue */}
            <span className="font-light">New York</span>
          </div>
          {/* rightbarInfoItem */}
          <div className="mb-[10px]">
            {/* rightbarInfoKey */}
            <span className="font-medium mr-[15px] text-[#555]">From:</span>
            {/* rightbarInfoValue */}
            <span className="font-light">Madrid</span>
          </div>
          {/* rightbarInfoItem */}
          <div className="mb-[10px]">
            {/* rightbarInfoKey */}
            <span className="font-medium mr-[15px] text-[#555]">Relationship:</span>
            {/* rightbarInfoValue */}
            <span className="font-light">Single</span>
          </div>
        </div>
        {/* profileRightbarTitle */}
        <h4 className="font-medium text-lg mb-[10px]">User Friends</h4>
        {/* rightbarFollowings */}
        <div className="flex flex-wrap justify-between">
          {/* rightbarFollowing */}
          <div className="flex flex-col mb-5 cursor-pointer">
            {/* rightbarFollowingImg */}
            <img
              src="assets/person/1.jpeg"
              alt=""
              className="w-[100px] h-[100px] object-cover rounded-[5px]"
            />
            {/* rightbarFollowingName */}
            <span className="font-light ml-3">John Carter</span>
          </div>
          {/* rightbarFollowing */}
          <div className="flex flex-col mb-5 cursor-pointer">
            {/* rightbarFollowingImg */}
            <img src="assets/person/2.jpeg" alt="" className="w-[100px] h-[100px] object-cover rounded-[5px]" />
            {/* rightbarFollowingName */}
            <span className="font-light ml-3">John Carter</span>
          </div>
          {/* rightbarFollowing */}
          <div className="flex flex-col mb-5 cursor-pointer">
            {/* rightbarFollowingImg */}
            <img src="assets/person/3.jpeg" alt="" className="w-[100px] h-[100px] object-cover rounded-[5px]" />
            {/* rightbarFollowingName */}
            <span className="font-light ml-3">John Carter</span>
          </div>
          {/* rightbarFollowing */}
          <div className="flex flex-col mb-5 cursor-pointer">
            {/* rightbarFollowingImg */}
            <img src="assets/person/4.jpeg" alt="" className="w-[100px] h-[100px] object-cover rounded-[5px]" />
            {/* rightbarFollowingName */}
            <span className="font-light ml-3">John Carter</span>
          </div>
          {/* rightbarFollowing */}
          <div className="flex flex-col mb-5 cursor-pointer">
            {/* rightbarFollowingImg */}
            <img src="assets/person/5.jpeg" alt="" className="w-[100px] h-[100px] object-cover rounded-[5px]" />
            {/* rightbarFollowingName */}
            <span className="font-light ml-3">John Carter</span>
          </div>
          {/* rightbarFollowing */}
          <div className="flex flex-col mb-5 cursor-pointer">
            {/* rightbarFollowingImg */}
            <img src="assets/person/6.jpeg" alt="" className="w-[100px] h-[100px] object-cover rounded-[5px]" />
            {/* rightbarFollowingName */}
            <span className="font-light ml-3">John Carter</span>
          </div>
          {/* rightbarFollowing */}
          <div className="flex flex-col mb-5 cursor-pointer">
            {/* rightbarFollowingImg */}
            <img src="assets/person/7.jpeg" alt="" className="w-[100px] h-[100px] object-cover rounded-[5px]" />
            {/* rightbarFollowingName */}
            <span className="font-light ml-3">John Carter</span>
          </div>
          {/* rightbarFollowing */}
          <div className="flex flex-col mb-5 cursor-pointer">
            {/* rightbarFollowingImg */}
            <img src="assets/person/8.jpeg" alt="" className="w-[100px] h-[100px] object-cover rounded-[5px]" />
            {/* rightbarFollowingName */}
            <span className="font-light ml-3">John Carter</span>
          </div>
          {/* rightbarFollowing */}
          <div className="flex flex-col mb-5 cursor-pointer">
            {/* rightbarFollowingImg */}
            <img src="assets/person/9.jpeg" alt="" className="w-[100px] h-[100px] object-cover rounded-[5px]" />
            {/* rightbarFollowingName */}
            <span className="font-light ml-3">John Carter</span>
          </div>
        </div>
      </>
    );
  };
  return (
    // rightbar
    <div className="flex-[3.5]">
      {/* rightbarWrapper */}
      <div className="pt-5 pr-5 pb-0 pl-0">
        {profile ? <ProfileRightbar /> : <HomeRightbar />}
      </div>
    </div>
  );
}
