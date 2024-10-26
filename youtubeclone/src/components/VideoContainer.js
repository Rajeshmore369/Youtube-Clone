import React, { useEffect, useState } from "react";
import axios from "axios";
import { YOUTUBE_VIDEO_API } from "../constant/ytapi";
import VideoCart from "./VideoCart";
const VideoContainer = () => {
  const [Video, setVideo] = useState([]);
  const featchVideo = async () => {
    try {
      const res = await axios.get(`${YOUTUBE_VIDEO_API}`);
      console.log(res?.data?.items);
      setVideo(res?.data?.items);
    } catch (error) {
      console.log("error");
    }
  };
  useEffect(() => {
    featchVideo();
  }, []);
  return (
    <div className="grid grid-cols-3  gap-3">
      {Video.map((item) => {
        return <VideoCart key={item.id} item={item} />;
      })}
    </div>
  );
};

export default VideoContainer;
