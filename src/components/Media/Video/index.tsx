import React from "react";
const video = "@src/assets/videos/video.mp4";
const v2 = "https://www.bct.gov.tn/bct/siteprod/documents/20210521_Change.mp4";
const Video: React.FC = () => (
  <>
    <video controls className="react-player">
      <source src={v2} type="video/mp4" />
    </video>
  </>
);

export default Video;
