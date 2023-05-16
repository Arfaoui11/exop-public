import { createFromIconfontCN } from '@ant-design/icons';
import { Col, Row } from 'antd';
import { AnimationOnScroll } from 'react-animation-on-scroll';
import { BreakoutIcon, MessageIcon, MessageSmileIcon, ZapIcon } from "../../assets/icons";
const IconFont = createFromIconfontCN({
  scriptUrl: '//at.alicdn.com/t/font_8d5l8fzk5b87iudi.js',
});
const featuresData = [
 
  {
    icon: <BreakoutIcon />,
    title: "Share team inboxes",
    paragraph:
      "Borem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.",
  },
    {
    icon: <MessageIcon />,
    title: "Share team inboxes",
    paragraph:
      "Borem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.",
  },
    {
    icon: <MessageSmileIcon />,
    title: "Share team inboxes",
    paragraph:
      "Borem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.",
  },
    {
    icon: <ZapIcon />,
    title: "Share team inboxes",
    paragraph:
      "Borem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.",
  },
];
export default function Box() {
  return (
    <>

     <Row gutter={[24, 48]} >
      {featuresData.map((feature) => (<>
          <Col  xs={24} sm={12} md={12} lg={6} xl={6}>
            <AnimationOnScroll animateIn="animate__fadeInUp" duration={1} animateOnce={true}>
                <div className="card">
                  <div className="icon">
                      {feature.icon}
                  </div>
                  <h3>{feature.title}</h3>
                  <p>{feature.paragraph}</p>
                </div>
            </AnimationOnScroll>
          </Col>
        </>
        ))}
      </Row>
  
    </>
  )
}
