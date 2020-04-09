import React from "react";
import VideoItem from "../components/VideoItem";

const VideoList = ({ videos, onVideoSelect }) => {
  const resnderedList = videos.map((video) => {
    return (
      <VideoItem
        key={video.id.videoId}
        onVideoSelect={onVideoSelect}
        video={video}
      />
    );
  });

  return <div className="ui relaxed divided list">{resnderedList}</div>;
};

export default VideoList;
