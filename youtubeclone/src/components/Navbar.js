import React from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { CiSearch } from "react-icons/ci";
import { MdOutlineVideoCall } from "react-icons/md";
import { IoMdNotificationsOutline } from "react-icons/io";
import Avatar from "react-avatar";
const Navbar = () => {
  return (
    <div className="flex justify-between fixed w-[100%] items-center top-0 bg-white">
      <div className="flex  w-[96%] justify-between py-3 px-2 pt-2">
        {/*hamburger menu*/}
        <div className="flex items-center ">
          <GiHamburgerMenu size={"24px"} />
          <img
            className="px-4"
            width={"115px"}
            height={"30px"}
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/YouTube_Logo_2017.svg/768px-YouTube_Logo_2017.svg.png"
            alt="yt_logo"
          />
        </div>
        {/*search bar*/}
        <div className="flex w-[40%]  items-center">
          <div className="border w-[100%] py-2 px-4 border-gray-400 rounded-l-full ">
            <input
              type="text"
              className=" w-full outline-none"
              placeholder="search..."
            />
          </div>
          <button className=" px-4 py-2 rounded-r-full border border-gray-400">
            <CiSearch size={"25px"} />
          </button>
        </div>

        <div className="flex w-[10%] justify-between">
          <MdOutlineVideoCall className="cursor-pointer" size={"30px"} />
          <IoMdNotificationsOutline className="cursor-pointer" size={"30px"} />
          <Avatar
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSrUfiySJr8Org5W-oE2v3_i7VqufglYtSdqw&s"
            size={30}
            round={true}
          />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
