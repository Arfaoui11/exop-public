import { Typography } from "antd";
import React from "react";
const { Paragraph, Title } = Typography;
const video = "@src/assets/videos/video.mp4";
const v2 = "https://www.bct.gov.tn/bct/siteprod/documents/20210521_Change.mp4";
const Video: React.FC = () => (
  <>
    <Title level={3} className="title-video">
      ROLE DE LA BCT DANS LAPPLICATION DE LA REGLEMENTATION DE CHANGES
    </Title>
    <video controls className="react-player">
      <source src={v2} type="video/mp4" />
    </video>
  </>
);

export default Video;
