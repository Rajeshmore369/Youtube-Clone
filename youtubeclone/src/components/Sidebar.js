import React from "react";
import { IoMdHome } from "react-icons/io";
import { SiYoutubeshorts } from "react-icons/si";
import { MdOutlineSubscriptions } from "react-icons/md";

const sideBarMenu = [
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
  return (
    <div className="w-[12%] ml-4 ">
      {sideBarMenu.map((items, index) => {
        return (
          <div className="flex my-3">
            {items.icon}
            <p className="ml-5">{items.title}</p>
          </div>
        );
      })}
    </div>
  );
};

export default Sidebar;
