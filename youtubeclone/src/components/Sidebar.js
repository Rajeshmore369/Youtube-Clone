import React from "react";
import { IoMdHome } from "react-icons/io";
import { SiYoutubeshorts } from "react-icons/si";
import { MdOutlineSubscriptions } from "react-icons/md";
import { AiFillLike } from "react-icons/ai";
import { MdOutlineWatchLater } from "react-icons/md";
import { MdOutlineLightbulb } from "react-icons/md";
import { BiSolidVideos } from "react-icons/bi";
import { CgPlayList } from "react-icons/cg";
import { FaHistory } from "react-icons/fa";
import { GrChannel } from "react-icons/gr";
import { useSelector } from "react-redux";

const sideBarMenu = [
  {
    icon: <IoMdHome size={"24px"} />,
    title: "Home",
  },
  { icon: <SiYoutubeshorts size={"24px"} />, title: "Shorts" },
  { icon: <MdOutlineSubscriptions size={"24px"} />, title: "Subscription" },
  {
    icon: <GrChannel size={"24px"} />,
    title: "Your Channel",
  },
  { icon: <FaHistory size={"24px"} />, title: "History" },
  { icon: <CgPlayList size={"24px"} />, title: "Playlist" },
  {
    icon: <BiSolidVideos size={"24px"} />,
    title: "Your Videos",
  },
  { icon: <MdOutlineLightbulb size={"24px"} />, title: "Your Courses" },
  { icon: <MdOutlineWatchLater size={"24px"} />, title: "watch later" },
  {
    icon: <AiFillLike size={"24px"} />,
    title: "liked videos",
  },
  { icon: <SiYoutubeshorts size={"24px"} />, title: "Shorts" },
  { icon: <MdOutlineSubscriptions size={"24px"} />, title: "Subscription" },
  {
    icon: <IoMdHome size={"24px"} />,
    title: "Home",
  },
  { icon: <SiYoutubeshorts size={"24px"} />, title: "Shorts" },
  { icon: <MdOutlineSubscriptions size={"24px"} />, title: "Subscription" },
  {
    icon: <IoMdHome size={"24px"} />,
    title: "Home",
  },
  { icon: <SiYoutubeshorts size={"24px"} />, title: "Shorts" },
  { icon: <MdOutlineSubscriptions size={"24px"} />, title: "Subscription" },
  {
    icon: <IoMdHome size={"24px"} />,
    title: "Home",
  },
  { icon: <SiYoutubeshorts size={"24px"} />, title: "Shorts" },
  { icon: <MdOutlineSubscriptions size={"24px"} />, title: "Subscription" },
  {
    icon: <IoMdHome size={"24px"} />,
    title: "Home",
  },
  { icon: <SiYoutubeshorts size={"24px"} />, title: "Shorts" },
  { icon: <MdOutlineSubscriptions size={"24px"} />, title: "Subscription" },
];

const Sidebar = () => {
  const isOpen = useSelector((store) => store.app.isOpen);
  return (
    <div
      className={` w-[13%]  left-0  p-5 h-[calc(100vh-4.625rem)] ml-2 overflow-y-scroll overflow-x-hidden  ${
        isOpen ? " " : "hidden"
      }`}
    >
      {sideBarMenu.map((items, index) => {
        return (
          <div key={index} className="flex my-3 ">
            {items.icon}
            <p className={`ml-3 ${isOpen ? " " : "hidden"}`}>{items.title}</p>
          </div>
        );
      })}
    </div>
  );
};

export default Sidebar;
