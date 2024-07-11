import React from "react";

export default function Register() {
  return (
    // register
    <div className="w-screen h-screen bg-[#f0f2f5] flex items-center justify-center">
      {/* loginWrapper */}
      <div className="w-[70%] h-[70%] flex">
        {/* loginLeft */}
        <div className="flex-[1] flex flex-col justify-center">
          {/* loginLogo */}
          <h3 className="text-[50px] font-extrabold text-[#1775ee] mb-[10px] ">
            Socialbook
          </h3>
          {/* loginDesc */}
          <span className="text-2xl">
            Socialbook is a social media app that allows users to share their
            thoughts, photos, and videos
          </span>
        </div>
        {/* loginRight */}
        <div className="flex-[1] flex flex-col justify-center">
          {/* loginBox */}
          <div className="h-[400px] p-5 bg-white rounded-[10px] flex flex-col justify-between">
            {/* loginInput */}
            <input
              type="text"
              placeholder="Username"
              className="h-[50px] rounded-[10px] border border-solid border-gray-300 text-lg pl-5 focus:outline-none"
            />
            {/* loginInput */}
            <input
              type="email"
              placeholder="Email"
              className="h-[50px] rounded-[10px] border border-solid border-gray-300 text-lg pl-5 focus:outline-none"
            />
            {/* loginInput */}
            <input
              type="password"
              placeholder="Password"
              className="h-[50px] rounded-[10px] border border-solid border-gray-300 text-lg pl-5 focus:outline-none"
            />
            {/* loginInput */}
            <input
              type="password"
              placeholder="Password Again"
              className="h-[50px] rounded-[10px] border border-solid border-gray-300 text-lg pl-5 focus:outline-none"
            />
            {/* loginButton */}
            <button className="h-[50px] rounded-[10px] border-none bg-[#1775ee] text-white font-medium text-[20px]">
              Sign Up
            </button>
            {/* loginRegisterButton */}
            <button className="h-[50px] w-[60%] self-center rounded-[10px] border-none bg-[#42b72a] text-white font-medium text-[20px]">
              Log into Account
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
