import { Typography } from "antd";
import React from "react";
const { Paragraph, Title } = Typography;


type videoPropsType = {
    url: string;
    title:string
}
const Video: React.FC<videoPropsType> = ({ url,title }) => (
  <>
    <Title level={3} className="title-video">
        {title}
    </Title>
    <video controls className="react-player">
      <source src={url} type="video/mp4" />
    </video>
  </>
);

export default Video;
