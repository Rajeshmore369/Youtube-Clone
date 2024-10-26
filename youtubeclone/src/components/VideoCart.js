import React from "react";
import Avatar from "react-avatar";

const VideoCart = ({ item }) => {
  return (
    <div className="w-94 my-2 cursor-pointer">
      <img
        className="w-full rounded-2xl"
        src="https://static-cse.canva.com/blob/1760641/1600w-wK95f3XNRaM.jpg"
        alt="ytVideo"
      />
      <div className="flex mt-2 ">
        <Avatar
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSrUfiySJr8Org5W-oE2v3_i7VqufglYtSdqw&s"
          size={30}
          round={true}
        />
        <div className="ml-2 ">
          <h1 className="font-bold">{item.snippet.title}</h1>
          <p className="text-sm text-gray-500">{item.snippet.channelTitle}</p>
        </div>
      </div>
    </div>
  );
};

export default VideoCart;
